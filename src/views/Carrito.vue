<template>
  <v-container>
    <v-row justify="center">
      <v-col md="10">
        <h1 class="text-center purple--text mb-5">Bolsa de compras</h1>
        <v-alert v-if="carritoCount == 0" border="left" color="purple darken-4" type="info">
          No hay productos agregados al carrito
        </v-alert>
        <v-data-table
          v-else :headers="headers" :items="carritoProducts" sort-by="title" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Total Carrito <span class="purple--text">${{Number(carritoTotal).toLocaleString('en-US')}}</span> </v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              
              <v-dialog v-model="dialogDelete" max-width="480px">
                <v-card>
                  <v-card-title class="text-h5"
                    >¿Deseas borrar el producto?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="purple" text @click="closeDelete"
                      >Cancelar</v-btn
                    >
                    <v-btn color="purple" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="addStock(item)">
              mdi-plus-circle
            </v-icon>
             <v-icon small class="mr-2" @click="removeStock(item)">
              mdi-minus-circle
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Carrito",
  // props: {},
  data: function () {
    return {
      
      dialogDelete: false,
      headers: [
        {
          text: 'ID Producto',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Producto', value: 'title' },
        { text: 'Cantidad', value: 'count' },
        { text: 'Precio', value: 'price' },
        { text: 'Subtotal', value: 'total' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      deleteId:null,
      
     
     
    };
  },
  computed: {
    ...mapGetters(["carritoProducts", "carritoTotal", "carritoCount"]),
    
  },
  methods: {
    ...mapActions(['removeCarritoProduct','addStockCarritoProduct','removeStockCarritoProduct']),
    deleteItem (item) {
        console.log(item)
        this.deleteId = item.id
        this.dialogDelete=true
      },
      deleteItemConfirm () {
        this.removeCarritoProduct(this.deleteId)
        this.closeDelete()
      },
      closeDelete () {
        this.dialogDelete = false
      },
      addStock(item){
        this.addStockCarritoProduct(item.id)
      },
      removeStock(item){
        this.removeStockCarritoProduct(item.id)
      }

  },
  watch: {
    
  },
};
</script>

<style scoped>
</style>