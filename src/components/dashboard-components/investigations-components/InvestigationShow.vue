<template>
    <span>
        <p class="investigation-description">
            Description : {{ investigationData.description }}
        </p>
        <div class="investigation-show-page-container">
            <div
                v-for="(images, index) in investigationData.images"
                :key="index"
                class="investigation-image-container"
            >
                <div v-if="fullImage === index" class="full-image-size">
                    <div class="download-msg-container">
                        <span
                            @click="handleImageDoubleClick()"
                            class="download-msg"
                            ><button class="btn">
                                <i
                                    class="fa-solid fa-download fa-fade"
                                ></i></button
                        ></span>
                        <img
                            class="img-full-screen"
                            :src="images.image"
                            alt=""
                            ref="myImage"
                        />
                    </div>
                </div>
                <img
                    @click="selectImage($event, index)"
                    :src="images.image"
                    alt=""
                    class="investigation-images"
                />
            </div>
            <button
                v-show="fullImage !== null"
                class="btn close-image"
                @click="fullImage = null"
            >
                <i class="fa-solid fa-rectangle-xmark fs-3"></i>
                <!-- fa-spin -->
            </button>
            <button @click="goBack()" class="btn btn-success go-back-btn">
                back
            </button>
        </div>
    </span>
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
        handleImageDoubleClick() {
            const imageElement = this.$refs.myImage;
            const imageSource = imageElement.src;

            // Create a temporary link element
            const link = document.createElement("a");
            link.href = imageSource;
            link.download = "image.jpg";

            // Programmatically trigger the download
            link.click();
        },
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
            // console.log("stop animation from invests");
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
.download-msg-container {
    position: relative;
}
.download-msg {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #a4ffd2e0;
    color: rgb(255 255 255);
    padding: 0px;
    border-radius: 10px;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: #eac541;
        color: rgb(255, 255, 255);
    }
    & button {
        font-size: 8pt;
        text-align: center;
        background-color: transparent;
        border: none;
    }
}
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
    align-items: flex-start;
    margin: 0 auto;
    width: 80%;
}
.investigation-image-container {
    max-height: 200px;
    // overflow: auto;
    & .investigation-images {
        margin: 10px;
        border-radius: 5px;
        width: 120px;
    }
}
.img-full-screen {
    width: 98% !important;
    border-radius: 20px;
}

.close-image {
    z-index: 999;
    margin: 10px;
    background-color: transparent;
    color: #dc3545;
    border: none;

    position: absolute;
    top: 28%;
    right: 7%;

    & i:hover {
        color: #ffc107;
    }
}
.investigation-description {
    color: rgb(95, 95, 95);
    padding: 20px;
    border: 1px solid gray;
    border-radius: 10px;
    width: 90%;
    margin: 10px auto;
}
.full-image-size {
    width: 95%;
    // position
    position: absolute;
    top: 25%;
    left: 5%;
    z-index: 20;
    // display
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;
}
</style>
