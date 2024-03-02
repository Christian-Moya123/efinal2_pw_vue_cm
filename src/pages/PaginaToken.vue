<template>
    <div class="container">
        <h1>Guardar TOKEN</h1>
        <ObtenerToken />
    </div>
</template>

<script>
import ObtenerToken from '../components/ObtenerToken.vue'

export default {
    components: {
        ObtenerToken
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