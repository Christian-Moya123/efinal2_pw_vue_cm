<template>
    <div class="tabla">
        <table border="1" v-if="lista">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula</th>
            </tr>
            <tr v-for="item in lista" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.apellido }}</td>
                <td>{{ item.cedula }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        estudiantes: {
            type: Array,
            default: null,
        },
    },
    data() {
        return {
            lista: this.estudiantes,
        };
    },
};
</script>

<style scoped>
.tabla {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.tabla table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #000;
}

.tabla th {
    background-color: #7cdcc3;
}

.tabla td {
    background-color: #bae2f5;
}
</style>
