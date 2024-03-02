<template>
    <div class="container">

        <div class="grupos">

            <label for="">Semilla</label>
            <input v-model="semilla" type="text">

        </div>

        <div>
            <label for="">Tiempo</label>
            <input v-model="tiempo" type="text">

        </div>

        <div >
            <label for="">Token</label>
            <input class="token" v-model="token" type="text" readonly>
        </div>

        <button @click="guardarToken">GUARDAR</button>

    </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/clienteToken"

export default {
    data() {
        return {
            semilla: null,
            tiempo: null,
            token: null,
        };
    },

    methods: {
        async guardarToken() {
            const data = {
                semilla: this.semilla,
                tiempo: this.tiempo,
                username: "user",
                password: "1234",

            };

            const response = await obtenerTokenFachada(data);

            this.token = response.data;

            console.log(this.token);
        }
    }

}
</script>

<style>

div{
    margin-bottom: 20px;
}


</style>