<template>
    <div class="home-page">
        <LoginComponent v-if="isLogged == false" />
        <div class="home-age-logged-in-container" v-else-if="isLogged">
            <!-- <img
                src="@/assets/imgs/1600-banque-misr.jpg"
                width="300px"
                alt=""
            /> -->
            <h1 class="home-welcome-header">Welcome</h1>
            <span class="text-white">Links :</span>
            <span>
                <router-link :to="{ name: 'InvestigationsComponent' }">
                    <h3>dashboard</h3>
                </router-link>
            </span>
            <span
                ><router-link :to="{ name: 'RequestsComponent' }">
                    <h6>clients</h6>
                </router-link></span
            >
        </div>
    </div>
</template>

<script>
// components

import LoginComponent from "@/components/login/LoginComponent.vue";
import store from "@/store";
export default {
    name: "HomeView",
    components: {
        LoginComponent,
    },
    created() {
        // console.log(localStorage.isLogged);
    },
    computed: {
        isLogged() {
            return store.getters.isLogged;
        },
    },
};
</script>

<style lang="scss">
.home-page {
    background-image: url(@/assets/imgs/1600-banque-misr.jpg);
    background-size: cover;
    // background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    min-height: calc(
        100vh - var(--app-header-height) - var(--app-footer-height)
    );
    display: flex;
    justify-content: center;
    align-items: center;
    & a {
        color: rgb(255, 252, 252);
        // text-decoration: none;
        padding: 5px;
        margin: 5px;
        &:hover {
            color: gold;
            background-color: transparent;
            border-radius: 5px;
        }
    }
}
@media screen and (max-width: 800px) {
    .home-page {
        background-size: 100% 100%;
        // scale: 1.2;
    }
}
.home-welcome-header {
    animation: fadeIn 1s ease-in-out;
    text-shadow: 2px 2px 3px gray;
    color: gold;
    font-weight: 400;
    text-decoration: underline;
    letter-spacing: 2px;
    margin-bottom: 40px;
}
</style>
