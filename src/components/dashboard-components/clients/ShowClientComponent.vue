<template>
    <div>
        <!-- <h1 class="text-center">this is Show client component</h1> -->
        <div class="go-back-btn-container">
            <button class="btn btn-success ms-2 go-back-btn" @click="goBack()">
                Back
            </button>
        </div>
        <ul>
            <li class="">
                <h2 class="show-client-name text-center p-2">
                    {{ clientDetails.name }}
                </h2>
                <p>
                    <span>identification :</span>
                    {{ clientDetails.identification }}
                </p>
                <p><span> age :</span>{{ clientDetails.age }}</p>
                <p>
                    <span>working_status :</span>
                    {{ clientDetails.working_status }}
                </p>
                <p>
                    <span>home address :</span> {{ clientDetails.home_address }}
                </p>
                <p>
                    <span>work address :</span> {{ clientDetails.work_address }}
                </p>
                <p>
                    <span>marital status :</span>
                    {{ clientDetails.marital_status }}
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
import { BASE_URL, All_REQUESTERS } from "@/constants/api-url";
import axios from "axios";
export default {
    name: "ShowClientComponent",
    mounted() {
        this.ShowClientDetails();
    },
    methods: {
        async ShowClientDetails() {
            const id = this.$route.params.id;
            // console.log(id.id);
            const getClientDetails = await axios.get(
                `${BASE_URL}${All_REQUESTERS}${id}`
            );
            try {
                console.log(getClientDetails);
                this.clientDetails = getClientDetails.data;
            } catch (error) {
                console.error(error);
            }
        },
        goBack() {
            this.$router.back();
        },
    },
    data() {
        return {
            clientDetails: "",
        };
    },
};
</script>
<style scoped lang="scss">
li {
    color: rgb(78, 71, 71);
    border-bottom: 2px solid green;
    border-radius: 5px;
    width: 75%;
    margin: 10px auto;
    text-align: start;
    padding: 10px;
    & span {
        color: rgb(30, 30, 45);
        text-transform: uppercase;
        margin: 5px;
    }
    & p {
        color: #4141ae;
    }
    & h2 {
        color: rgb(53, 53, 53);
        // text-decoration: underline;
        text-shadow: 1px 1px 2px #d5cfcf;
    }
}

.go-back-btn {
    margin: 0 20px;
}
</style>
