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
    <header>
        <nav>
            <RouterLink v-for="link in rootLinks" :to="link.path">
                {{ link.path === "/" ? "Home" : capitalize(link.path.slice(1)) }}
            </RouterLink>
        </nav>
    </header>
    <main>
        <slot />
    </main>
</template>