<template>
  <div :class="className" >
    <component
      v-if="editing && type === 'select'"
      :is="'select'"
      ref="inputRef"
      :value="selectedPackage"
      @change="handleSelectInput"
      @blur="handleBlur"
      :class="inputClassName"
    >
      <!-- <slot name="options"></slot> -->
   <template v-if="packageDisplay">
     <option value="Premium" :selected="selectedPackage === 'premium'">Premium</option>
    <option value="Elite" :selected="selectedPackage === 'elite'">Elite</option>
    <option value="Basic" :selected="selectedPackage === 'basic'">Basic</option>
   </template>
   <template v-else>
     <option value="Pending" :selected="selectedPackage === 'Pending'">Pending</option>
    <option value="Clear" :selected="selectedPackage === 'Clear'">Clear</option>
   </template>
    </component>
    <component
      v-if="editing && type !== 'select'"
      :is="inputTag"
      ref="inputRef"
      :type="type"
      :value="value"
      @input="handleInput"
      @blur="handleBlur"
      @keydown="handleKeyDown"
      :class="inputClassName"
    />
    <component
      v-else
      :is="displayTag"
      :class="displayClassName"
      @dblclick="setEditing(true)"
    >
      <slot v-if="renderDisplay" :value="value">{{ value || 'No value' }}</slot>
      <template v-else>{{ value || selectedPackage || 'No value' }}</template>
    </component>
  </div>
</template>

<script setup lang="ts">
import type { JSX } from 'vue/jsx-runtime';

type EditableInputFieldType = "text" | "email"| "select";

interface EditableInputFieldProps {
  value: string | number;
  type?: EditableInputFieldType;
  onChange: (newValue: string) => void;
  renderDisplay?: (value: string | number) => string | number | JSX.Element;
  className?: string;
  inputClassName?: string;
  displayClassName?: string;
  selectedPackage?:"premium" | "elite" | "basic" | "Pending" | "Clear";
  packageDisplay?: boolean; 
  autoFocus?: boolean;
  onEnterBlur?: boolean; // for textarea to optionally blur on Enter
  displayAs?: "h1" | "p"| "h4" | "span" | "div";
}

import { ref, watch  } from 'vue';

const props = withDefaults(defineProps<EditableInputFieldProps>(), {
  type: 'text',
  className: '',
  inputClassName: 'input',
  displayClassName: 'cursor-pointer',
  autoFocus: false,
  onEnterBlur: true,
  packageDisplay:true,
  displayAs: 'p',
});
const editing = ref(false);
const inputRef = ref<HTMLElement | HTMLSelectElement | null>(null);
const inputTag = props.type === 'email' ? 'input' : 'input';
const displayTag = props.displayAs;

watch(editing, (newValue) => {
  if (newValue && inputRef.value) {
    inputRef.value.focus();
  }
});

const handleBlur = () => {
  editing.value = false;
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const newValue =  target.value;
  props.onChange(String(newValue) as string);
};
const handleSelectInput = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  const newValue =  target.value;
  props.onChange(String(newValue) as string);
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && props.onEnterBlur) {
    event.preventDefault();
    editing.value = false;
  }
};

const setEditing = (value: boolean) => {
  editing.value = value;
};

</script>

<style scoped>
.input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 4px;
  width: 100%;
  background: transparent;
  outline: none;
  
}
.cursor-pointer {
  cursor: pointer;
}

select{
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 4px;
  width: 100%;
  background: transparent;
  outline: none;
}option {
  font-size: 10px;
  color:black;
}
</style>