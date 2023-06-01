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
import axios from "axios";
import LoadingAnimations from "@/components/animations/LoadingAnimations.vue";
import { BASE_URL, All_REQUESTERS } from "@/constants/api-url";
import ClientComponent from "@/components/dashboard-components/clients/ClientComponent.vue";
export default {
    name: "RequestsComponent",
    components: {
        ClientComponent,
        LoadingAnimations,
    },
    async mounted() {
        await this.getAllRequesters();
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
        AnimationNo() {
            this.$emit("AnimationNo");
            console.log("stop animation from requesters");
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
