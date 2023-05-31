<template>
    <div id="app" class="main-layout">
        <!-- app main header -->
        <AppHeader />
        <router-view />

        <AppFooter />

        <!-- <AppFooter /> -->
    </div>
</template>

<script>
import AppHeader from "@/components/app-components/AppHeader.vue";
import AppFooter from "@/components/app-components/AppFooter.vue";
export default {
    name: "App",

    mounted() {},

    components: {
        AppHeader,
        AppFooter,
    },
};
</script>

<style lang="scss"></style>
