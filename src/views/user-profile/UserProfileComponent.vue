<template>
    <div class="user-profile-page-container">
        <div class="start-sec">
            <div class="user-profile-text-data">
                <h1 class="profile-name">{{ userProfileData.name }}</h1>
                <h4 class="profile-position">{{ userProfileData.position }}</h4>
                <p class="profile-email">{{ userProfileData.email }}</p>
                <p class="profile-phone">{{ userProfileData.phone }}</p>
            </div>
        </div>
        <div class="end-sec">
            <img width="200" src="@/assets/imgs/2.jpg" alt="user-picture" />
            <h6 class="profile-picture-header">Profile picture</h6>
        </div>
        <button class="btn btn-warning update-profile-btn">
            Update Profile
        </button>
    </div>
</template>
<script>
import axios from "axios";

// api constants
import { BASE_URL, USER_PROFILE } from "@/constants/api-url";
export default {
    name: "UserProfileComponent",
    mounted() {
        this.getMyProfile();
    },
    data() {
        return {
            userProfileData: "",
        };
    },
    methods: {
        getMyProfile() {
            axios
                .get(`${BASE_URL}${USER_PROFILE}`)
                .then((response) => {
                    if (response.data) {
                        // console.log(response);
                        this.userProfileData = response.data;
                    } else {
                        console.log("Response data is undefined");
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                    console.log(error.response.data);
                    console.log(error.response.status);
                });
        },
    },
};
</script>
<style lang="scss">
.user-profile-page-container {
    min-height: calc(
        100vh - var(--app-header-height) - var(--app-footer-height)
    );
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    align-content: center;
    animation: sliding 0.9s ease-in-out;
}
@media screen and (max-width: 500px) {
    .user-profile-page-container {
        flex-direction: column-reverse;
    }
}
.user-profile-text-data {
    margin: auto;
    text-align: center;
    color: gray;
    padding: 20px;
    border: 3px double #dddd;
    border-radius: 10px;
    width: 300px;
}
.start-sec {
    margin: 20px auto;
}
.end-sec {
    margin: 20px auto;
    text-align: center;
    padding: 10px;
    & img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
}
.profile-picture-header {
    margin: 10px auto;
}
.update-profile-btn {
    position: absolute;
    bottom: 60px;
    left: 50%;
}
@media screen and (max-width: 800px) {
    .update-profile-btn {
        position: absolute;
        bottom: 76%;
        left: 3%;
        color: white;
        margin: 10px auto;
        font-size: 8pt;
    }
}
</style>
