<template>
    <div class="requests-container">
        <div class="requests-img-container">
            <img
                class="sections-img"
                src="@/assets/imgs/Clients/clients.png"
                alt="Clients"
            />
            <h2 class="text-center">Clients</h2>
        </div>
        <div class="container-fluid" style="margin: 30px auto">
            <ClientComponent :requesters="requesters" :cardView="cardView" />
        </div>
    </div>
</template>
<script>
import { getAllRequesters } from "@/views/dashboard/AdminDashboardPage.vue";
import ClientComponent from "@/components/dashboard-components/clients/ClientComponent.vue";
export default {
    name: "RequestsComponent",
    components: {
        ClientComponent,
    },
    created() {
        getAllRequesters;
    },
    props: {
        requesters: {
            type: Array,
        },

        cardView: {
            type: Boolean,
        },
    },
};
</script>
<style lang="scss">
.requests-container {
    width: 100%;
    overflow: auto;
}
.requests-img-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.sections-img {
    border-radius: 10px;
    width: 158px;
    transform: translateX(0px);
    // animation: beatAdminSectionsImg 2.5s ease-in-out infinite;
    z-index: -2;
}
</style>
