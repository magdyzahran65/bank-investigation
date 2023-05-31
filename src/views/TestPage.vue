<template>
    <div class="text-page">
        <h1 class="text-center m-1">add Requester</h1>
        <form @submit.prevent>
            <input type="text" v-model="addNewRequester.name" />
            <input type="text" v-model="addNewRequester.identification" />
            <input type="text" v-model="addNewRequester.working_status" />
            <input type="text" v-model="addNewRequester.home_address" />
            <input type="text" v-model="addNewRequester.work_address" />
            <input type="text" v-model="addNewRequester.mob_phone" />
            <input type="text" v-model="addNewRequester.home_phone" />
            <input type="text" v-model="addNewRequester.marital_status" />
            <input type="text" v-model="addNewRequester.family_count" />
            <input type="text" v-model="addNewRequester.marital_status" />
            <input type="text" v-model="addNewRequester.kids_count" />
            <input type="text" v-model="addNewRequester.avg_income" />
            <input type="text" v-model="addNewRequester.user" />
            <textarea
                cols="30"
                rows="10"
                v-model="addNewRequester.description"
            ></textarea>

            <button class="btn btn-danger" @click="addRequester()">
                add requester
            </button>
        </form>
        <button class="btn btn-success m-5" @click="addNewRegion()">add</button>
    </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/constants/api-url";
export default {
    name: "TestPage",
    mounted() {},
    methods: {
        addRequester() {
            axios
                .post(
                    "http://172.16.0.225:8000/api/investigation/requester/",
                    this.addNewRequester
                )
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                    console.log(error.request.responseText);
                });
        },
        addNewRegion() {
            axios
                .post(`${BASE_URL}/api/investigation/region/`, this.addRegion)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    data() {
        return {
            region: "",
            addNewRequester: {
                name: "user415",
                identification: "12345678912345",
                age: "50",
                working_status: "ok",
                home_address: "jsgdkj   ",
                work_address: "dkufksd",
                mob_phone: "01112890867",
                home_phone: "12",
                marital_status: "yse",
                family_count: "4",
                kids_count: "2",
                avg_income: "10000",
                description: "d,jfhskjdfhl sdkfh skjdhf sd",
                user: "admin@example.com",
            },
            addRegion: {
                province: "Cairo",
                city: "Nasr city",
                region: "city 2",
                description: " testing data type",
                user: "admin@example.com",
            },
        };
    },
};
</script>
<style lang="scss" scoped>
form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
input {
    display: flex;
    margin: 15px;
}
.text-page {
    // min-height: calc(50vh - 700px);
    min-height: 100vh;
}
textarea {
    display: block;
}
button {
    display: block;
}
</style>
