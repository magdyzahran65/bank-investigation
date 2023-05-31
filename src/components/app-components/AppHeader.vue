<template>
    <header class="app-header" style="">
        <!-- full Screen -->
        <!-- <i
            @click="enterFullscreen()"
            class="fa-solid fa-expand"
            :class="showFullScreen ? 'fullscreen-icon' : 'hide-fullscreen'"
            style="font-size: 12pt"
        ></i> -->

        <router-link id="homepage-router-link" :to="{ name: 'HomeView' }"
            ><img
                @click="showDropMenu = false"
                class="main-logo"
                src="@/assets/imgs/bankmisr.png"
                alt=""
        /></router-link>

        <h4 class="project-name">BanqueMisr Investigations</h4>
        <div
            v-click-outside="hideDropdown"
            v-show="isLogged"
            class="profile-drop-menu-container"
        >
            <router-link :to="{ name: 'InvestigationsComponent' }">
                <span @click="showDropMenu = false"> Dashboard </span>
            </router-link>
            <button
                @click="showDropMenu = !showDropMenu"
                class="btn btn-danger my-profile-btn"
            >
                <span class="profile-text"></span>
            </button>
            <ul v-show="showDropMenu" class="profile-drop-menu-ul">
                <li @click="showDropMenu = false">
                    <router-link
                        class="btn btn-warning"
                        :to="{ name: 'UserProfileComponent' }"
                        >profile</router-link
                    >
                </li>
                <li @click="showDropMenu = false">
                    <router-link
                        class="btn btn-warning"
                        :to="{ name: 'HomeView' }"
                        >home</router-link
                    >
                </li>
                <!-- logout BTN -->
                <li>
                    <button @click="logOut()" class="btn logout-btn">
                        Logout
                        <i
                            class="fa-solid fa-arrow-right-from-bracket"
                            style="color: #fafafa"
                        ></i>
                    </button>
                </li>
            </ul>
        </div>
    </header>
</template>
<script>
import ClickOutside from "vue-click-outside";

import store from "@/store";
import { mapGetters } from "vuex";
export default {
    name: "AppHeader",
    created() {},
    directives: {
        ClickOutside,
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        isLogged() {
            return store.getters.isLogged;
        },
    },
    methods: {
        logOut() {
            localStorage.removeItem("isLogged");
            localStorage.removeItem("bearer");
            store.state.isLogged = false;
            this.showDropMenu = false;
            this.$router.push({ name: "HomeView" }).catch(() => {});
        },
        hideDropdown() {
            this.showDropMenu = false;
        },

        enterFullscreen() {
            this.showFullScreen = false;
            const element = document.documentElement;

            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                // Firefox
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                // Chrome, Safari, and Opera
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                // IE/Edge
                element.msRequestFullscreen();
            }
        },
    },

    data() {
        return {
            showDropMenu: false,
            showFullScreen: true,
        };
    },
};
</script>
<style lang="scss">
#homepage-router-link {
    &:hover {
        background-color: transparent;
    }
}
.fullscreen-icon {
    font-size: 14pt;
    width: 40px;
    text-align: center;
}
.hide-fullscreen {
    display: none;
    opacity: 0;
}
.app-header {
    height: var(--app-header-height);
    color: white;
    background-color: #5d1616;
    background: linear-gradient(
        90deg,
        rgb(21, 16, 16) 50%,
        rgb(98, 12, 12) 100%
    );
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: var(--app-header-height);
    align-items: center;
    justify-content: center;
    & a {
        color: white;
        text-decoration: none;
        min-width: 100px;

        padding: 5px;
        margin: 5px;

        &:hover {
            color: rgb(50, 50, 50);
            background-color: white;
            border-radius: 5px;
        }
    }
    & button {
        min-width: 70px;
        color: white;
        text-decoration: none;

        padding: 5px;
        margin: 5px;

        &:hover {
            color: rgb(50, 50, 50);
            background-color: white;
            border-radius: 5px;
        }
    }
}
.main-logo {
    width: 40px;
    margin: 10px;
    border: 1px solid white;
    border-radius: 2px;
    box-shadow: -2px 2px 2px #a7a7a7d4;
}
.project-name {
    font-size: 15pt;
    margin-bottom: 0px;
}
@media screen and (max-width: 800px) {
    .project-name {
        font-size: 9pt;
        // margin-top: 7px;
    }
}

.my-profile-btn {
    &.profile-text {
        display: none;
    }
    &:before {
        content: "My Profile";
    }
    @media screen and (max-width: 500px) {
        &:before {
            content: "Profile";
            padding: 10px;
        }
        &.profile-text {
            display: inline-block;
        }
    }
}

.profile-drop-menu-container {
    position: relative;
    margin: 11px;
    display: inline-flex;
    flex-wrap: nowrap;
    text-align: center;
}
.profile-drop-menu-ul {
    width: 150px;
    color: white;
    background-color: rgba(199, 199, 199, 0.567);
    border: 1px solid whitesmoke;
    border-radius: 10px;

    padding: 12px;

    position: absolute;
    top: 40px;
    right: 40px;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.logout-btn {
    background-color: red !important;
    &:hover {
        background-color: brown !important;
        color: white !important;
    }
}
</style>
