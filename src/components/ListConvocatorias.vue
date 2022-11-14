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
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
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