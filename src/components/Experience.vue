<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps < { position: string, company: string, description: string, skills: string[], dates: [Date, Date] | null } > ()
console.log(props.dates)
</script>

<template>
    <h4 class="text-xl font-bold">
        {{ position }}, {{ company }}
    </h4>
    <div class="flex items-center">
        <h5 class="text-lg font-bold">
            Stack:
        </h5>
        <div v-for="skill in skills" class="mx-1 p-1 content-center items-center" >
            <Icon width="2em" :icon="skill"/>
        </div>
    </div>

    <p>
            {{ description }}
        </p>
</template>

<style>
</style>