<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Intervención para el paciente no motivado para dejar de fumar
    
    .bloque-texto-g.color-secundario.BG01.p-3.p-sm-4.p-md-5.mb-5.bordLeft2.justify-content-start(data-aos="fade-up")
      .bloque-texto-g__img.modGLeft(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.bord02
        p.mb-0 Dudar es parte de la naturaleza humana, pasar de la intención a la acción conlleva tener motivaciones claras y conocer los beneficios de hacer el cambio. La tarea como profesionales de la salud es facilitar avances hacia el siguiente estadio y ayudarle al paciente a identificar sus motivaciones propias para avanzar en los estadios de cambio.
    
    p.mb-4(data-aos="fade") Las técnicas motivacionales aparecen como efectivas en la posibilidad de un intento futuro de abandono, por esto, se deben utilizar para estimular a pacientes que no están decididos a dejar de fumar en este momento, en vista a que lo intenten en el futuro.

    p.mb-4(data-aos="fade") #[strong La población objeto son entonces] los pacientes consumidores de tabaco o productos derivados que no están motivados a iniciar un proceso para dejar de fumar en el futuro próximo (30 días).

    p.mb-4(data-aos="fade") Los objetivos que se pretenden alcanzar con la intervención breve dirigida al paciente no motivado son:

    .row.justify-content-center(data-aos="fade-up")
      .col-md-10
        hr
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Ayudar de forma específica al fumador no motivado a encontrar las razones para realizar un intento de cesación.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Contribuir a que el paciente reflexione sobre el hecho de que dejar de fumar es un proceso y que por tanto hay que avanzar en los estadios de cambio de este hasta conseguir estar preparado para intentarlo.
        hr
    
    p.mb-4 #[strong La intervención breve de las 5Rs] es una actividad comunicativa de corta duración (3 a 10 minutos) entre el profesional de la salud y la persona fumadora que no está preparada para realizar un intento formal para dejar de fumar en el momento actual.
    p.mb-5 Las bases teóricas para su realización provienen de una modalidad de consejería denominada la entrevista motivacional, cuyos fundamentos básicos se explicarán a continuación para comprender mejor la aplicación del modelo de las 5Rs.

    .BG05.p-4.pb-5.mb-5(data-aos="flip-right")
      .row.justify-content-center.mb-5  
        .col-md-10.BG02.p-3
          p.mb-0.text-center Intervención breve de las 5Rs
      SlyderA
        .row.justify-content-center
          .col-md-10
            .row
              .col-md-6.mb-4.mb-md-0
                p Las técnicas motivacionales se basan en el respeto al paciente, a sus creencias, a su escala de valores. Intentan estimular la motivación y favorecer el desarrollo de hábitos saludables valorando la opinión del paciente y su libertad de escoger.          
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img02.jpg', alt='')
        
        .row.justify-content-center
          .col-md-10            
            .row
              .col-md-6.mb-4.mb-md-0
                p El resultado de una intervención motivacional puede parecer tan pequeño como lograr que el paciente se comprometa en la conversación. Puede parecer un largo proceso, sin embargo, suele llevar pocos minutos. No implica proponer un plan de tratamiento, sino colaborar y asesorar al fumador para que este enuncie su propio plan de cambio.        
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img03.jpg', alt='')
        
        .row.justify-content-center
          .col-md-10            
            .row
              .col-md-6.mb-4.mb-md-0
                p La consejería breve motivacional es efectiva e incrementa las tasas de cesación, por eso se recomienda que los países se adopte un esquema estandarizado para llevar a cabo las intervenciones motivo por el cual se recomienda adoptar el esquema de las 5Rs para los pacientes no motivados.         
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/img04.jpg', alt='')
    
    p.mb-4 La aplicación del esquema mencionado se lleva a cabo en las instituciones prestadoras de servicios de salud de la red primaria del territorio y serán implementadas desde el componente de atenciones intermedias del programa de cesación de tabaco y atención del tabaquismo. 

    p.mb-4 Se requiere de una capacitación suficiente para llevar a cabo la consejería breve de las 5Rs y esta competencia será adquirida con este componente de aprendizaje.
    
    separador
    
    #t2_1.titulo-segundo(data-aos="flip-up")
      h2 2.1 Entrevista motivacional

    p.mb-4 Fue originalmente descrita por los psicólogos Miller y Rollnick en el año 1983, como una evolución de la terapia centrada en el paciente que combina un estilo terapéutico empático con un método directivo que se propone explorar y resolver a través del diálogo, elementos ambivalentes en el discurso del paciente (Rollnick y Miller, 1995)

    p.mb-4 Se basa en cuatro principios que son descritos como el “espíritu de la entrevista motivacional”, que se presentan en el siguiente recurso de aprendizaje:

    
    .row.justify-content-center(data-aos="fade-up")
      .col-md-10
        LineaTiempoD.color-acento-contenido.mb-5
          .row.justify-content-center(numero="1" titulo="Expresar empatía")
            .col-12.mb-4
              ul.lista-ul.colorLi
                li
                  i.fas.fa-angle-right
                  | Escuchar sin juzgar, criticar o culpar.
                li
                  i.fas.fa-angle-right
                  | Aceptar “dónde” se encuentra el paciente (su nivel de disposición).
                li
                  i.fas.fa-angle-right
                  | Comprender las perspectivas del paciente (lo cual no significa estar de acuerdo).
          
            .col-md-8
              figure
                img(src='@/assets/curso/tema2/img05.svg', alt='')
          
          .row.justify-content-center.align-items-center(numero="2" titulo="Desarrollar discrepancia")
            .col-12.mb-4
              p La motivación para el cambio surge al percibir una discrepancia entre el comportamiento actual y las metas o los valores personales. Dejamos a un lado el “cambiar” y en su lugar preguntamos sobre su visión o metas u objetivos en la vida personal o familiar. 
            .col-md-7.mb-4.mb-md-0
              h4 Ejemplo:
              ul.lista-ul.colorLi
                li
                  i.fas.fa-angle-right
                  p.mb-0 #[strong Clínico:] “¿Cuál es su objetivo como padre?”.
                li
                  i.fas.fa-angle-right
                  p.mb-0 #[strong Paciente:] “Yo quiero ser un buen modelo para mis niños”.
                li
                  i.fas.fa-angle-right
                  p.mb-0 #[strong Clínico:] “¿Cómo encaja el fumar en esta meta?”.          
            .col-md-5
              figure
                img(src='@/assets/curso/tema2/img06.svg', alt='')
          
          .row.justify-content-center.align-items-center(numero="3" titulo="Fluir con la resistencia")
            .col-12.mb-4
              p La manera como respondemos a ciertas situaciones, son ejemplos de manifestaciones de resistencia: “Sí, pero…”
            .col-md-7.mb-4.mb-md-0
              ul.lista-ul.colorLi
                li
                  i.fas.fa-angle-right
                  | No puedo pagar los medicamentos.
                li
                  i.fas.fa-angle-right
                  | Temo aumentar de peso.
                li
                  i.fas.fa-angle-right
                  | No fumo ni cerca de lo que fuman otras personas que conozco.
                li
                  i.fas.fa-angle-right
                  | Me gusta.
                li
                  i.fas.fa-angle-right
                  | Estoy muy solo.
              h4 ¿Cómo fluir con la resistencia?
              ul.lista-ul.colorLi
                li
                  i.fas.fa-angle-right
                  | Reevaluar la disposición.
                li
                  i.fas.fa-angle-right
                  | Escucha activa.
                li
                  i.fas.fa-angle-right
                  | Recalcar la elección y el control personal.
                li
                  i.fas.fa-angle-right
                  | No criticar ni imponer nuestro criterio.
            .col-md-5
              figure
                img(src='@/assets/curso/tema2/img07.svg', alt='')
          
          .row.justify-content-center.align-items-center(numero="4" titulo="Apoyar la autoeficacia")
            .col-12.mb-4
              p.mb-4 Se refiere a la experiencia personal o percepción propia de lograr algo. Sentirse capaz de lograr un cambio. Es importante transmitir autoconfianza, “el éxito viene de uno mismo”.
              h4 Ejemplo:
              ul.lista-ul.colorLi
                li
                  i.fas.fa-angle-right
                  p #[strong Paciente:] “He tratado dieciséis veces de dejar de fumar y siempre recaigo”.
                li
                  i.fas.fa-angle-right
                  p #[strong Clínico:] “Fantástico, ya ha mostrado su compromiso con tratar de dejar de fumar. ¡Eso es muy bueno! Y lo más importante es que lo ha logrado y está dispuesto a tratar nuevamente”.
         
            .col-md-6
              figure
                img(src='@/assets/curso/tema2/img08.svg', alt='')
    
        p.mb-5 Para llevar a cabo la entrevista motivacional se requiere que el clínico desarrolle una serie de habilidades que se describen a continuación:
    
        PasosA.color-acento-contenido.mb-4(tipo="n")(data-aos="fade")
          .row
            .col-md-12(data-aos="fade-right")
              h3 Formular preguntas abiertas
              p Este tipo de preguntas permiten que el fumador exprese y reflexione sobre sus motivaciones, ideas y contextos en los cuales se da el consumo de tabaco. De igual forma, permiten considerar los beneficios que le traería dejar de fumar.
              h4 Ejemplos:
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | ¿Cómo cree que se sentiría si tomara la decisión de dejar de fumar?
                li
                  i.fas.fa-angle-right
                  | ¿Qué beneficios le traería dejar de fumar?
                li
                  i.fas.fa-angle-right
                  | ¿Cómo sería su vida sin el consumo de productos que contengan tabaco?
                li
                  i.fas.fa-angle-right
                  | ¿Quiénes se beneficiarían si usted dejara de fumar?
          
          .row
            .col-md-12(data-aos="fade-left")
              h3 Realizar afirmaciones
              p Tomar mensajes expresados por el fumador y resaltarlos de forma positiva. Esta habilidad supone que el clínico escuche atentamente el discurso del paciente y transforme sus palabras en mensajes positivos hacia la cesación.
              h4 Ejemplos:
              p
                span.fw-bold.ltrColor1 El fumador dice: 
                | “He intentado muchas veces dejar de fumar, he utilizado distintas estrategias, pero al final, dejarlo completamente es muy difícil”.
              p
                span.fw-bold.ltrColor2 El clínico afirma: 
                | “Es usted una persona muy persistente, ¿cuénteme cómo encuentra siempre una motivación para volver a intentar dejar de fumar?
          
          .row
            .col-md-12(data-aos="fade-right")
              h3 La escucha reflexiva
              p Implica expresarle al fumador que comprende el significado más profundo de lo que está queriendo decir.
              h4 Reflejo simple:
              p
                span.fw-bold.ltrColor1 El paciente dice:
                | “Si fuera fácil, me gustaría dejar de fumar”.
              p
                span.fw-bold.ltrColor2 El profesional refleja:
                | “Lo entusiasma la idea de tener una vida sin tabaco”.
              h4 Reflejo complejo:
              p
                span.fw-bold.ltrColor1 El paciente dice:
                | “Me produce ansiedad el pensar que no podré dejar de fumar”.
              p
                span.fw-bold.ltrColor2 El clínico refleja:
                |  “Intentar dejar de fumar representa un reto para usted, es normal que los retos nos generen un poco de incertidumbre respecto al resultado final”.
          
          .row
            .col-md-12(data-aos="fade-left")
              h3 Elaborar sumarios o resúmenes
              p Cuando elaboramos resúmenes de lo que se ha conversados estamos evitando la dispersión, reforzando lo que ha dicho el paciente, demostrando que hemos escuchado y permitiendo que el fumador escuche en boca de otro lo que él ha expresado.
              h4 Ejemplo:
              p
                span.fw-bold.ltrColor2 El clínico concluye:
                | “En síntesis, resulta claro para mí que usted tiene buenas razones para intentar dejar de fumar, por un lado, esto mejoraría su salud, le permitiría ahorrar dinero, enfocarse en otras prioridades y, además, sería una forma de expresarle a su familia lo importante que el bienestar de todos sus miembros es para usted”.
    
    separador

    #t2_2.titulo-segundo(data-aos="flip-up")
      h2 2.2 Esquema de las 5Rs 

    p.mb-4 Este esquema está inspirado en la entrevista motivacional para simplificar su aplicación y con el objetivo de abreviar el tiempo que se destina a la realización de esta actividad (3 a 10 minutos) se utilizan 5 pasos cada uno de los cuales comienzan con la letra “R”:

    .row.justify-content-center(data-aos="fade-up")
      .col-md-10
        LineaTiempoD.color-acento-contenido.mb-5
          .row.justify-content-center.align-items-center(numero="1" titulo="Relevancia")
            .col-12.mb-4
              p Dado que el fumador no ve como algo inmediato el realizar un intento para dejar de fumar, se pueden formular preguntas abiertas para comenzar la exploración de este punto; por ejemplo:
              p
                | El clínico plantea: 
                span.fw-bold.ltrColor2 para usted, ¿qué sería lo más importante de dejar de fumar?
            .col-md-7.mb-4.mb-md-0
              .cajon.color-primario.BG01.p-4.mb-4
                p.mb-0 La intervención tiene su máximo efecto cuando la situación es relevante para la persona, para mejorar salud, prevenir enfermedades, si tiene hijos, ahorrar dinero, etc. 
            .col-md-5
              figure
                img(src='@/assets/curso/tema2/img09.svg', alt='')
          
          .row.justify-content-center.align-items-center(numero="2" titulo="Riesgos")
            .col-12.mb-4
              p No es un discurso predeterminado que el clínico expresa al respecto, sino un espacio para escuchar lo que el fumador sabe sobre el tema. También supone el plantear preguntas abiertas que permitan verbalizar la información y a continuación la retroalimentación del clínico resaltando con afirmaciones o reflexiones los mensajes que él o ella considera favorecedores de cambio. Por ejemplo:
            .col-md-7.mb-4.mb-md-0
              .cajon.color-primario.BG01.p-4.mb-4
                h4 El profesional de la salud pregunta:
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    |  ¿Cuáles son las cosas no tan buenas de fumar?
                  li
                    i.fas.fa-angle-right
                    |  ¿Qué sabe usted acerca de los riesgos del tabaquismo para su salud?
                  li
                    i.fas.fa-angle-right
                    |  ¿Qué es lo que más le preocupa?
            .col-md-5
              figure
                img(src='@/assets/curso/tema2/img10.svg', alt='')
          
          .row.justify-content-center.align-items-center(numero="3" titulo="Recompensa")
            SlyderA.mb-4
              .row.justify-content-center
                .col-md-10
                  .row
                    .col-12.mb-4
                      p En este punto se reflexiona sobre las cosas buenas que traería la suspensión de los productos que contienen tabaco. Se retoman los mensajes expresados por el paciente en el punto anterior realizando un resumen de lo expresado y llevando a cabo reflexiones que permitan realzar aquellos beneficios que sean más relevantes para el paciente.
                      p Ejemplo:
                    .col-md-7.mb-4.mb-md-0
                      .cajon.color-secundario.BG02.p-4.mb-4
                        h4 El clínico pregunta:
                        p.mb-0  “¿cuáles serían las cosas buenas para Usted si dejara de fumar?” o “¿Qué beneficios traería a su vida suspender el tabaco?” o “¿Qué cree que ganará al dejar de fumar?”.
                    .col-md-5
                      figure
                        img(src='@/assets/curso/tema2/img11.svg', alt='')

              .row.justify-content-center
                .col-md-10    
                  .row
                    .col-12.mb-4
                      p En respuesta a lo expresado por la persona en este punto y en los anteriores el clínico afirma o refleja:
                    .col-md-7.mb-4.mb-md-0
                      .bloque-texto-b.color-secundario.p-4.mb-4
                        .bloque-texto-b__texto
                          i.fas.fa-quote-left
                          p.mb-0 “Su salud mejorará de forma importante una vez suspenda el consumo de productos con tabaco, usted lo notará y también las personas a su alrededor, además ocurrirán otras cosas positivas: finanzas, relaciones con otros, la apariencia física mejorará, la capacidad física de realizar más actividades etc.”.
                          i.fas.fa-quote-right
                      p Todo lo anterior adaptado a la conversación específica que se tenga con el sujeto. 
                    .col-md-5
                      figure
                        img(src='@/assets/curso/tema2/img12.svg', alt='')
          
          .row.justify-content-center.align-items-center(numero="4" titulo="Resistencia")
            .col-12.mb-4
              p Exploración de posibles barreras o dificultades que puedan presentarse en el proceso de dejar de fumar y adicionalmente, la anticipación de estrategias que puedan usarse al respecto.              
            .col-md-7.mb-4.mb-md-0
              p
                span.fw-bold.ltrColor2 El clínico pregunta: 
                | ¿Pensemos en las cosas que resultarían más difíciles en el proceso de dejar de fumar?
              p
                span.fw-bold.ltrColor1 El fumador dice: 
                | “Tal vez, el deseo de fumar sería muy intenso”
              p
                span.fw-bold.ltrColor2 El clínico pregunta: 
                | ¿Sabe usted, que existen formas efectivas de controlar ese deseo?, podemos formularle medicamentos que ayudan a que el deseo sea menor”.
              p
                span.fw-bold.ltrColor1 El paciente pregunta: 
                | ¿y los medicamentos realmente funcionan?
              p
                span.fw-bold.ltrColor2 El clínico afirma: 
                | “claro que sí, su decisión de dejar de fumar es lo más importante, no obstante, el tratamiento realmente lo ayudará”.
            .col-md-5
              figure
                img(src='@/assets/curso/tema2/img13.svg', alt='')
          
          .row.justify-content-center.align-items-end(numero="5" titulo="Repetición")
            .col-12.mb-4
              p Insistir en cada encuentro sobre la importancia de intentar dejar de fumar si hasta el momento el sujeto no lo ha buscado o sí ha fallado en sus tratamientos previos. La intervención motivacional debe repetirse cada vez que el paciente no motivado acude a la consulta.              
            .col-md-7.mb-4.mb-md-0
              p Ejemplo:
              h4 El clínico plantea:
              .bloque-texto-e.color-secundario.BG01.p-4.mb-4
                .bloque-texto-e__texto
                  i.fas.fa-quote-left
                  p.text-regular En el momento en que desee estamos dispuestos a ayudarlo.
                  i.fas.fa-quote-right
              .bloque-texto-e.color-secundario.BG02.p-4.mb-4
                .bloque-texto-e__texto
                  i.fas.fa-quote-left
                  p.text-regular Esté siempre será un lugar con las puertas abiertas para usted en su intento de dejar de fumar.
                  i.fas.fa-quote-right
              .bloque-texto-e.color-secundario.BG03.p-4.mb-0
                .bloque-texto-e__texto
                  i.fas.fa-quote-left
                  p.text-regular Muchos de mis pacientes exfumadores han intentado varias veces el dejar de fumar antes de lograrlo definitivamente.
                  i.fas.fa-quote-right
            .col-md-5
              figure
                img(src='@/assets/curso/tema2/img14.svg', alt='')
    
    .tarjeta.color-acento-botones.p-4.p-md-5.mb-5.BG03(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-6.col-md-5.mb-4.mb-md-0
          img.w-50.mx-auto(src="@/assets/curso/img01.svg")
        .col-md.col-lg-7
          p.mb-4 A continuación, se presenta el resumen del modelo de las 5Rs, una intervención breve de tipo motivacional, que busca que el paciente avance en su proceso de cambio comportamental y pase de no estar interesado en suspender su consumo a empezar a considerarlo y en algún momento intentarlo.      
          a.boton.color-acento-botones.mb-4(:href="obtenerLink('/downloads/anexo03.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
          p.mb-0 Nota. Tomada del Ministerio de Salud y Protección Social de Colombia (2020).
    
    .tarjeta.BG02.p-4.p-md-5.mb-4(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-6.col-md-5.mb-4.mb-md-0
          img.w-50.mx-auto(src="@/assets/curso/img02.svg")
        .col-md.col-lg-7
          p.mb-4 En el siguiente video se realiza un ejercicio de aplicación de las 5Rs, de manera demostrativa de la intervención a un paciente no motivado.
          a.boton.color-acento-botones.mb-4(href=("https://www.youtube.com/watch?v=CCtUfzQA1z8") target="_blank" type="application/pdf")
            span Ver video
            i.fas.fa-play-circle
          p.mb-0 Nota. Tomada del Ministerio de Salud y Protección Social de Colombia (2020).









</template>

<script>
export default {
  name: 'Tema2',
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
