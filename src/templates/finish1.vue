<template>
  <div class="container">
    <div class="question-container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <h2>Lo sentimos.</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
          <p>Nos cumples con los requisito para ser beneficiario del programa Mi Casa Ya - {{ subsidyType }}.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3 text-center">
           <ul>
              <li>No puedes ser propietario de otras viviendas en Colombia <i class="far" :class="checkedIcon(non_propietary)"></i></li>
             <li>No haber recibido algún subsidio de vivienda familiar. <i class="far" :class="checkedIcon(non_previous_subsidy)" ></i></li>
             <li>Debes contar con un crédito preaprobado. <i class="far" :class="checkedIcon(pre_approved)"></i></li>
           </ul>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 text-center">
         <button class="btn btn-default opt-button opt1">Aprende más sobre el programa</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'finish1',
    props: {
      subsidyType: {
        type: String,
        default: "Cuota Inicial"
      },
      nonPreviousSubsidy: {
        type: Boolean,
        default: false
      }, 
      preapproved: {
        type: Boolean,
        default: false
      },
       nonPropietary: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {

      }
    },
    methods: {
      checkedIcon: function(value){
        return value ? "fa-check-circle" : "fa-times-circle";
      }
    }
  }
</script>