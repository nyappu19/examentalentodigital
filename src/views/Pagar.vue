<template>
  <v-form v-model="valid">
    <v-container>
      <h2>Datos comprador</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="nombre"
            :rules="nombreRules"
            label="Nombre"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="repetirEmail"
            :rules="repetirEmailRules"
            label="Repetir Email"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="telefono"
            :rules="telefonoRules"
            label="Teléfono"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <h2>Datos del despacho</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="direccion"
            :rules="direccionRules"
            label="Dirección"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="comuna"
            :rules="comunaRules"
            label="Comuna"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <h2>Forma de pago</h2>
      <v-radio-group v-model="formaPago">
        <v-radio
          v-for="opcion in opcionesPago"
          :key="opcion.value"
          :label="opcion.label"
          :value="opcion.value"
        ></v-radio>
      </v-radio-group>
      <router-link to="/confirmacion">
<v-btn color="purple">Confirmar</v-btn>
</router-link>
    <carrito :productos="productos"></carrito>
    </v-container>
  </v-form>
        
</template>

<script>
import Carrito from "../components/Carrito.vue";
export default {
    components: {
    Carrito,
  },
  data() {
    return {
      valid: false,
      nombre: '',
      nombreRules: [
        v => !!v || 'El nombre es requerido',
      ],
      email: '',
      emailRules: [
        v => !!v || 'El email es requerido',
        v => /.+@.+/.test(v) || 'El email debe ser válido',
      ],
      repetirEmail: '',
      repetirEmailRules: [
        v => !!v || 'Debe repetir el email',
        v => v === this.email || 'Los emails no coinciden',
      ],
      telefono: '',
      telefonoRules: [
        (v) => !!v || "El teléfono es requerido",
        (v) => /^[0-9]{9}$/.test(v) || "El teléfono debe tener 9 dígitos",
      ],
      direccion: '',
      direccionRules: [
        v => !!v || 'La dirección es requerida',
      ],
      comuna: '',
      comunaRules: [
        v => !!v || 'La comuna es requerida',
      ],
      formaPago: null,
      opcionesPago: [
        { label: 'Transferencia bancaria', value: 'transferencia' },
        { label: 'Servipag', value: 'servipag' },
        { label: 'Contra entrega', value: 'contraentrega' },
        { label: 'Webpay', value: 'webpay' },
      ],
    };
  },
};
</script>
