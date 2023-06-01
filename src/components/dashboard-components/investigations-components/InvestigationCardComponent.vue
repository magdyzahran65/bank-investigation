<template>
    <div v-if="cardView" class="invest-card-container">
        <div
            class="invest-card"
            v-for="investigation in investigations"
            :key="investigation.id"
        >
            <p class="invest-id">id : {{ investigation.requester }}</p>

            <div class="invest-card-body">
                <div class="invest-date">
                    {{ investigation.created_at | formatDate }}
                </div>
                <div class="invest-type">
                    Type : <span>{{ investigation.inv_type }}</span>
                </div>
                <div
                    class="invest-status text-white"
                    :class="
                        investigation.inv_status == 'pending'
                            ? 'bg-warning '
                            : 'bg-success'
                    "
                >
                    {{ investigation.inv_status }}
                </div>
                <div>
                    <button class="btn btn-danger investigations-btn-more">
                        <router-link
                            class="text-decoration-none"
                            :to="`/dashboard/investigations/${investigation.id}`"
                            >More</router-link
                        >
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "InvestigationCardComponent",
    props: {
        investigations: {
            type: Array,
        },
        showAnimation: {
            type: Boolean,
        },
        cardView: {
            type: Boolean,
        },
    },
};
</script>
<style lang="scss" scoped>
.investigations-btn-more {
    width: 100%;
    border-radius: 0px;
    margin-top: 2px;
}
.invest-card-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>
