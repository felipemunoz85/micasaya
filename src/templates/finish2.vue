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
          <p>Nos cumples con los requisito para ser beneficiario del programa Mi Casa Ya - {{subsidyType}}.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-sm-offset-3 text-center">
           <ul>
             <li>No puedes ser propietario de otras viviendas en Colombia <i class="far" :class="checkedIcon(nonPropietary)"></i></li>
             <li>No haber recibido algún subsidio de vivienda familiar. <i class="far" :class="checkedIcon(nonPreviousSubsidy)" ></i></li>
             <li>Debes contar con un crédito preaprobado. <i class="far" :class="checkedIcon(preapproved)"></i></li>
           </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
          <p>Tenemos para tí algunas alternativas que se ajustan a tu capacidad de pago.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <template v-if="budget == 1">
        <div>
          <template v-if="city == 'Medellìn'">
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/22/entrevientos_veletas_apto.JPG');">
                <a href="https://www.lahaus.com/p/entrevientos-veletas/medellin?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Entrevientos (Veletas)</p>
                    <p class="lower-info">Desde $95 Millones - Bello</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/4/territorio_aurora_apto.jpg');">
                <a href="https://www.lahaus.com/p/entrevientos-veletas/medellin?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Territorio Aurora</p>
                    <p class="lower-info">Desde $91 Millones - La Aurora</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/40/palmeras-bambu-modelo-4.jpg');">
                <a href="https://www.lahaus.com/p/entrevientos-veletas/medellin?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Palmeras</p>
                    <p class="lower-info">Desde $105 Millones - Envigado</p>
                  </div>
                </a>
              </div>
            </div>
          </template>
          <template v-else-if="city == 'Bogotá'">
            <div class="col-sm-4 col-sm-offset-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/static/default/default-image-project@2x.png');">
                <a href="https://www.lahaus.com/p/madero/bogota?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Madero</p>
                    <p class="lower-info">Desde $102 Millones - Chía</p>
                  </div>
                </a>
              </div>
            </div>
          </template>
        </div>
      </template>
      <template v-else-if="budget == 2">
        <div>
          <template v-if="city == 'Medellìn'">
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/170/7.jpg');">
                <a href="https://www.lahaus.com/p/ariza-verde-vivo/medellin?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Arizá Verde Vivo</p>
                    <p class="lower-info">Desde $280 Millones - Itagüí</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/184/10.jpg');">
                <a href="https://www.lahaus.com/p/citte/medellin?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Citté</p>
                    <p class="lower-info">Desde $309 Millones - La Asomadera No. 1</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/121/Apto_modelo__1_.jpg');">
                <a href="https://www.lahaus.com/p/paseo-del-parque/medellin?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Paseo del Parque</p>
                    <p class="lower-info">Desde $105 Millones - Belén</p>
                  </div>
                </a>
              </div>
            </div>
          </template>
          <template v-else-if="city == 'Bogotá'">
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/static/default/default-image-project@2x.png');">
                <a href="https://www.lahaus.com/p/remanso-park/bogota?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Remanso Park</p>
                    <p class="lower-info">Desde $216 Millones - Cedritos</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/6629/Perspectiva_social_Cantalejo_Formato.jpg');">
                <a href="https://www.lahaus.com/p/torres-de-cantalejo/bogota?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Torres de Cantalejo</p>
                    <p class="lower-info">Desde $165 Millones - Cantalejo</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/6496/71-C0005-02_8_h.jpg');">
                <a href="https://www.lahaus.com/p/mawi/bogota?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Mawí</p>
                    <p class="lower-info">Desde $245 Millones - Cantalejo</p>
                  </div>
                </a>
              </div>
            </div>
          </template>
        </div>
      </template>
      <template v-else-if="budget == 3">
        <div>
          <template v-if="city == 'Medellìn'">
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/211/acuarelas_apartamento_modelo_2.jpg?ixlib=js-1.1.1');">
                <a href="https://www.lahaus.com/p/acuarela-del-parque/medellin?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Acuarela del Parque</p>
                    <p class="lower-info">Desde $376 Millones - Calasanz</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/235/bisso_apartamento_modelo_2.jpg?ixlib=js-1.1.1');">
                <a href="https://www.lahaus.com/p/bisso/medellin?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Bissó</p>
                    <p class="lower-info">Desde $449 Millones - Loma de Los Bernal</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/223/urban_studios_apartamento_modelo_7.jpg?ixlib=js-1.1.1');">
                <a href="https://www.lahaus.com/p/urban-studios/medellin?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Urban Studios</p>
                    <p class="lower-info">Desde $392 Millones - El Tesoro</p>
                  </div>
                </a>
              </div>
            </div>
          </template>
          <template v-else-if="city == 'Bogotá'">
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/9661/centrica_1_5.jpg');">
                <a href="https://www.lahaus.com/p/centrica-b9daf40f-6e47-4718-ae38-b973cf980687/bogota?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Céntrica</p>
                    <p class="lower-info">Desde $338 Millones - Salitre</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/9660/visani_7.jpg');">
                <a href="https://www.lahaus.com/p/centrica-b9daf40f-6e47-4718-ae38-b973cf980687/bogota?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Vissani</p>
                    <p class="lower-info">Desde $495 Millones - Salitre</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="real-estate-option" style="background-image: url('https://lahaus.imgix.net/uploads/real_estate/picture/6474/HACIENDA_RESERVADA_2.jpg');">
                <a href="https://www.lahaus.com/p/centrica-b9daf40f-6e47-4718-ae38-b973cf980687/bogota?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">
                  <div class="real-estate-info">
                    <p class="name">Hacienda Reservada</p>
                    <p class="lower-info">Desde $588 Millones - Colina Campestre</p>
                  </div>
                </a>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
    <br>
    <div class="row">
      <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 text-center">
         <a class="btn btn-default opt-button opt1" href="https://www.lahaus.com?utm_source=micasaya.info&utm_medium=cpc&utm_campaign=micasaya">Buscar vivienda en La Haus</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'finish2',
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
      },
      budget: {
        type: Number,
        default: 2
      },
      city: {
        type: String,
        default: "Medellín"
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
