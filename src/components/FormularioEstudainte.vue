<template>
    <div class="container">
        <div class="grupos">
            <label for="">Token</label>
            <input v-model="token" type="text">
        </div>

        <div>
            <label for="">Nombre</label>
            <input v-model="nombre" type="text">
        </div>


        <div>
            <label for="">Apellido</label>
            <input v-model="apellido" type="text">
        </div>

        <div>
            <label for="">Cedula</label>
            <input v-model="cedula" type="text">
        </div>

        <button @click="guardarEstudiante">GUARDAR Y CONSULTAR</button>
        
        <div>
            <VerEstudiantes :estudiantes="lista" />
        </div>
    </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/clienteEstudainte";
import VerEstudiantes from '../components/VerEstudiantes.vue';

export default {
    components: {
        VerEstudiantes
    },

    data() {
        return {
            token: null,
            nombre: null,
            apellido: null,
            cedula: null,
            lista: []
        };
    },

    methods: {
        async guardarEstudiante() {
            const data = {
             
                nombre: this.nombre,
                apellido: this.apellido,
                cedula: this.cedula,
                token: this.token
            };

            const estudiante = await obtenerEstudianteFachada(data);
            this.lista.push(estudiante);
        }
    }
};
</script>

<style></style>
