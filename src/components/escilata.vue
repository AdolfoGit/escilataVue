import { encriptarFuncion, desencriptarFuncion } from '../utils/cifrado.js';

<template>
  <div class="app">
    <h1>Escítala Cifrado y Descifrado</h1>

    <form>
      <label>Introduce un Mensaje :)</label>
      <input type="text" v-model="mensaje" class="input" required>
      <br>
      <label>Pon tu número de Columnas</label>
      <input type="number" v-model="columnas" class="input" required>
      <br>
      <button @click="encriptar" class="button">Cifrar</button>
      <button @click="desencriptar" class="button">Descifrar</button>

      <h2>Resultado:</h2>
      <p class="resultado">{{ resultado }}</p>
    </form>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { encriptarFuncion, desencriptarFuncion } from '../utils/cifrado.js';

export default {
  data() {
    return {
      mensaje: "",
      columnas: 3,
      resultado: ""
    };
  },
  mounted() {
    this.resultado = Cookies.get("resultado") || "";
  },
  methods: {
    encriptar() {
      const mensaje = this.mensaje;
      const columnas = this.columnas;

      if (mensaje === "" || isNaN(columnas) || columnas < 2) {
        alert("Por favor, ingresa un texto y un número válido de columnas.");
        return;
      }

      this.resultado = encriptarFuncion(mensaje, columnas);
      Cookies.set("resultado", this.resultado, { expires: 365 });
    },
    desencriptar() {
      const mensaje = this.mensaje;
      const columnas = this.columnas;

      if (mensaje === "" || isNaN(columnas) || columnas < 2) {
        alert("Por favor, ingresa un texto cifrado y un número válido de columnas.");
        return;
      }

      this.resultado = desencriptarFuncion(mensaje, columnas);
      Cookies.set("resultado", this.resultado, { expires: 365 });
    }
  }
};
</script>
