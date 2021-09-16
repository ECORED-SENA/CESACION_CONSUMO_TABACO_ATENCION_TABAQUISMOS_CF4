<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Recomendaciones de intervención para grupos especiales
    
    figure.mb-4(data-aos="fade-up")
      img(src='@/assets/curso/tema3/img01.jpg', alt='')
    
    p.mb-4(data-aos="fade") A continuación, se describirán brevemente las recomendaciones para intervenir en personas consumidoras de productos de tabaco o derivados que pertenecen a dos grupos clave: adolescentes y gestantes.

    separador
    
    #t3_1.titulo-segundo(data-aos="flip-up")
      h2 3.1 Intervenciones breves para adolescentes
    
    p.mb-4(data-aos="fade") Se refiere a las actividades comunicativas entre el profesional de la salud y el adolescente fumador, en las que se comparte información clave que permita al sujeto estructurar un plan formal para dejar de fumar.

    p.mb-4(data-aos="fade") En realidad, esta actividad no difiere de lo planteado en los apartados anteriores, excepto por el hecho de que los mensajes deben estar adaptados al adolescente, dado su curso de vida que se caracteriza por búsqueda de la identidad, conformación de grupos, deseo progresivo de independencia, sensación de invulnerabilidad, etc.

    p.mb-4(data-aos="fade") La consejería ha demostrado ser efectiva en el tratamiento de los adolescentes fumadores, aunque las tasas de cesación no son altas, comparado con el cuidado habitual, evidencia reciente sugiere que la consejería grupal podría ser igualmente efectiva.

    .row.justify-content-center.mb-5(data-aos="flip-left")
      .col-md-10
        .bloque-texto-g.color-secundario.BG05.p-3.p-sm-4.p-md-5.mb-5.bordLeft3.justify-content-start
          .bloque-texto-g__img.modGLeft(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img02.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.bord02
            p.mb-0 No se recomienda la utilización rutinaria de tratamiento farmacológico en esta población pues su efectividad no está probada. Sin embargo, se debe valorar cada caso en particular teniendo en cuenta el balance riesgo beneficio, puesto que, en los fumadores regulares continuar fumando podría resultar más perjudicial que recibir sustitutos de nicotina. En el caso de usar estos productos se recomienda usar chicles o parches pues son los productos mejor estudiados en jóvenes.
        p.mb-4 En este grupo poblacional todos los esfuerzos deben estar dirigidos a evitar el contacto con cualquier producto que contenga tabaco debido a que existe evidencia que confirma que el contacto temprano incrementa el riesgo del consumo crónico.

        p.mb-0 #[strong Esquema 5Aes adaptado a adolescentes:] aunque no existe evidencia de que una modalidad de consejería breve sea mejor que otra, se considera que el esquema de las 5Aes constituye una buena opción para invitar a los jóvenes a parar de fumar. A continuación, se mencionan los componentes del modelo realizando algunas sugerencias de acuerdo con el tipo de población:
    
    TabsC.color-acento-contenido.mb-5(data-aos="fade-up")
      .p-5.BG01(titulo="Paso 1: Averiguar")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img04.svg', alt='')        
          .col-md-6
            h4 Paso 1: Averiguar 
            p.mb-4 Indagar por el consumo de todos los productos que contienen tabaco incluyendo el uso de dispositivos electrónicos. Se recomienda realizar esta indagación sin presencia de los padres. No olvidar registrar esta información en la historia clínica.
            p.mb-0 También es importante considerar que el adolescente puede intentar minimizar el riesgo debido a su sensación de invulnerabilidad e incluso creer que un bajo consumo no resulta problemático para la salud.
       
      .p-5.BG01(titulo="Paso 2: Asesorar")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img03.svg', alt='')        
          .col-md-6
            h4 Paso 2: Asesorar  
            p.mb-4 Recomendar la suspensión completa de la exposición a nicotina tanto de forma directa como ambiental. Se debe enfatizar en los efectos negativos para la salud a corto plazo y aquellos que por afectar la imagen corporal resulten importantes para el joven: mal aliento, manchas en los dientes y en la piel, afectación del desempeño sexual, etc.
            p.mb-0 Es necesario informar a los adolescentes y a sus padres sobre los efectos de los sistemas electrónicos con o sin administración de nicotina, ya que al ofrecer una amplia gama de saborizantes resulta atractivo para los adolescentes, siendo uno de los principales factores de riesgo de inicio de consumo de tabaco convencional, además de ser la puerta de entrada al consumo de otras sustancias psicoactivas.
      
      .p-5.BG01(titulo="Paso 3: Apreciar la motivación")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img05.svg', alt='')        
          .col-md-6
            h4 Paso 3: Apreciar la motivación  
            p.mb-4 Apreciar la motivación del sujeto para suspender completamente el consumo de derivados del tabaco e incluso dispositivos electrónicos.
            p.mb-0 Si no existe la motivación para dejar de fumar o vapear, se sugiere utilizar el modelo de las 5 Rs.
      
      .p-5.BG01(titulo="Paso 4: Ayudar a elaborar un plan")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img06.svg', alt='')        
          .col-md-6
            h4 Paso 4: Ayudar a elaborar un plan 
            p.mb-4 Ayudar a elaborar un plan estructurado para dejar de fumar. Se propone utilizar los mismos componentes propuestos con el acrónimo STAR (selección de una fecha, transmitir información a los padres y amigos, anticipar barreras, retirar productos que contengan tabaco).
            p.mb-0 En este punto es importante ofrecer tratamiento de cesación tanto a los familiares en estrecho contacto con el joven (principalmente sus padres) como a sus amigos fumadores, pues un proceso de cesación en estas personas puede influir en el éxito del tratamiento del joven.
      
      .p-5.BG01(titulo="Paso 5: Acordar el seguimiento")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img07.svg', alt='')        
          .col-md-6
            h4 Paso 5: Acordar el seguimiento
            p.mb-0 Supondría verificar en encuentros posteriores la adherencia del adolescente al plan acordado y la verificación de que la consejería impartida se traduce en un plan de acción tendiente a garantizar el cese completo del tabaquismo.
    
    p.mb-4 La aplicación del esquema mencionado se lleva a cabo en las instituciones prestadoras de servicios de salud de la red primaria del territorio y serán implementadas desde la Ruta Integral de Promoción y Mantenimiento de la Salud.

    p.mb-4 Igualmente se requiere de una capacitación suficiente para llevar a cabo este tipo de consejería breve dirigida a personas adolescentes (Ministerio de Salud y Protección Social, 2020).

    .tarjeta.BG02.p-4.p-md-5.mb-4(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-6.col-md-5.mb-4.mb-md-0
          img.w-50.mx-auto(src="@/assets/curso/img02.svg")
        .col-md.col-lg-7
          p.mb-4 En el siguiente video se presenta la intervención breve con la estrategia 5A desde el abordaje de un caso de pacientes adolescentes.
          a.boton.color-acento-botones.mb-4(href=("https://www.youtube.com/watch?v=CCtUfzQA1z8") target="_blank" type="application/pdf")
            span Ver video
            i.fas.fa-play-circle
          p.mb-0 Nota. Tomada del Ministerio de Salud y Protección Social de Colombia (2020).

    separador

    #t3_2.titulo-segundo(data-aos="flip-up")
      h2 3.2 Entrevista motivacional
    
    p.mb-4 El consumo de tabaco durante el embarazo es un factor de riesgo para la mujer y el feto, se ha demostrado que el tabaquismo en las embarazadas produce resultados adversos fetales, como mortinatos, abortos espontáneos, retraso del crecimiento fetal, parto pretérmino, bajo peso al nacer, desprendimiento placentario y síndrome de muerte súbita del lactante, y se ha vinculado a trastornos cognitivos, emocionales y conductuales en los niños (Fiore et al., 2008), Dejar de fumar durante el embarazo puede reducir los riesgos, beneficiando al binomio madre-hijo.

    p.mb-4 El objetivo que se pretende alcanzar con la intervención breve dirigida es lograr que la gestante abandone completamente su consumo de tabaco y evite la exposición al humo de tabaco ambiental.

    .row.justify-content-center.mb-4
      .col-md-10
        .bloque-texto-g.color-secundario.BG02.p-3.p-sm-4.p-md-5.mb-5.bordLeft.justify-content-start(data-aos="flip-left")
          .bloque-texto-g__img.modGLeft(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img08.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.bord02
            p.mb-0 La intervención breve para gestantes se define como una actividad comunicativa entre el profesional de la salud y la gestante embarazada que fuma, en la cual se comparte información clave que le va a permitir al sujeto estructurar un plan formal para dejar de fumar.
    
        .bloque-texto-c.color-secundario.BG01.p-4.mb-4(data-aos="fade-up")
          i.fas.fa-quote-right
          h3.mb-2 Se recomienda a todo el equipo de salud que participa en el cuidado de la embarazada, realizar intervenciones en cada visita de control prenatal, ya que se aprecian beneficios de la cesación en todos los momentos del embarazo.
          span - Ministerio de Salud Pública de la República Oriental del Uruguay, 2009.
        
        p.mb-4 El primer requisito para ofrecer intervenciones breves en cesación a gestantes es identificar a la embarazada o madre que fuma, lo más rápidamente posible. Lo ideal es identificar el consumo de tabaco durante la consulta preconcepcional de ser posible, para poder aplicar la intervención breve específica. Se deben ofrecer intervenciones breves para tratar el tabaquismo en embarazadas fumadoras en la primera visita prenatal, así como a lo largo de todo el embarazo.

    h3(data-aos="flip-up") Esquema 5Aes adaptado a gestantes

    p.mb-4 Es una intervención para ser utilizada bajo la guía de profesionales capacitados para ayudar a las mujeres embarazadas a dejar de fumar, se ha encontrado evidencia que demuestra que la intervención breve de las 5Aes puede promover la cesación de tabaco en mujeres gestantes fumadoras, siendo una estrategia importante para mejorar los resultados en salud tanto para la madre como para el producto de la gestación. 

    p.mb-4 A continuación, se mencionan los componentes del modelo realizando algunas sugerencias de acuerdo con este tipo de población:

    TabsC.color-acento-contenido.mb-5(data-aos="fade-up")
      .p-5.BG02(titulo="Paso 1: Averiguar")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img09.svg', alt='')        
          .col-md-6
            h4 Paso 1: Averiguar 
            p.mb-4 Se recomienda que en todos los encuentros de la gestante con el sistema de salud se le indague sobre consumo de tabaco o exposición al humo de tabaco ambiental, y registrar estos datos en la historia clínica.
            p.mb-4 Preguntarle a la mujer embarazada cuántos cigarrillos fuma, qué tan frecuente lo hace, así como explorar cualquier inquietud que ella, su pareja o su familia pudiesen tener acerca de dejar de fumar.
            p.mb-0 Si la mujer declara no fumar, es importante dar un refuerzo positivo.
      
      .p-5.BG02(titulo="Paso 2: Asesorar")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img10.svg', alt='')        
          .col-md-6
            h4 Paso 2: Asesorar 
            p.mb-4 Se recomienda dar un consejo firme, claro y personalizado, que incluya información sobre los riesgos de fumar para el feto en gestación y sobre el peligro de exponerse a humo de segunda mano tanto, así como los beneficios para la salud de la mujer y de su bebé al dejar de fumar que se alcanzan inmediatamente la persona suspende el consumo de tabaco.
            p.mb-4 Es necesario aconsejar de manera directa y firme dejar de fumar, y no simplemente reducir el consumo.
            p.mb-0 La cesación en las primeras semanas de embarazo produce el mayor beneficio para el hijo y para la madre. Sin embargo, dejar de fumar en cualquier momento de la gestación genera beneficios.
      
      .p-5.BG02(titulo="Paso 3: Apreciar la motivación")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img11.svg', alt='')        
          .col-md-6
            h4 Paso 3: Apreciar la motivación
            p.mb-4 Apreciar la motivación de la gestante para suspender completamente el consumo de derivados del tabaco. Si no existe la motivación para realizar un intento formal, se sugiere utilizar el modelo de intervención motivacional como las 5 Rs abordado en las secciones anteriores. 
            p.mb-0 Se recomienda utilizar la medición de monóxido de carbono exhalado en fumadoras embarazadas como medio de concientización, diagnóstico de estatus tabáquico y seguimiento de la cesación.
      
      .p-5.BG02(titulo="Paso 4: Ayudar a elaborar un plan")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img12.svg', alt='')        
          .col-md-6
            h4 Paso 4: Ayudar a elaborar un plan 
            p.mb-4 Ayudar a elaborar un plan. Este debe ser estructurado para dejar de fumar. Si la gestante presenta un nivel alto de dependencia física a la nicotina, se puede considerar el uso de Terapia de Reemplazo Nicotínico (TRN); en el caso de considerar esta opción, es necesario discutir con ella y su familia los riesgos y beneficios asociados con el uso de terapia farmacológica, teniendo en cuenta también la presencia de comorbilidades.
            p.mb-0 Recuerde que el uso de TRN está reservado para el segundo o tercer trimestre del embarazo, para evitar potenciales efectos teratogénicos en el 1er trimestre. 
      
      .p-5.BG02(titulo="Paso 5: Acordar el seguimiento")
        .row.justify-content-evenly.align-items-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/tema3/img13.svg', alt='')        
          .col-md-6
            h4 Paso 5: Acordar el seguimiento
            p.mb-0 Se recomienda realizar intervenciones en cada visita de control prenatal, ya que se aprecian beneficios de la cesación en todos los momentos del embarazo, además de hacer seguimiento mediante llamadas telefónicas para motivar y resolver las dudas de la gestante.
      
    .tarjeta.color-acento-botones.p-4.p-md-5.mb-4.BG03(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-6.col-md-5.mb-4.mb-md-0
          img.w-50.mx-auto(src="@/assets/curso/img02.svg")
        .col-md.col-lg-7
          p.mb-4 En el siguiente video se presenta la intervención breve con la estrategia 5 A desde el abordaje de un caso de paciente gestante. 
          a.boton.color-acento-botones.mb-4(:href="obtenerLink('/downloads/anexo03.pdf')" target="_blank" type="application/pdf")
            span Ver video
            i.fas.fa-play-circle
          p.mb-0 Nota. Tomada del Ministerio de Salud y Protección Social de Colombia (2020).

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
