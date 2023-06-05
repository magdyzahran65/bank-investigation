<template>
    <div>
        <table v-if="!cardView" class="table table-striped invest-table">
            <thead
                style="
                    border-bottom: 1px solid gray;
                    border-right: 1px solid;
                    box-shadow: 1px 1px 3px gray;
                "
                class="birder border-2"
            >
                <th>#</th>
                <th>Type</th>
                <th class="invest-table-requester">Requester</th>
                <th class="invest-table-date">inv_date</th>
                <th>inv_status</th>
                <th class="bg-secondary text-white">Action</th>
            </thead>
            <!-- all Investigation -->
            <tbody v-show="invStatus == ''">
                <tr
                    v-for="investigation in investigations"
                    :key="investigation.id"
                >
                    <td>{{ investigation.id }}</td>
                    <td>{{ investigation.inv_type }}</td>
                    <td class="invest-table-requester">
                        {{ investigation.requester }}
                    </td>
                    <td class="invest-table-date">
                        {{ investigation.created_at | formatDate }}
                    </td>
                    <td
                        class="text-white"
                        :class="
                            investigation.inv_status == 'pending'
                                ? 'bg-warning '
                                : 'bg-success'
                        "
                    >
                        {{ investigation.inv_status }}
                    </td>
                    <td>
                        <button class="btn btn-danger investigations-btn-more">
                            <router-link
                                class="text-decoration-none"
                                :to="`/dashboard/investigations/${investigation.id}`"
                                >More</router-link
                            >
                        </button>
                    </td>
                </tr>
            </tbody>
            <!-- Done Investigation -->
            <tbody>
                <tr
                    v-for="investigation in invStatusDone"
                    :key="investigation.id"
                >
                    <td>{{ investigation.id }}</td>
                    <td>{{ investigation.inv_type }}</td>
                    <td class="invest-table-requester">
                        {{ investigation.requester }}
                    </td>
                    <td class="invest-table-date">
                        {{ investigation.created_at | formatDate }}
                    </td>
                    <td
                        class="text-white"
                        :class="
                            investigation.inv_status == 'pending'
                                ? 'bg-warning '
                                : 'bg-success'
                        "
                    >
                        {{ investigation.inv_status }}
                    </td>
                    <td>
                        <button class="btn btn-danger investigations-btn-more">
                            <router-link
                                class="text-decoration-none"
                                :to="`/dashboard/investigations/${investigation.id}`"
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
export default {
    name: "InvestigationTableComponent",
    props: {
        investigations: {
            type: Array,
        },
        invStatusDone: {
            type: Array,
        },
        cardView: {
            type: Boolean,
        },
        invStatus: {
            type: String,
        },
    },
};
</script>
<style lang="scss">
.invest-table {
    margin: 0 auto;
}
.investigations-btn-more {
    & > a {
        color: white !important;
    }
}
</style>
