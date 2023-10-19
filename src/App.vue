<template>
  <div id="app">
    <div>
      <h1>Escitala Cifrado y Descifrado</h1>

      <form>
        <label>Introduce un Mensaje :)</label>
        <input type="text" v-model="mensaje" class="input" required>
        <br>
        <label>Pon tu número de Columnas</label>
        <input type="number" v-model="columnas" class="input" required>
        <br>
        <button @click="encriptar">Cifrar</button>
        <button @click="desencriptar">Descifrar</button>

        <h2>Resultado:</h2>
        <p>{{ resultado }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje: "",
      columnas: 2,
      resultado: ""
    };
  },
  methods: {
    // Tus funciones de cifrado y descifrado aquí
  }
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>
