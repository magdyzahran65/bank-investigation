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
            <!-- card view -->
            <InvestigationCardComponent
                :investigations="investigations"
                :cardView="cardView"
            />
            <!-- table view -->
            <InvestigationTableComponent
                :investigations="investigations"
                :cardView="cardView"
            />
        </div>
    </div>
</template>
<script>
// card component
import InvestigationCardComponent from "@/components/dashboard-components/investigations-components/InvestigationCardComponent.vue";
import InvestigationTableComponent from "@/components/dashboard-components/investigations-components/InvestigationTableComponent.vue";
// import axios from "axios";
// import { BASE_URL, All_INVESTIGATIONS } from "@/constants/api-url";
export default {
    name: "InvestigationsComponent",
    components: {
        InvestigationCardComponent,
        InvestigationTableComponent,
    },
    props: {
        investigations: {
            type: Array,
        },
        cardView: {
            type: Boolean,
        },
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
    margin: 10px auto;
    width: 200px;
    min-height: 200px;
    border: 1px solid gray;
    // border-bottom: none;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    text-align: center;
    padding: 0;
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
