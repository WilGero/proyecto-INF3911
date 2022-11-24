<template>
    <div class="container">
        <div class="row">
            <div class="col-9">
                <h1>Pagina de Inicio</h1>
            </div>
            <div class="col-3">
                <b-card header="Ingreso al sistema">
                    <b-alert
      variant="danger"
      dismissible
      fade
      :show="error">
      Datos erroneos
    </b-alert>
                    <b-form-group id="input-group-1" label="Usuario:" label-for="input-1" class="m-3">
                    <b-form-input id="input-1" type="text" v-model="form.usuario" placeholder="Ingrese el usuario" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2" class="m-3">
                    <b-form-input id="input-2" type="password" v-model="form.contra" placeholder="Ingrese la contraseña" required></b-form-input>
                    </b-form-group>
                    <b-button class="m-3" href="#" v-on:click="verificar()" variant="primary">Ingresar</b-button>
                </b-card>
            </div>
        </div>
        
    </div>
        
</template>
<script>
    export default{
        name:'PaginaInicio',
        data(){
                return {
                form:{
                    usuario:'',
                    contra:''
                },
                error:false
            }
        },
        methods: {
            async verificar(){
                
                await this.axios.post('/usr/login',this.form)
                .then( r =>{
                    console.log(r);
                
                    this.axios.defaults.headers.common.authorization=r.data.token; 
                    localStorage.setItem('token',r.data.token);
                    this.$store.commit('setIdusr',r.data.userdata.id);
                    this.$store.commit('setUsuario',r.data.userdata.usuario);
                    this.$store.commit('setNombre',r.data.userdata.nombre);
                    this.$store.commit('setTipo',r.data.userdata.tipo);
                    // localStorage.setItem('idusr',r.data.userdata.id);
                    // localStorage.setItem('usuario',r.data.userdata.usuario);
                    // localStorage.setItem('tipo',r.data.userdata.tipo);
                    // localStorage.setItem('nombre',r.data.userdata.nombre);
                    console.log(r);
                    this.$router.push('/usr');
                }).
                catch(e=>{
                    this.error=true;
                    console.log(e);
                })
                console.log(this.form);
            }
        },
    }
</script>

<style>

</style>