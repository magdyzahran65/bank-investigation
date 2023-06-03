<template>
    <!-- v-click-outside="hideAdminSidebar" -->
    <div class="dashboard-page-sidebar-container">
        <button
            @click="showAdminSidebar = !showAdminSidebar"
            class="btn"
            :class="showAdminSidebar ? 'toggle-admin-sidebar-btn' : 'wide-page'"
        >
            <!-- <i class="fa-solid fa-align-left"></i> -->
            <i
                v-if="showAdminSidebar"
                class="fa-solid fa-align-left hide-admin-sidebar-icon"
            ></i>
            <i
                v-else-if="!showAdminSidebar"
                class="fa-solid fa-align-right fa-beat-fade hide-admin-sidebar-icon"
            ></i>
        </button>

        <!-- sidebar dashboard START -->
        <div v-show="showAdminSidebar" class="admin-dashboard-page-sidebar">
            <h6 class="admin-dashboard-header">Dashboard</h6>
            <ul class="admin-dashboard-ul">
                <li
                    v-for="(link, index) in links"
                    :key="index"
                    class="admin-dashboard-li"
                >
                    <router-link
                        class="admin-sidebar-link"
                        exact-active-class="router-link-active"
                        :to="link.to"
                        ><i :class="link.iconClass" class="m-1 text-warning"></i
                        >{{ link.name }}</router-link
                    >
                </li>
            </ul>
        </div>
        <!-- sidebar dashboard END -->
    </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
    name: "SidebarDashboard",
    props: {
        links: {
            type: Array,
        },
    },
    directives: {
        ClickOutside,
    },
    data() {
        return {
            showAdminSidebar: true,
        };
    },
    methods: {
        hideAdminSidebar() {
            this.showAdminSidebar = false;
        },
    },
};
</script>
<style lang="scss">
.dashboard-page-sidebar-container {
    position: relative;
    min-height: 100vh;
}
.toggle-admin-sidebar-btn {
    position: absolute;
    top: 3px;
    left: 153px;
    width: 30px;
    height: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}
.wide-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;

    position: absolute;
    top: 10px;
    left: 15px;
    width: 30px;
    height: 30px;
    border-radius: 0px;

    animation: sliding 0.5s ease-in-out;
}
.hide-admin-sidebar-icon {
    font-size: 15pt;
    color: rgb(44, 41, 41);
}

// ============== sidebar =============
.admin-dashboard-header {
    color: rgb(253, 253, 253);
    border-bottom: 2px solid rgb(255, 255, 255);
    text-align: center;
    padding: 10px;
}
.admin-dashboard-page-sidebar {
    height: 100%;
    animation: sliding 0.5s ease-in-out;
    border: 1px solid rgb(69, 69, 69);
    // background-color: #e9ba4355;
    background: linear-gradient(90deg, rgb(4 3 3) -59%, rgb(98, 12, 12) 100%);
    // padding: 10px;
    width: 150px;
    min-height: var(--min-pages-height);
    box-shadow: 1px 2px 3px gray;
}

.admin-dashboard-li {
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    box-shadow: 2px 2px 3px gray;
    &:hover {
        box-shadow: none;
        background-color: rgb(240, 240, 240);
        // color: #505050 ;
    }
    & a {
        color: #ffffff;
        font-size: 11pt;
        width: 100%;
        padding: 10px 10px;
    }
    & a:hover {
        color: #505050;
    }
}
.admin-sidebar-link {
    text-decoration: none;
    // color: #ffffff;
    display: inline-block;
    width: 100%;
}
.router-link-exact-active {
    color: orange !important;
}

// ==================
</style>
