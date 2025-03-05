<script lang="ts" setup>
</script>

<template>
    <span class="arc">
        <slot/>
    </span>

</template>

<style>
.arc {
    position: absolute;
    animation: arc-animation 0.5s 3 ease-in-out;
}

@keyframes arc-animation {

    50% {
        transform: rotate(30deg) translateX(10px) translateY(-5px);
    }

}
</style>