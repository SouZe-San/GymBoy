<template>
  <div :class="className" >
    <component
      v-if="editing"
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
      <template v-else>{{ value || 'No value' }}</template>
    </component>
  </div>
</template>

<script setup lang="ts">
import type { JSX } from 'vue/jsx-runtime';

type EditableInputFieldType = "text" | "email";

interface EditableInputFieldProps {
  value: string | number;
  type?: EditableInputFieldType;
  onChange: (newValue: string) => void;
  renderDisplay?: (value: string | number) => string | number | JSX.Element;
  className?: string;
  inputClassName?: string;
  displayClassName?: string;
  autoFocus?: boolean;
  onEnterBlur?: boolean; // for textarea to optionally blur on Enter
  displayAs?: "h1" | "p"| "h4" | "span" | "div";
}

import { ref, watch, defineProps,withDefaults  } from 'vue';

// const props = defineProps({
//   value: {
//     type: [String, Number],
//     required: true,
//   },
//   type: {
//     type: String ,
//     default: 'text',
//   },
//   onChange: {
//     type: Function,
//     required: true,
//   },
//   renderDisplay: {
//     type: Function,
//     default: null,
//   },
//   className: {
//     type: String,
//     default: '',
//   },
//   inputClassName: {
//     type: String,
//     default: 'border p-1 rounded w-full',
//   },
//   displayClassName: {
//     type: String,
//     default: 'cursor-pointer',
//   },
//   autoFocus: {
//     type: Boolean,
//     default: false,
//   },
//   onEnterBlur: {
//     type: Boolean,
//     default: true,
//   },
//   displayAs: {
//     type: String,
//     default: 'p',
//   },
// });
const props = withDefaults(defineProps<EditableInputFieldProps>(), {
  type: 'text',
  className: '',
  inputClassName: 'input',
  displayClassName: 'cursor-pointer',
  autoFocus: false,
  onEnterBlur: true,
  displayAs: 'p',
});
const editing = ref(false);
const inputRef = ref<HTMLElement | null>(null);
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
</style>