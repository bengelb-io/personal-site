<script setup lang="ts">
import { Icon } from "@iconify/vue";
defineProps < { position: string, company: string, skills: string[], dates: [Date, Date] | null } > ()
</script>

<template>
    <h3>
        {{ position }}, {{ company }}
    </h3>
    <div>
        <Icon v-for="skill in skills" :icon="skill"/>
    </div>
    

</template>
