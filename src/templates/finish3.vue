<template>
  <div class="container">
    <div class="question-container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <h2>¡Felicitaciones!</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
          <p>Cumples con los requisitos para beneficiarte del programa Mi Casa Ya - {{subsidyType}}.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3 text-center">
           <ul>
             <li>No puedes ser propietario de otras viviendas en Colombia <i class="far fa-check-circle"></i></li>
             <li>No haber recibido algún subsidio de vivienda familiar. <i class="far fa-check-circle"></i></li>
             <li>Debes contar con un crédito preaprobado. <i class="far fa-check-circle"></i></li>
           </ul>
        </div>
      </div>
    </div>

    <br>
    <div class="row">
      <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 text-center">
         <button class="btn btn-default opt-button opt1">Aprende más del programa.</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'finish3',
    props: ['subsidyType']
  }
</script>