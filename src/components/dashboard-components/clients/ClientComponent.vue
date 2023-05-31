<template>
    <div class="invest-container">
        <table class="table table-striped requesters-table" v-if="!cardView">
            <thead
                style="
                    border-bottom: 1px solid gray;
                    border-right: 1px solid;
                    box-shadow: 1px 1px 3px gray;
                "
                class="birder border-2"
            >
                <th>id</th>
                <th>name</th>
                <th>identification</th>
                <th>age</th>
                <th>work_address</th>
                <th>home_address</th>
                <th>Details</th>
            </thead>
            <tbody>
                <tr v-for="requester in requesters" :key="requester.id">
                    <td>{{ requester.id }}</td>
                    <td class="show-client-name">{{ requester.name }}</td>
                    <td>{{ requester.identification }}</td>
                    <td>{{ requester.age }}</td>
                    <td>{{ requester.work_address }}</td>
                    <td>{{ requester.home_address }}</td>
                    <td>
                        <button class="btn btn-danger">
                            <router-link
                                class="text-white text-decoration-none more-details-btn"
                                :to="`/dashboard/requests/${requester.id}`"
                                >More</router-link
                            >
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { BASE_URL, All_REQUESTERS } from "@/constants/api-url";
import axios from "axios";
export default {
    name: "ClientComponent",
    props: {
        requesters: {
            type: Array,
        },
        // showAnimation: {
        //     type: Boolean,
        // },
        cardView: {
            type: Boolean,
        },
    },
    async ShowClientDetails() {
        const ClientDetails = await axios.get(
            `${BASE_URL}${All_REQUESTERS}this.$route.params`
        );
        console.log(ClientDetails);
    },
};
</script>
<style lang="scss">
.requesters-table {
    margin: 0 auto;
}
.show-client-name {
    text-transform: capitalize;
}
.more-details-btn {
    font-size: 10pt;
}
</style>
