<template>
    <div>
        <div class="employee-img-container">
            <img
                class="sections-img"
                src="@/assets/imgs/empolyees/empolyees.png"
                alt="Employees"
            />
            <h2 class="text-center">Employees</h2>
        </div>
        <div class="users-container">
            <TableEmployees v-if="!cardView" :users="users" />
        </div>
    </div>
</template>
<script>
import TableEmployees from "@/components/dashboard-components/employees-components/TableEmployees.vue";
export default {
    name: "EmployeesComponent",
    components: { TableEmployees },
    props: {
        users: {
            type: Array,
        },
        cardView: {
            type: Boolean,
        },
    },
};
</script>
<style lang="scss" scoped>
.employee-img-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.sections-img {
    border-radius: 10px;
    width: 158px;
    transform: translateX(0px);
    // animation: beatAdminSectionsImg 2.5s ease-in-out infinite;
    z-index: -2;
}
.users-container {
    // display: flex;
    // flex-wrap: wrap;
    // flex-direction: column;
    // align-content: flex-start;
    // margin: 10px auto;
    width: 90%;
    margin: 15px auto 5px auto;
}
h6 {
    border: 1px solid gray;
    padding: 5px;
    border-radius: 5px;
}
</style>
