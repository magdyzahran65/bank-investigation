<template>
    <table class="table table-striped requesters-table">
        <thead
            style="
                border-bottom: 1px solid gray;
                border-right: 1px solid;
                box-shadow: 1px 1px 3px gray;
            "
            class="birder border-2"
        >
            <th class="text-center">name</th>
            <th>email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Track</th>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.position }}</td>
                <td>{{ user.track }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: "TableEmployees",
    props: {
        users: {
            type: Array,
        },
    },
};
</script>
