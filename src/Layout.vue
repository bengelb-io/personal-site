<script setup lang="ts">
import { useRouter, RouterLink } from "vue-router"

const router = useRouter()
const capitalize = (s: string) => {
    const words = s.split(" ")
    return words.map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ")
}
const rootLinks = router.getRoutes().filter(r => r.path.split("/").length === 2)
</script>
<template>
    <header class="p-6">
        <nav class="flex justify-between">
            <a href="mailto:benjamin.gelb.io@gmail.com" class="hover:cursor-pointer hover:underline">
                Email Me
            </a>
            <div>
                <RouterLink v-for="link in rootLinks" :to="link.path" class="mx-2 hover:cursor-pointer hover:underline">
                    {{ link.path === "/" ? "Portfolio" : capitalize(link.path.slice(1)) }}
                </RouterLink>
            </div>

        </nav>
    </header>
    <main class="flex flex-col md:p-24 px-12 transition-all">
        <slot />
    </main>
</template>