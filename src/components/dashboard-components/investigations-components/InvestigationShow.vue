<template>
    <div class="investigation-show-page-container">
        <div
            v-for="(images, index) in investigationData.images"
            :key="index"
            class="investigation-image-container"
        >
            <div v-if="fullImage === index" class="full-image-size">
                <img class="img-full-screen" :src="images.image" alt="" />
                <button @click="fullImage = null" class="btn btn-danger">
                    <i
                        class="fa-solid fa-rectangle-xmark fa-spin rounded-1 fs-5"
                    ></i>
                </button>
            </div>
            <img
                @click="selectImage($event, index)"
                :src="images.image"
                alt=""
                class=""
            />
        </div>
        <p class="investigation-description">
            Description : {{ investigationData.description }}
        </p>
        <button @click="goBack()" class="btn btn-success go-back-btn">
            back
        </button>
    </div>
</template>
<script>
import ClickOutside from "vue-click-outside";
import axios from "axios";
import { BASE_URL, All_INVESTIGATIONS } from "@/constants/api-url";
export default {
    name: "InvestigationShow",
    async mounted() {
        await this.getInvestDetails();
    },
    directives: {
        ClickOutside,
    },
    methods: {
        async getInvestDetails() {
            const InvestDetails = await axios
                .get(`${BASE_URL}${All_INVESTIGATIONS}${this.routerId}`)
                .catch((e) => {
                    console.log(e);
                    this.AnimationNo();
                    console.log(e.response.status);
                    console.log(e.response);
                });
            try {
                this.investigationData = InvestDetails.data;
                this.AnimationNo();
            } catch (e) {
                console.Console(e.response.status);
            }
        },
        AnimationNo() {
            this.$emit("AnimationNo");
            console.log("stop animation from invests");
            // setTimeout(() => {
            //     // this.showAnimation = false;
            // }, 2000);
        },
        selectImage(event, index) {
            this.fullImage = index;

            event.target;
            // Perform any desired actions with the clicked image element (imgElement)
        },
        hideImage() {
            this.showFullImage = false;
        },
        goBack() {
            this.$router.go(-1);
        },
    },
    data() {
        return {
            fullImage: null,

            routerId: this.$route.params.id,
            investigationData: {},
        };
    },
};
</script>

<style lang="scss">
.go-back-btn {
    position: absolute;
    bottom: 37px;
    left: -12%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    padding: 1px;
}
.investigation-show-page-container {
    position: relative;
    min-height: var(--min-pages-height);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    margin: 0 auto;
    width: 80%;
}
.investigation-image-container {
    max-height: 200px;
    overflow: auto;
    & img {
        margin: 10px;
        border-radius: 5px;
        width: 200px;
    }
}
.img-full-screen {
    width: 98% !important;
    // height: 100%;
}
.investigation-description {
    color: rgb(95, 95, 95);
    padding: 20px;
    border: 1px solid gray;
    border-radius: 10px;
}
.full-image-size {
    position: absolute;
    top: 15%;
    left: 20%;
    width: 75%;
    height: 75%;
    // background-color: rgba(255, 255, 0, 0.392);
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    z-index: 20;
}
</style>
