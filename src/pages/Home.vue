<script lang="ts" setup>
import Wave from '../components/Wave.vue';
import Experience from '../components/Experience.vue';

const company = "Dropbox"
const position = "Automation Engineer"
const dates: [Date, Date] = [new Date("January 1, 2024"), new Date("February 1, 2025")]
const skills = [
    "logos:go",
    "logos:aws",
    "logos:python",
    "logos:postgresql",
    "logos:langchain"
]

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</script>

<template>
    <div class="flex flex-col sm:flex-row-reverse  items-center justify-between ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Chimpanzee_seated_at_typewriter.jpg"
            alt="self portrait" class="transition-[width] duration-800 rounded-md md:w-64 sm:w-48 w-72 sm:my-0 my-4">
        <div class="flex-col">
            <h1 class="text-4xl font-bold mr-12">
                Benjamin Gelb
                <Wave>
                    👋
                </Wave>

            </h1>
            <h4 class="text-xl">Software Engineer, Los Angeles</h4>

        </div>

    </div>
    <hr class="my-6 text-slate-300">

    <Experience :company :position :skills :dates :description />
</template>

<style>
span {
    padding-left: 0.25em;
}
</style>