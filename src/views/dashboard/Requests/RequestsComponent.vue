<template>
    <div class="requests-container">
        <LoadingAnimations v-if="showAnimation" />
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
import LoadingAnimations from "@/components/animations/LoadingAnimations.vue";
import ClientComponent from "@/components/dashboard-components/clients/ClientComponent.vue";

import { getAllRequesters } from "@/functions/axiosFunctions";
export default {
    name: "RequestsComponent",
    components: {
        ClientComponent,
        LoadingAnimations,
    },
    async mounted() {
        await getAllRequesters(this);
    },
    props: {
        cardView: {
            type: Boolean,
        },
        showAnimation: {
            type: Boolean,
        },
    },
    methods: {
        AnimationNo() {
            this.$emit("AnimationNo");
            // console.log("stop animation from requesters");
        },
    },
    data() {
        return {
            requesters: [],
        };
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
