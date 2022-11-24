<template>
  <div>
    {{ tipo }}
    <b-nav v-if="$store.state.tipo == 0" card-header tabs>
      <b-nav-item to="/" exact exact-active-class="active">Inicio</b-nav-item>
      <b-nav-item to="/registro" exact exact-active-class="active"
        >Registro</b-nav-item
      >
      <b-nav-item to="/convocatorias" exact exact-active-class="active"
        >Convocatorias</b-nav-item
      >
      <b-nav-item to="/habilitados" exact exact-active-class="active"
        >Habilitados</b-nav-item
      >
      <b-nav-item to="/about" exact exact-active-class="active"
        >Acerca de ..</b-nav-item
      >
      <b-nav-item v-on:click="salir()"> Salir </b-nav-item>
    </b-nav>

    <b-nav v-if="$store.state.tipo == 1" card-header tabs>
      <b-nav-item to="/usr" exact exact-active-class="active"
        >Inicio de usuario login</b-nav-item
      >
      <b-nav-item to="/usr/gestion" exact exact-active-class="active"
        >Usuarios</b-nav-item
      >
      <b-nav-item to="/ges/convocatorias" exact exact-active-class="active"
        >Gestionar Convocatorias</b-nav-item
      >
      <b-nav-item to="/ges/habilitados" exact exact-active-class="active"
        >Gestionar Habilitados</b-nav-item
      >
      <b-nav-item v-on:click="salir()"> Salir </b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  name: "MenuPubli",
  // computed:{
  //   tipo(){
  //     if (localStorage.getItem('tipo'))
  //     return localStorage.getItem('tipo');
  //     else return 0;
  //   }
  // },
  methods: {
    salir() {
      // localStorage.setItem('tipo',0);
      localStorage.setItem('token', '');
      this.axios.defaults.headers.common.authorization = "";
      this.$store.commit("setIdusr", 0);
      this.$store.commit("setUsuario", "");
      this.$store.commit("setNombre", "");
      this.$store.commit("setTipo", 0);
      this.$router.push("/");
    },
  },
};
</script>
<style>
</style>