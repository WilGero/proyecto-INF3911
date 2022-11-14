<template>
  <div class="container">
  <h1>Registrar Postulante</h1>
  <b-form>
    <b-form-group id="input-group-1" label="Nombre del postulante:" label-for="input-1" description="Nombre completo del universitario A. Paterno A. Materno y Nombres">
      <b-form-input
        id="input-1"
        v-model="form.name"
        placeholder="Ingrese Nombre completo"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="C. I. :" label-for="input-2  ">
      <b-form-input
        id="input-2"
        v-model="form.ci"
        placeholder="Ingrese el numero de carnet"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-3" label="Carrera:" label-for="input-3">
      <b-form-select
        id="input-3"
        v-model="form.carrera"
        :options="carreras"
        required
      ></b-form-select>
    </b-form-group>

    
    <b-form-group id="input-group-4" label="Materia:" label-for="input-4">
      <b-form-select
        id="input-4"
        v-model="form.materia"
        :options="materias"
        required
      ></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-5" label="Celular:" label-for="input-5  ">
      <b-form-input
        id="input-5"
        v-model="form.tel"
        placeholder="Ingrese numero de celular"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-6" label="Foto:" label-for="input-6  ">
      <div>
        <b-form-file
          id="input-6"
          accept="image/*"
          v-model='form.file'
          @change="onFileChange"
          :state="Boolean(form.file)"
          placeholder="Elegir..."
          drop-placeholder="arrastre aqui..."
          data-browse-on-zone-click="true"
        ></b-form-file>
    </div>
    </b-form-group>
    <div class="container m-5">
        <b-button type="button" v-on:click="onSubmit()" variant="primary">Registrar</b-button>
        <b-button type="reset" v-on:click="onReset()" variant="danger">Limpiar datos</b-button>
    </div>
  </b-form>

</div>
</template>
<script>
export default {
  name: "RegistroPost",
  data() {
    return {
      form: {
        nombre: "",
        ci: "",
        carrera: "",
        tel: "",
        materia: "",
        file: null
      },
      file: null,
      carreras: [
        { text: "seleccione su carrera ...", value: null },
        "ELT",
        "MEC",
        "SIS",
        "INF",
        "CIV",
      ],
      materias: [
        { text: "selecciones la materia ...", value: null },
        "MAT 1100",
        "mat 1101",
        "MAT 1103",
        "MAT 1102",
        "MAT 1207",
      ],
    };
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      this.file = selectedFile;
    },
    onSubmit() {
      const datosform = new FormData();
      datosform.append("nombre", this.form.nombre);
      datosform.append("ci", this.form.ci);
      datosform.append("carrera", this.form.carrera);
      datosform.append("tel", this.form.tel);
      datosform.append("materia", this.form.materia);
      datosform.append("file", this.file);
      let config = { headers: { "Content-Type": "multipart/form-data" } };

      this.axios.post("/postulante/agregar", datosform, config).then((r) => {
        console.log(r);
        this.$router.push("/registrocompleto");
      });
      // this.axios.post('http://localhost:5000/postulante/agregar',this.form);
    },
    onReset() {
      this.form.nombre = "";
      this.form.ci = "";
      this.form.carrera = "";
      this.form.tel = "";
      this.form.materia = "";
    },
  },
};
</script>

<style>
</style>