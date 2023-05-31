<template>
    <div class="admin-dashboard-page-container">
        <LoadingAnimations v-if="showAnimation" />
        <!-- sidebar dashboard START -->
        <transition name="slide" mode="in-out">
            <SidebarDashboard :links="links" />
        </transition>
        <!-- sidebar dashboard END -->
        <div class="content w-100">
            <button @click="cardView = true" class="btn ms-5">
                <i class="fa-brands fa-microsoft"></i>
            </button>
            <button @click="cardView = false" class="btn">
                <i class="fa-solid fa-bars"></i>
            </button>
            <h4 class="text-end text-secondary m-2 d-inline-block">
                <i>Admin dashboard</i>
            </h4>
            <transition name="slide" mode="out-in">
                <router-view
                    :investigations="investigations"
                    :requesters="requesters"
                    :regions="regions"
                    :users="users"
                    :cardView="cardView"
                ></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
import LoadingAnimations from "@/components/animations/LoadingAnimations.vue";
// axios urls
import axios from "axios";
import {
    BASE_URL,
    All_INVESTIGATIONS,
    All_REQUESTERS,
    All_REGIONS,
    All_USERS,
} from "@/constants/api-url";
// components ===== >>>>
import SidebarDashboard from "@/components/dashboard-components/SidebarDashboard.vue";
export default {
    name: "AdminDashboard",
    components: {
        SidebarDashboard,
        LoadingAnimations,
    },
    async mounted() {
        // setTimeout(() => this.getAllInvestigations(), 700);
        await this.getAllInvestigations();
        await this.getAllRequesters();
        // await this.getAllRegions();
        await this.getAllUsers();
    },
    methods: {
        // Investigations Component
        async getAllInvestigations() {
            const res = await axios.get(`${BASE_URL}${All_INVESTIGATIONS}`);
            try {
                // console.log(res);
                this.investigations = res.data.results;
                this.AnimationNo();
            } catch (error) {
                console.log(error);
            }
        },
        async getAllRequesters() {
            const res = await axios.get(`${BASE_URL}${All_REQUESTERS}`);
            try {
                // console.log(res);
                this.requesters = res.data.results;
                this.AnimationNo();
            } catch (error) {
                console.log(error);
            }
        },

        async getAllUsers() {
            const res = await axios.get(`${BASE_URL}${All_USERS}`);
            try {
                // console.log(res.data);
                this.users = res.data;
                this.AnimationNo();
            } catch (error) {
                console.log(error);
            }
        },
        async getAllRegions() {
            const res = await axios.get(`${BASE_URL}${All_REGIONS}`);
            try {
                // console.log(res);
                this.regions = res.data.results;
                this.AnimationNo();
            } catch (error) {
                console.log(error);
            }
        },
        AnimationNo() {
            this.showAnimation = false;
        },
    },
    data() {
        return {
            links: [
                {
                    name: "Investigations",
                    to: "/dashboard/investigations",
                    iconClass: "fa-regular fa-file",
                },
                {
                    name: "Client",
                    to: "/dashboard/requests",
                    iconClass: "fa-regular fa-user",
                },
                {
                    name: "Regions",
                    to: "/dashboard/regions",
                    iconClass: "fa-solid fa-location-dot",
                },
                {
                    name: "Employees",
                    to: "/dashboard/employees",
                    iconClass: "fa-solid fa-users",
                },
            ],
            // inv component data
            investigations: [],
            requesters: [],
            regions: [],
            users: [],
            showAnimation: true,

            // view card or table
            cardView: false,
        };
    },
};
</script>
<style lang="scss">
.admin-dashboard-page-container {
    min-height: calc(
        100vh - var(--app-header-height) - var(--app-footer-height)
    );

    display: flex;
    overflow: auto;
}
.content {
    color: rgb(219, 96, 96);
}
.slide-enter-active {
    animation: transitionSliderIn 0.8s ease-in-out;
}
.slide-leave-active {
    animation: transitionSliderOut 0.8s ease-in-out;
}

@keyframes transitionSliderIn {
    from {
        opacity: 0;
        transform: translate(-20%);
    }
    to {
        opacity: 1;
        transform: translate(0%);
    }
}
@keyframes transitionSliderOut {
    from {
        opacity: 1;
        transform: translate(0%);
    }
    to {
        opacity: 0;
        transform: translate(-20%);
    }
}
</style>
