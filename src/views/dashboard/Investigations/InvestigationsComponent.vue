<template>
    <div class="invest-container">
        <div class="invest-img-container">
            <img
                class="sections-img"
                src="@/assets/imgs/investigations/Investigation-report.jpg"
                alt="Investigations"
            />
            <h2 class="text-center">Investigations</h2>
        </div>
        <div class="container-fluid" style="margin: 30px auto">
            <div>
                <label>Status</label>
                <select class="text-secondary m-2 rounded" v-model="invStatus">
                    <option value="">All</option>
                    <option value="done">Done</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
            <!-- table view -->
            <InvestigationTableComponent
                :investigations="investigations"
                :cardView="cardView"
                :invStatusDone="invStatusDone"
                :invStatus="invStatus"
            />
            <!-- card view -->
            <InvestigationCardComponent
                :investigations="investigations"
                :cardView="cardView"
                :invStatusDone="invStatusDone"
                :invStatus="invStatus"
            />
        </div>
    </div>
</template>
<script>
// card component
import InvestigationCardComponent from "@/components/dashboard-components/investigations-components/InvestigationCardComponent.vue";
import InvestigationTableComponent from "@/components/dashboard-components/investigations-components/InvestigationTableComponent.vue";

import { getAllInvestigations } from "@/functions/axiosFunctions.js";

export default {
    name: "InvestigationsComponent",
    async mounted() {
        await getAllInvestigations(this);
    },
    components: {
        InvestigationCardComponent,
        InvestigationTableComponent,
    },
    props: {
        cardView: {
            type: Boolean,
        },
        showAnimation: {
            type: Boolean,
        },
    },
    computed: {
        invStatusDone() {
            return this.investigations.filter(
                (invest) => invest.inv_status == this.invStatus
            );
        },
    },
    methods: {
        // async getAllInvestigations() {
        //     const res = await axios.get(`${BASE_URL}${All_INVESTIGATIONS}`);
        //     try {
        //         this.investigations = res.data.results;
        //         this.AnimationNo();
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },
        AnimationNo() {
            this.$emit("AnimationNo");
            // console.log("stop animation from invests");
            // setTimeout(() => {
            //     // this.showAnimation = false;
            // }, 2000);
        },
    },
    data() {
        return {
            investigations: [],
            invStatus: "",
        };
    },
};
</script>

<style lang="scss">
th {
    padding: 5px;
}
.invest-img-container {
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
.invest-card {
    width: 200px;
    min-height: 200px;
    border: 1px solid gray;
    text-align: center;
    padding: 5px;
    margin: 20px;
}
.invest-id {
    border-bottom: 1px solid gray;
    color: black;
}
.invest-card-body {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 80%;
}
.invest-date {
    color: gray;
}
.invest-type {
    margin: auto;
    & > span {
        // text-decoration: underline;
        text-transform: capitalize;
        color: cornflowerblue;
    }
}
.invest-status {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
}

// =======
@keyframes beatAdminSectionsImg {
    0% {
        transform: translate(10px);
    }
    50% {
        transform: translate(-10px);
    }
    100% {
        transform: translate(10px);
    }
}
</style>
