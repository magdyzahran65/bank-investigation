import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

// import store from "@/store/index";
import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        const JwtToken = localStorage.getItem("bearer");
        if (JwtToken) {
            config.headers.Authorization = `Bearer ${JwtToken}`;
            // console.log(config.headers.Authorization);
        } else {
            // console.error("not logged in");
        }
        return config;
    },
    (error) => {
        console.error(error);
        // return Promise.reject(error);
    }
);

Vue.use(VueRouter);
const requireAuth = (to, from, next) => {
    const isLogged = localStorage.getItem("isLogged");
    const hasToken = localStorage.getItem("bearer");
    if (hasToken != null && isLogged === "true") {
        next();
    } else {
        next("/");
    }
};
const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },

    {
        path: "/my-profile",
        name: "UserProfileComponent",
        component: () =>
            import("@/views/user-profile/UserProfileComponent.vue"),
    },
    {
        path: "/test",
        name: "test",
        component: () => import("@/views/TestPage.vue"),
    },
    {
        path: "/testing",
        name: "testPageTwo",
        component: () => import("@/views/testPageTwo.vue"),
    },

    {
        path: "/dashboard",
        name: "AdminDashboard",
        component: () => import("../views/dashboard/AdminDashboardPage.vue"),
        children: [
            {
                path: "/dashboard/investigations",
                name: "InvestigationsComponent",
                component: () =>
                    import(
                        "@/views/dashboard/Investigations/InvestigationsComponent.vue"
                    ),
            },
            {
                path: "/dashboard/investigations/:id",
                name: "InvestigationShow",
                component: () =>
                    import(
                        "@/components/dashboard-components/investigations-components/InvestigationShow.vue"
                    ),
            },
            {
                path: "/dashboard/requests",
                name: "RequestsComponent",
                component: () =>
                    import("@/views/dashboard/Requests/RequestsComponent.vue"),
            },
            {
                path: "/dashboard/requests/:id",
                name: "ShowClientComponent",
                component: () =>
                    import(
                        "@/components/dashboard-components/clients/ShowClientComponent.vue"
                    ),
            },
            {
                path: "/dashboard/regions",
                name: "RegionsComponent",
                component: () =>
                    import("@/views/dashboard/Regions/RegionsComponent.vue"),
            },
            {
                path: "/dashboard/employees",
                name: "EmployeesComponent",
                component: () =>
                    import(
                        "@/views/dashboard/Employees/EmployeesComponent.vue"
                    ),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    if (to.name !== "HomeView") {
        requireAuth(to, from, next);
    } else {
        next();
    }
});

export default router;
