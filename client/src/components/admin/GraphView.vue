<template>
    <div class="card_bg" style="padding: 2rem 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; align-items: center;">
            <div>
                <h1 class="card-title">
                   Membership Growth
                </h1>
                <h4>
                    Monthly new member sign ups
                </h4>
            </div>
        </div>
 <Bar :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, scales } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'members',
        backgroundColor: '#fa1e1e',
        data: [40, 20, 12, 39, 10, 20],
        borderWidth: 0,
    borderRadius:4
      }
    ]
  }

  const  chartOptions= {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
               
            }
        }
      }
 
</script>

<style scoped>

</style>