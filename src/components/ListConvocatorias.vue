<template>
    <div class="container">
        <h1>Lista de Convocatorias</h1>
        <div>
            <b-table striped hover :items="convocatorias"></b-table>
        </div>
    </div>
</template>
<script>
export default{
    name:'ListConvocatorias',
    data() {
      return {
        convocatorias: [
        ]
      }
    },
    mounted() {
        this.axios.get('/convocatoria/listar')
        .then(r=>{
            console.log(r.data.data);
            this.convocatorias=r.data.data;
        })
    },
}
</script>

<style>

</style>