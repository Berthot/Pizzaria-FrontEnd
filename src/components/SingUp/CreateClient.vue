<template>
  <div>
    <h1>Create new Client</h1>
    <form @submit.prevent="enviar">
      <label for="fname">Nome:</label>
      <br />
      <input type="text" id="fname" name="fname" v-model="form.name" />
      <br />
      <label for="fphone">Telefone:</label>
      <br />
      <input type="text" id="fphone" name="fphone" v-model="form.phone" />
      <br />
      <label for="fadress">Endereço:</label>
      <br />
      <input type="text" id="fadress" name="fadress" v-model="form.address" />
      <br />
      <label for="fnumberadrres">Numero do endereço:</label>
      <br />
      <input type="text" id="fnumberadrres" name="fnumberadrres" v-model="form.addressNumber" />
      <br />
      <br />
      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>
<script>
// asd
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        address: "",
        addressNumber: "",
      },
    };
  },
  methods: {
    enviar() {
      if (this.veriticarSeEstaVazio()){
          console.log("esta vazio");
          return;
      }
        const resposta = this.axios
          .post("https://pizzariadb.herokuapp.com/Client/post", this.form)
          .then((response) => {
            console.log("deu boa");
            console.log(response.data);
          })
          .catch((error) => {
            console.log("deu erro");
            console.log(error.response);
          });
      console.log(resposta);
    },
    veriticarSeEstaVazio() {
      return this.data.form.name === "";
    },
  },
};
</script>

<style>
</style>