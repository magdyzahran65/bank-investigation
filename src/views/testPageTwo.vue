<template>
    <div class="text-page">
        <h1 class="text-center m-1">add Requester</h1>
        <form @submit.prevent>
            <div>
                <label> Email</label>
                <input type="email" v-model="newUser.email" />
            </div>

            <div>
                <label> Password</label>
                <input type="text" v-model="newUser.password" />
            </div>

            <div>
                <label> Name</label>
                <input type="text" v-model="newUser.name" />
            </div>

            <div>
                <label> Phone</label>
                <input type="phone" v-model="newUser.phone" />
            </div>

            <div>
                <label> Position</label>
                <input type="text" v-model="newUser.position" />
            </div>

            <div>
                <label> region</label>
                <select v-model="newUser.track">
                    <option v-for="r in regionsList" :key="r.id">
                        {{ r.region }}
                    </option>
                </select>
            </div>
            <!-- <div>{{ regionsList }}</div> -->
            <div>
                <button class="btn btn-success" @click="createNewUser()">
                    Create User
                </button>
            </div>
        </form>
        <p>{{ newUser.track }}</p>
    </div>
</template>

<script>
import axios from "axios";
import { BASE_URL, NEW_USER, All_REGIONS } from "@/constants/api-url";
export default {
    name: "testPageTwo",
    async mounted() {
        await this.getRegions();
    },
    methods: {
        async createNewUser() {
            await axios
                .post(`${BASE_URL}${NEW_USER}`, this.newUser)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        async getRegions() {
            await axios.get(`${BASE_URL}${All_REGIONS}?page=2`).then((res) => {
                console.log(res.data.results);
                this.regionsList = res.data.results;
            });
        },
    },
    data() {
        return {
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
            newUser: {
                email: "user@example.com",
                password: "testpass123",
                name: "mUser",
                phone: "+201112890867",
                position: "manager",
                track: "Heliopolis",
            },
            regionsList: [],
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
