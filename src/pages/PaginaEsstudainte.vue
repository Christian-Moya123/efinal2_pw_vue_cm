<template>
    <div class="container">
        <h1>Guardar estudiantes</h1>
        <FormularioEstudainte />
    </div>
</template>

<script>
import FormularioEstudainte from '../components/FormularioEstudainte.vue'


export default {
    components: {
        FormularioEstudainte
    }
}
</script>

<style scoped>
.container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #707070;
    border-radius: 10px;
    background-color: #ffcbcb;
    margin-top: 40px;
}
</style>