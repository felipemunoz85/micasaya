<template>
  <div id="app">
    <div class="content-wrapper">
      <div class="container header">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="logo-wrapper">
              <img class="logo" src="src/assets/images/micasaya-logo.png">
            </div>
          </div>
        </div>
      </div>
      <div class="app-wrapper" :style="{left: appPhase}">
        <div class="slides">
          <div class="slides-wrapper" :style="{left: position}">
            <div class="step step1">
              <div class="container">
                <div class="row question-container">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h2>Averigua si puedes aplicar al programa Mi Casa Ya</h2>
                    <br><br>
                    <p>¿Te has preguntado si eres elegible para el programa del gobierno Mi Casa Ya? hemos creado este quiz práctico para ti. ¡Descubre si aplicas en menos de un minuto!.</p>
                  </div>
                </div>
                <div class="row opt-button-group">
                  <div class="col-md-2 col-md-offset-5 text-center">
                    <button class="btn btn-default opt-button opt1" @click="next()">¡Comencemos!</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="step step2">
              <div class="container">
                <div class="row question-container">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h2>¿En qué ciudad deseas comprar?</h2>
                  </div>
                </div>
                <div class="row opt-button-group">
                  <div class="col-md-2 col-md-offset-5 text-center">
                    <button class="btn btn-default opt-button opt-button-list" @click="setValue('city', 'Bogotá')">Bogotá y alrededores</button>
                     <button class="btn btn-default opt-button opt-button-list" @click="setValue('city', 'Medellín')">Medellín y alrededores</button>
                     <button class="btn btn-default opt-button opt-button-list" @click="setValue('city', 'Other')">Otras ciudades</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="step step3">
              <div class="container">
                <div class="row question-container">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h2>¿Qué subsidio quieres recibir?</h2>
                  </div>
                </div>
                <div class="row opt-button-group">
                  <div class="col-md-2 col-md-offset-4 text-center">
                    <button class="btn btn-default opt-button opt1" @click="setValue('subsidy_type', 'Cuota Inicial')">Cuota Inicial</button>
                    <div class="tooltip-help">
                      <div class="tooltip-help-message">
                        <p>Podrás recibir un subsidio de hasta  20 smmlv para la cuota inicial de tu vivienda nueva.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 text-center">
                    <button class="btn btn-default opt-button opt2" @click="setValue('subsidy_type', 'Tasa de Interés')">Tasa de Interés</button>
                    <div class="tooltip-help">
                      <div class="tooltip-help-message">
                        <p>Podrás recibir una disminución 2,5 puntos porcentuales en la tasa de interés en crédito para compra de vivienda nueva durante los primeros 7 años.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="step step4">
              <div class="container">
                <div class="row question-container">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h2>¿Cuál es tu presupuesto para compra de vivienda?</h2>
                  </div>
                </div>
                <div class="row opt-button-group">
                  <div class="col-md-2 col-md-offset-5 text-center">
                    <button class="btn btn-default opt-button opt-button-list" @click="setValue('budget_type', 1)">Inferior a $105 millones</button>
                     <button class="btn btn-default opt-button opt-button-list" @click="setValue('budget_type', 2)">Entre $105 y $320 millones</button>
                     <button class="btn btn-default opt-button opt-button-list" @click="setValue('budget_type', 3)">Superior a $320 millones</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="step step5">
              <div class="container">
                <div class="row question-container">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h2>¿Cuáles son tus ingresos mensuales?</h2>
                  </div>
                </div>
                <div class="row opt-button-group">
                  <div class="col-md-2 col-md-offset-5 text-center">
                    <button class="btn btn-default opt-button opt-button-list" @click="setValue('monthly_income', 1)">Menos de $1'475 434</button>
                     <button class="btn btn-default opt-button opt-button-list" @click="setValue('monthly_income', 2)">Entre $1'475 434 y $2'950 868</button>
                     <button class="btn btn-default opt-button opt-button-list" @click="setValue('monthly_income', 3)">Superior a $2'950 868</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="step step6">
              <div class="container">
                <div class="row question-container">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h2>¿Has sido beneficiario de subsidio de vivienda anteriormente?</h2>
                  </div>
                </div>
                <div class="row opt-button-group">
                  <div class="col-md-2 col-md-offset-4 text-center">
                    <button class="btn btn-default opt-button opt1" @click="setValue('non_previous_subsidy', false)">Sí</button>
                  </div>
                  <div class="col-md-2 text-center">
                    <button class="btn btn-default opt-button opt2" @click="setValue('non_previous_subsidy', true)">No</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="step step7">
              <div class="container">
                <div class="row question-container">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h2>¿Tienes vivienda propia?</h2>
                  </div>
                </div>
                <div class="row opt-button-group">
                  <div class="col-md-2 col-md-offset-4 text-center">
                    <button class="btn btn-default opt-button opt1" @click="setValue('non_propietary', false)">Sí</button>
                  </div>
                  <div class="col-md-2 text-center">
                    <button class="btn btn-default opt-button opt2" @click="setValue('non_propietary', true)">No</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="step step8">
              <div class="container">
                <div class="row question-container">
                  <div class="col-md-6 col-md-offset-3 text-center">
                    <h2>¿Cuentas con crédito preaprobado?</h2>
                  </div>
                </div>
                <div class="row opt-button-group">
                  <div class="col-md-2 col-md-offset-4 text-center">
                    <button class="btn btn-default opt-button opt1" @click="setValue('pre_approved', true)">Sí</button>
                  </div>
                  <div class="col-md-2 text-center">
                    <button class="btn btn-default opt-button opt2" @click="setValue('pre_approved', false)">No</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="finish">
          <template v-if="finish == 'finish1'">
            <finish1 
            v-bind:subsidyType="userData.subsidy_type"
            v-bind:nonPropietary="userData.non_propietary"
            v-bind:preapproved="userData.pre_approved"
            v-bind:nonPreviousSubsidy="userData.non_previous_subsidy"/>
          </template>
          <template v-else-if="finish == 'finish2'">
            <finish2
            v-bind:subsidyType="userData.subsidy_type"
            v-bind:nonPropietary="userData.non_propietary"
            v-bind:preapproved="userData.pre_approved"
            v-bind:nonPreviousSubsidy="userData.non_previous_subsidy"/>
          </template>
          <template v-else-if="finish == 'finish3'">
            <finish3 v-bind:subsidyType="userData.subsidy_type"/>
          </template>
          <template v-else-if="finish =='finish4'">
            <finish4
            v-bind:subsidyType="userData.subsidy_type"
            v-bind:nonPropietary="userData.non_propietary"
            v-bind:preapproved="userData.pre_approved"
            v-bind:nonPreviousSubsidy="userData.non_previous_subsidy"/>
          </template>
        </div>
      </div>
      
    </div>
    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-right">
            HECHO POR <a href="https://www.lahaus.com"><img src="src/assets/images/logo-lh-crop.gif" class="lh-logo"></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import finish1 from './templates/finish1.vue';
import finish2 from './templates/finish2.vue';
import finish3 from './templates/finish3.vue';
import finish4 from './templates/finish4.vue';

export default {
  name: 'app',
  components: {
    finish1,
    finish2,
    finish3,
    finish4
  },
  data() {
    return {
      numSlides: 10, 
      currentSlide: 1,
      userData: {
        budget_type: null,
        monthly_income: null,
        non_previous_subsidy: false,
        pre_approved: false,
        city: '',
        non_propietary: false,
        subsidy_type: ''
      },
      phase: 1,
      finish: 'finish1'
    }
  },
  computed: {
    position: function(){
      return ((this.currentSlide - 1) * - 100) + '%';
    },
    appPhase : function(){
      return ((this.phase - 1) * - 100) + '%';
    }  
  },
  methods: {
    next: function(){
      if(this.currentSlide < this.numSlides){
        this.currentSlide++;
      }
    },
    prev: function(){
      if(this.currentSlide > 1){
        this.currentSlide--;
      }
    },
    setValue: function(key, value){
      this.userData[key] = value;
      console.log(this.userData);
      console.log(this.userData);
      this.updateFinish();
      if(this.currentSlide == 8) {
        this.nextPhase();
      } else {
        this.next();
      }
    },
    nextPhase: function(){
      if(this.phase < 2) {
        this.phase++;
      }
    },
    updateFinish: function(){
      /*
        finish1: no es usuario de La Haus, no aplica a micasaya
        finish2: posibie usuario de la haus, no aplica a micasaya
        finish3: no es usuario de la haus, aplica a amicasaya
        finish4: posible usuario de lahaus, aplica a micasaya
      */
      if(this.userData.city == 'Other') {
        if(this.userData.non_propietary == false || this.userData.non_previous_subsidy  == false || this.userData.pre_approved  == false){
          this.finish = 'finish1';
        } else {
          this.finish = 'finish3';
        }
      } else {
        if(this.userData.non_propietary == false || this.userData.non_previous_subsidy  == false || this.userData.pre_approved  == false){
          if(this.userData.budget_type == 1) {
            this.finish = 'finish1';
          } else {
            this.finish = 'finish2';
          }
        } else {
          if(this.userData.budget_type == 1) {
            this.finish = 'finish3';
          } else {
            this.finish = 'finish4';
          }
        }
      }
      console.log(this.userData);
      console.log(this.finish);
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/stylesheets/styles.scss';
</style>
