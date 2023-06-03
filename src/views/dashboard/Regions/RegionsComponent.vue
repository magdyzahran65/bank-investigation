<template>
    <div>
        <div class="region-img-container">
            <img
                class="sections-img"
                src="@/assets/imgs/Regions/Egypt.png"
                alt="Regions"
            />
            <h2 class="text-center">Regions</h2>
        </div>

        <div class="invest-container mx-2">
            <table
                class="table table-striped requesters-table"
                v-if="!cardView"
            >
                <thead
                    style="
                        border-bottom: 1px solid gray;
                        border-right: 1px solid;
                        box-shadow: 1px 1px 3px gray;
                    "
                    class="birder border-2"
                >
                    <th>id</th>
                    <th>province</th>
                    <th>city</th>
                    <th>region</th>
                    <!-- <th>description</th> -->
                    <th>user</th>
                </thead>
                <tbody>
                    <tr v-for="region in regions" :key="region.id">
                        <td>{{ region.id }}</td>
                        <td class="show-client-name">{{ region.province }}</td>
                        <td>{{ region.city }}</td>
                        <td>{{ region.region }}</td>
                        <!-- <td>{{ region.description }}</td> -->
                        <td>{{ region.user }}</td>
                        <td>
                            <!-- <button class="btn btn-danger">
                                <router-link
                                    class="text-white text-decoration-none more-details-btn"
                                    :to="`/dashboard/region/${region.id}`"
                                    >More</router-link
                                >
                            </button> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { getAllRegions } from "@/functions/axiosFunctions";
export default {
    name: "RegionsComponent",

    props: {
        cardView: {
            type: Boolean,
        },
    },
    async mounted() {
        await getAllRegions(this);
    },
    methods: {
        AnimationNo() {
            this.$emit("AnimationNo");
            // console.log("stop animation from regions");
        },
    },
    data() {
        return {
            regions: [],
        };
    },
};
</script>
<style lang="scss">
.region-img-container {
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
