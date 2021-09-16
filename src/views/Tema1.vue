<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Intervención para el paciente motivado
    
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        p.mb-4 Todas las personas consumidoras de productos de tabaco o sus derivados (incluyendo cigarrillos electrónicos) y que estén dispuestas a suspender el consumo, se benefician de la aplicación de intervenciones de consejería breve que se pueden instaurar en el marco de cualquier atención en salud.

        .row.justify-content-center.BG05.mb-4(data-aos="flip-left")
          .col-md-8.p-4
            p.mb-0 Los pacientes motivados para dejar de fumar tienen mayores posibilidades de alcanzar el objetivo terapéutico y así lograr el cese del consumo; por lo que seleccionar los pacientes idóneos para este tipo de intervenciones permite optimizar los recursos disponibles. Un paciente no motivado, probablemente tendrá más resistencia a las intervenciones de consejería.
          .col-md-4.bgImg01
    
        p.mb-0 Las intervenciones breves tienen como objetivo que las personas logren avanzar en el proceso de dejar de fumar o vapear y hagan intentos serios para conseguirlo. Estas intervenciones se pueden clasificar también como básicas o intermedias según el tiempo y ámbito de aplicación. A continuación, se realizará la definición correspondiente a cada una de estas intervenciones.
  
    #t1_1.titulo-segundo(data-aos="flip-up")
      h2 1.1 Intervenciones básicas
    
    .bloque-texto-c.color-secundario.p-4.BG01.mb-4(data-aos="fade")
      i.fas.fa-quote-right
      h2.mb-2 Corresponden a las acciones de intervención breve que deben ofrecerse de forma sistemática en las instituciones prestadoras de servicios de salud, desde la Ruta Integral de Promoción y Mantenimiento de la Salud, y en el marco de cualquier consulta por la cual acceda el usuario del sistema de salud. En esta ruta se debe identificar el tabaquismo, brindar un consejo breve y derivar para su atención y control 
      span - Ministerio de Salud y Protección Social de Colombia, 2020.

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-md-10
        p.mb-4 Todo personal de salud debe identificar, sistemáticamente, a los consumidores de tabaco, aconsejar sobre el abandono del consumo y canalizar para la aplicación de intervenciones intermedias a quienes desean hacer un intento de cesación. Se requiere que el equipo de salud esté entrenado en la aplicación de estas intervenciones.

        .row.justify-content-center.mb-4
          .col-md-4.mb-4
            figure
              img(src='@/assets/curso/tema1/img02.jpg', alt='Estrategia de la 5Aes')
          .col-md-8
            p.mb-0 
              | Desde el ámbito operativo, se aplican los tres primeros pasos de la Estrategia de la 5Aes en el marco de cualquier consulta, por lo que las 
              strong intervenciones básicas 
              | también se conocen como Modelo de las 3Aes. Este esquema corresponde a las primeras 3Aes del 
              strong modelo de las 5Aes
              | , es el esquema de intervención breve para la cesación de tabaco más utilizada, y se denomina así porque cada uno de los tres pasos propuestos comienza por la letra A.
    
      .col-md-8.BG02.p-3.mb-4
        p.mb-0.text-center En el siguiente recurso de aprendizaje, se describen cada una de las primeras 3Aes de modelo:

    #MapaGroup01.row.mb-5(data-aos="fade")
      .row.justify-content-center
        .col-lg-10
          .row.justify-content-center.bgImg02.mb-5
            .col-3
              button.EditBtn(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
                figure
                  img(src='@/assets/curso/tema1/img04.svg', alt='1A')
              .multi-collapse1.brBTN.collapse.show(data-bs-parent='#MapaGroup01')
            .col-3
              button.EditBtn(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='false' aria-controls='.multi-collapse2')
                figure
                  img(src='@/assets/curso/tema1/img05.svg', alt='2A')
              .multi-collapse2.brBTN.collapse(data-bs-parent='#MapaGroup01')
            .col-3
              button.EditBtn(data-bs-toggle='collapse' data-bs-target='.multi-collapse3' aria-expanded='false' aria-controls='.multi-collapse3')
                figure
                  img(src='@/assets/curso/tema1/img06.svg', alt='3A')
              .multi-collapse3.brBTN.collapse(data-bs-parent='#MapaGroup01')
    
      .mb-0.brdbtnD1
        .multi-collapse1.row.justify-content-center.align-items-center.pb-4.collapse.show(data-bs-parent='#MapaGroup01')
          .col-md-8.mb-4.mb-md-0
            p Indagar a todos los usuarios que accedan a los servicios de salud respecto del consumo de tabaco o productos derivados o por la exposición al humo de tabaco ambiental, y registrar la información en la historia clínica.
            p Preguntar de una manera amistosa:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | ¿Usted fuma? ¿Utiliza algún producto de tabaco o derivado?
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | ¿Ha estado expuesto a humo de segunda mano?
            p.mb-0 
            | Si la respuesta es afirmativa, continuar con la segunda 
            strong A: Aconsejar.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img07.jpg', alt='1A')
        
        .multi-collapse2.row.justify-content-center.align-items-center.pb-4.collapse(data-bs-parent='#MapaGroup01')
          .col-md-8.mb-4
            p Asesorar sobre la importancia de dejar de fumar y para esto debe cumplir con las siguientes características:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0
                  strong Ser claro: 
                  | la recomendación es NO consumir ningún producto de tabaco o sus derivados, ni estar expuesto al humo de tabaco ambiental ni al vapor de segunda mano.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0
                  strong Sencillo: 
                  | usar un lenguaje simple y claro.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0
                  strong Firme: 
                  | sin ambigüedades, sin ser impositivo.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0
                  strong Personalizado: 
                  | tener presente los factores demográficos, aspectos estéticos, enfermedades asociadas, prevención de enfermedades, situación social, económica y cultural, motivaciones para dejar de fumar.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0
                  strong Ofreciendo ayuda: 
                  | como forma de reconocer la dificultad que implica este cambio.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img08.jpg', alt='2A')
          
          .col-md-8.BG02.p-3.my-4
            p.mb-0.text-center Ejemplos de consejo breve:

          .col-md-10.mb-0
            ul.lista-ul.colorLi
              li
                i.fas.fa-angle-right
                | “Lo mejor que puede hacer para estar más saludable es dejar de fumar, los beneficios serán evidentes en pocos días y si tiene dificultades tenemos formas efectivas de ayudarlo”.
              li
                i.fas.fa-angle-right
                | “Dejar de fumar es muy importante para su salud no dude en pedir ayuda si lo necesita”.
              li
                i.fas.fa-angle-right
                | "Como su médico, necesito que sepa que dejar de fumar es la acción más importante que usted puede hacer para proteger su salud ahora y en el futuro. Estamos aquí para ayudarle”. 
              li
                i.fas.fa-angle-right
                | “El humo de tabaco hace que su asma empeore, y dejar de fumar puede mejorar dramáticamente su salud”. 
              li
                i.fas.fa-angle-right
                | “Dejar de fumar puede reducir el número de infecciones del oído que tiene su hijo”.
        
        .multi-collapse3.row.justify-content-center.align-items-center.pb-4.collapse(data-bs-parent='#MapaGroup01')
          .col-md-8.mb-4
            p Implica evaluar la motivación del sujeto para dejar de fumar, lo cual constituye una clave importante para decidir lo que se hace a continuación.
            p Una persona se considera que está preparada para dejar de fumar cuando tiene certeza que desea el cambio y que cree que puede hacerlo (autoeficacia).
            .BG02.p-3
              p.mb-0.text-center Para evaluar esta motivación se pueden utilizar estas dos preguntas:
          .col-md-4.mb-4
            figure
              img(src='@/assets/curso/tema1/img09.jpg', alt='3A')

          .col-md-10.mb-4
            .tabla-a.color-acento-contenido.mb-4(data-aos="fade")
              table
                thead
                  tr
                    th Preguntas
                    th(colspan='3') Respuestas
                tbody
                  tr
                    td ¿Quiere dejar de fumar?
                    td Si
                    td.BG01 Duda
                    td.BG01 No
                  tr
                    td ¿Cree que puede hacerlo?
                    td Si
                    td Duda
                    td.BG01 No
          
          .BG03.bord01.p-4.mb-4
            p.mb-0 
              | La respuesta afirmativa indica que la persona si está motivada para dejar de fumar. 
              strong Continuar con el Modelo de las 5 Aes.
          
          .BG03.bord01.p-4.mb-4
            p.mb-0 
              | Respuestas en la zona sombreada indican que NO está preparado para dejar el consumo. 
              strong Es necesaria una intervención motivacional: aplicar el Modelo de las 5 Rs.
        
          .col-12.mb-4
            p.text-center 
              | Otra manera de evaluar la motivación es preguntándole al paciente: 
              strong ¿Está dispuesto a dejar de fumar en los próximos 30 días?
          
          .col-md-10
            hr
            .row.align-items-center.justify-content-between
              .col-1
                figure
                  img(src='@/assets/curso/tema1/img10.svg', alt='1')
              .col-11.ps-4
                p.mb-0
                  | Si la respuesta es afirmativa, significa que se encuentra en fase de preparación para dejar de fumar, es decir que se encuentra motivado para seguir adelante en su proceso de cesación. 
                  strong Continuar con el Modelo de las 5 Aes.
            hr
            .row.align-items-center.justify-content-between
              .col-1
                figure
                  img(src='@/assets/curso/tema1/img11.svg', alt='2')
              .col-11.ps-4
                p.mb-0
                  | Si la respuesta es negativa, significa que está en fase de contemplación (si ha pensado dejar de fumar en los próximos 6 meses) o precontemplación (no ha pensado en dejar de fumar).
                  strong Es necesaria una intervención motivacional: aplicar el modelo de las 5 Rs.            
            hr
    
    p(data-aos="fade-up") Una vez aplicada la atención básica en el marco de una atención en salud por cualquier motivo de consulta, en la que se identifica la presencia de consumo de tabaco o exposición al humo de tabaco ambiental y, posterior a aplicar las primeras tres Aes: averiguar, asesorar y apreciar, se recomienda canalizar a este paciente para continuar con una atención intermedia en la que se aplicará con más tiempo el esquema completo de las 5Aes, haciendo énfasis en las últimas Aes: (4A: ayudar a elaborar un plan para dejar de fumar y 5A: arreglar un plan de seguimiento).

    p(data-aos="fade-up") En resumen y de acuerdo con las recomendaciones del Ministerio de Salud y Protección Social de Colombia (2020), es necesario una vez aplicadas las atenciones básicas:

    .BG05.p-4.pb-5.mb-5(data-aos="flip-left")
      .row.justify-content-center.mb-5  
        .col-md-10.BG02.p-3
          p.mb-0.text-center Recomendaciones del Ministerio de Salud y Protección Social
      SlyderA
        .row.justify-content-center
          .col-md-10            
            .row
              .col-md-6.mb-4.mb-md-0
                p Canalizar al componente de atenciones intermedias a todas las personas que desean dejar de fumar y si el prestador no cuenta con el equipo de atenciones avanzadas en el corto plazo.            
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img12.jpg', alt='')
        
        .row.justify-content-center
          .col-md-10
            .row
              .col-md-6.mb-4.mb-md-0
                p Canalizar al componente de atenciones avanzadas a los grupos especiales identificados, tales como gestantes, persona con comorbilidades crónicas, adolescentes, consumidores de otras sustancias psicoactivas y personas con alteraciones de la salud mental. Mantener la intervención breve hasta que las atenciones avanzadas sean instauradas.           
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img14.jpg', alt='')
        
        .row.justify-content-center
          .col-md-10
            .row
              .col-md-6.mb-4.mb-md-0
                p Reforzar motivación y controlar en las próximas consultas a las personas que no desean dejar de fumar, con el propósito de generar un cambio de comportamiento frente a la posibilidad de dejar de fumar (avance en los estados de cambio de Prochaska).         
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/img13.jpg', alt='')
    
    .bloque-texto-g.color-secundario.BG02.p-3.p-sm-4.p-md-5.mb-5.bordLeft.justify-content-start(data-aos="fade-down")
      .bloque-texto-g__img.modGLeft(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img15.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.bord02
        p.mb-0 El personal de salud que atiende niños debe interrogar a los padres o cuidadores sobre el consumo de tabaco. En caso positivo, ofrecerles consejería para dejar de fumar y sobre la importancia de evitar la exposición al humo de segunda y tercer mano que puede afectar la salud de las personas que conviven con la persona que consume productos del tabaco o derivados. 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-md-10.BG01.p-4
        p.text-center.mb-0 En el siguiente video se entregan elementos claves para aplicar el Modelo ABC que ayudará al paciente fumador:
    
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.mb-4
      .col-md-10
        .row
          .col-md-4
            p.mb-0 Recuerde que el modelo del ABC tiene los mismos componentes que el modelo de las 5Aes, compárelos en el siguiente cuadro:
          .col-md-8
            .tabla-a.color-acento-contenido.mb-4(data-aos="fade")
              table
                thead
                  tr
                    th Modelo ABC
                    th Modelo 5Aes
                tbody
                  tr
                    td #[strong A:] Averigüe.
                    td #[strong A:] Averiguar.
                  tr
                    td #[strong B:] Brinde consejo.
                    td #[strong A:] Asesorar o aconsejar. Brindar consejo breve.
                  tr
                    td #[strong C:] Cesación: apóyelo o derívelo para su tratamiento.
                    td 
                      strong A: 
                      | Apreciar motivación.
                      br
                      strong A: 
                      | Ayudar a diseñar un plan para dejar de fumar.
                      br
                      strong A: 
                      | Arreglar un plan de seguimiento.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-md-10.BG01.p-4
        p.text-center.mb-0 En el siguiente video se podrá comprender el algoritmo de aplicación del ABC:
    
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .tarjeta.BG02.p-4.p-md-5.mb-4(data-aos="slide-up")
      .row.justify-content-around.align-items-center
        .col-6.col-md-5.mb-4.mb-md-0
          img.w-50.mx-auto(src="@/assets/curso/img01.svg")

        .col-md.col-lg-7
          p.mb-4 A continuación, se presenta una síntesis de las atenciones básicas y una serie de ejercicios prácticos para que se familiarice con la aplicación del modelo de las 3Aes a todos los pacientes que se identifican como consumidores de productos de tabaco o derivados y asisten por cualquier motivo de consulta, en el marco de la Ruta Integral de Promoción y Mantenimiento de la Salud.          
          a.boton.color-acento-botones.mb-4(:href="obtenerLink('/downloads/anexo01.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
          p.mb-0 Nota. Tomada del Ministerio de Salud y Protección Social de Colombia (2020).
    
    separador

    #t1_2.titulo-segundo(data-aos="flip-up")
      h2 1.2 Intervenciones intermedias
    
    p.mb-5(data-aos="fade") Corresponde a las acciones de intervención breve programada que deben ofrecer las EPS a través de su red de Instituciones Prestadoras de Servicios de Salud, tal como lo establece la Ley 1335 de 2009; aquí se hace énfasis en los pasos 4 y 5 de la estrategia de las 5Aes, no obstante, es necesario aplicar todos los pasos de la estrategia, además realizar las consultas específicas programadas. El período de seguimiento mínimo debe ser de al menos 6 meses (Ministerio de Salud y Protección Social de Colombia, 2020).

    .row.mb-5
      .col-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img16.jpg', alt='')
      .col-6(data-aos="fade-right")
        h5.mb-4 Modelo de las 5Aes
        p La idea es poder aplicar el modelo completo de las 5Aes, considerando que se debe programar un espacio de tiempo de 20 minutos para poder hacerlo, se debe hacer mayor énfasis en los pasos 4 y 5 de la estrategia, no obstante, es necesario aplicar todos los pasos del modelo de las 3Aes que se revisaron anteriormente.
    
    .row.BG06.p-5.mb-5(data-aos="fade-up")
      h3.mb-5 4A: Ayudar al paciente a elaborar un plan para dejar de fumar:
      .col-6
        figure
          img(src='@/assets/curso/tema1/img17.png', alt='')
      .col-6
        p Este paso implica ayudar al paciente a elaborar un plan para dejar de fumar y anticipar posibles efectos de la cesación, ofrecerle una orientación práctica que apoyen la resolución de problemas y la formación de habilidades para mantenerse libre del consumo de tabaco, prepararlo para superar las dificultades y desencadenantes asociadas principalmente con la abstinencia e identificar apoyo social para favorecer el proceso de cesación.
        p En el marco de este paso es adecuado entregar material educativo, incluida información sobre redes de servicios de salud, servicios comunitarios o de líneas telefónicas proactivas, si se dispone de ellas. Así mismo, es fundamental apoyar y animar al paciente en el intento de dejar de fumar, recordando que las recaídas pueden presentarse, pero son parte del proceso de cesación y que, como profesional, de salud estará pendiente para poder ayudarlo cuando lo necesite. El apoyo dado al paciente debe ser descrito de manera positiva, pero realista.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-md-10.BG01.p-4.mb-4
        p.text-center.mb-0 Para aplicar adecuadamente este paso del modelo debe garantizar los siguientes aspectos:
      
      .col-md-10(data-aos="slide-up")
        LineaTiempoD.color-acento-contenido.mb-5
          .row(numero="1" titulo="Brindar orientación práctica para el cambio de conducta")
            .col-12.py-4
              SlyderA
                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 Proporcionar los beneficios de dejar de fumar, empezando por la salud y la prevención de enfermedades, seguido del efecto preventivo de enfermedades para las personas y mascotas expuestas al humo de segunda y tercer mano, además de los beneficios económicos representados en el ahorro potencial al no tener que gastar dinero en productos de tabaco o sucedáneos.
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img18.jpg', alt='orientación práctica')
                        p.mb-4 Puede ser útil pedirle al paciente que elabore su propia lista de motivaciones. 
                        p.mb-0 Por ejemplo, preguntarle: ¿cuáles serían las cosas buenas si dejara de fumar o vapear?
                
                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 #[u Ayudar al paciente a identificar las situaciones de peligro] (eventos, emociones, situaciones o actividades que aumentan el riesgo de fumar o recaída). Puede utilizar herramientas como un diario del fumador, en el que el paciente registra el número de cigarrillos fumados en el transcurso del día, la hora en que lo hace, con quién lo hace, qué estaba haciendo cuando lo hace, qué tan intensas eran las ganas de consumirlo en ese momento, de tal manera que se pueda identificar un patrón de consumo de tabaco que permita anticiparse a las posibles dificultades que puedan presentarse.
                        figure.mb-0
                          img(src='@/assets/curso/tema1/img19.jpg', alt='identificar las situaciones de peligro')
                
                .row.justify-content-center(data-aos="fade")
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 Este podría ser un ejemplo de un diario de fumador:
                        .tabla-a.color-acento-contenido.mb-4
                          table
                            thead
                              tr
                                th Fecha
                                th Hora
                                th No. cigarrillos
                                th Deseo de fumar (1-10)
                                th Observaciones (con quién, qué está haciendo…)
                            tbody
                              tr
                                td 20/02/2021
                                td 06:00 a.m.
                                td 1
                                td 8
                                td Apenas me despierto
                              tr
                                td 21/02/2021
                                td 06:30 a.m.
                                td 1
                                td 6
                                td Después de bañarme
                              tr
                                td 21/02/2021
                                td 10:00 a.m.
                                td 1
                                td 3
                                td Con mi compañero de oficina

          .row(numero="2" titulo="Ayudar a preparar un plan para dejar de fumar")
            .col-12.py-4
              SlyderA
                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 Se recomienda utilizar una técnica de 4 pasos que pueden ser recordadas utilizando la nemotecnia STAR.
                        p.mb-4 #[u S = Seleccione:] pídale al fumador que seleccione una fecha para dejar de fumar, idealmente dentro de las próximas dos semanas.
                        p.mb-4 El día seleccionado por el paciente para dejar de fumar se suele denominar Día D. 
                        figure.mb-0
                          img(src='@/assets/curso/tema1/img37.jpg', alt='Transmitir')

                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 #[u T = Transmitir:] recomiende a la persona transmitir la información de su intento de cesación a familiares, compañeros de trabajo, amigos y en general a cualquier persona que pueda apoyar el intento de cesación.
                        figure.mb-0
                          img(src='@/assets/curso/tema1/img20.jpg', alt='Transmitir')
                
                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 #[u A = Anticipar:] es importante que la persona identifique las posibles barreras que puede enfrentar en su proceso de dejar de fumar y se anticipe a considerar estrategias para afrontar esos desafíos.

                        figure.mb-0
                          img(src='@/assets/curso/tema1/img21.jpg', alt='Retirar')
                
                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 #[u R = Retirar:] recomendar eliminar todos los productos de tabaco o derivados del área cercana (también ceniceros, encendedores, pipas, pods, vapeadores, juuls, nicotina líquida etc.) para crear un entorno libre de tabaco.
                        figure.mb-0
                          img(src='@/assets/curso/tema1/img22.jpg', alt='Retirar')

          .row(numero="3" titulo="Ayudar al paciente a tomar el control del consumo de tabaco")
            .col-12.py-4
              SlyderA
                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 Ayudarle a desarrollar habilidades para hacer frente a las situaciones de riesgo de recaída. Para reforzar este punto, puede suministrarle al paciente materiales complementarios, a modo de material educativo con algunas recomendaciones sobre técnicas de afrontamiento, y estrategias para ayudarle a lograr el control de su consumo.
                        figure.mb-4
                          img(src='@/assets/curso/tema1/img23.jpg', alt='desarrollar habilidades')
                        p.mb-0 A continuación, un ejemplo de contenido para material de apoyo:
                
                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 #[b Primer paso:] el paciente debe tomar el control del consumo, elegir 2 o 3 estrategias con las que quiere empezar, las más fáciles. 
                        p.mb-4 Debe hacerlo en la semana siguiente, estableciendo metas posibles y a corto plazo.
                        p.mb-4 Recomendarle que fume únicamente aquellos cigarrillos que son “imprescindibles”, no preocuparse por el “número” de cigarrillos o vapeos por día, lo que importa es que cada uno sea pensado.
                        ul.lista-ul.mb-4
                          li
                            i.fas.fa-angle-right
                            | Mantenga la cajetilla o el vapeador lejos, fuera de su lugar habitual y que no esté a la vista. 
                          li
                            i.fas.fa-angle-right
                            | Cuando sienta deseos de fumar o vapear, tendrá tiempo de preguntarse “#[i ¿Realmente lo necesito?]”. 
                          li
                            i.fas.fa-angle-right
                            | Postergue unos minutos cada cigarrillo o vapeo, realizando alguna actividad que lo distraiga.
                        h4.mb-4 Establezca reglas para aumentar el control:
                        .row.justify-content-center
                          .col-md-9
                            ul.lista-ul.mb-4
                              li
                                i.fas.fa-angle-right
                                | Compre solo una cajetilla o líquido de vapeo a la vez. 
                              li
                                i.fas.fa-angle-right
                                p.mb-0 Nunca fume cigarrillos de otras personas, no pida ni acepte cigarrillos de nadie. Aprenda desde ahora a decir: #[b ¡NO, gracias!]
                              li
                                i.fas.fa-angle-right
                                p.mb-0 Aumente la #[b actividad física], esto ayuda a manejar “la ansiedad” y mejora el ánimo, evita el aumento de peso. Ideal caminar por lo menos 30 minutos al día.
                              li
                                i.fas.fa-angle-right
                                p.mb-0 Aumente la ingesta de líquidos no azucarados. #[b Tome agua].
                              li
                                i.fas.fa-angle-right
                                p.mb-0 Agregue color a sus comidas: aumente el consumo de frutas y verduras. Es un buen momento de #[b ordenar] su alimentación.
                          .col-6.col-md-3
                            figure.mb-4
                              img(src='@/assets/curso/tema1/img24.svg', alt='reglas para aumentar el control')
                
                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 #[b Segundo paso:] rompa las asociaciones que le llevan a fumar sin necesidad. Como lugares, situaciones, emociones de su vida cotidiana.
                        ul.lista-ul.mb-4
                          li
                            i.fas.fa-angle-right
                            p.mb-0 No fume mientras: habla por teléfono, mira televisión, trabaja o juega en la computadora, está leyendo, #[b disfrute de los momentos libres de tabaco.]
                          li
                            i.fas.fa-angle-right
                            | Fume afuera de su casa, su auto, su lugar de trabajo se transformarán en sus refugios para no fumar. Además de evitar el daño a otros y a usted mismo.
                        p.mb-4 Establezca reglas para aumentar el control:
                        .row.justify-content-center
                          .col-md-6
                            p.mb-4 #[b Tercer paso:] experimente “un día sin fumar”. Cuando haya logrado ser consciente de todos los cigarrillos que fuma o vapea, habrá aprendido a manejar el impulso de fumar, con las estrategias que ha ido aplicando. 
                            p.mb-0 Planifique UN DÍA SIN FUMAR, en ese día haga todo lo que sabe le ayuda en su decisión de no fumar. Al finalizar el día, prémiese si ha logrado su objetivo.
                          .col-10.col-md-6
                            figure.mb-4
                              img(src='@/assets/curso/tema1/img25.jpg', alt='un día sin fumar')
                
                .row.justify-content-center
                  .col-md-10            
                    .row
                      .col-12
                        p.mb-4 #[b Cuarto paso:] mantenerse libre de tabaco. Los primeros meses debe mantenerse alerta. La recaída se inicia con una pitada o vapeada. Usted ya sabe qué hacer si aparece la idea o ese impulso, ponga en práctica las estrategias 
                        ul.lista-ul.mb-4
                          li
                            i.fas.fa-angle-right
                            | Es importante mantener los hábitos adquiridos: alimentación, ejercicio, ingesta de líquidos.
                          li
                            i.fas.fa-angle-right
                            | Analice periódicamente los beneficios que está obteniendo por esta nueva forma de vida.
                          li
                            i.fas.fa-angle-right
                            | Si considera que no podrá sostener su decisión, no dude en pedir ayuda.
                        .row.justify-content-center
                          .col-md-10
                            figure.mb-4
                              img(src='@/assets/curso/tema1/img26.jpg', alt='mantenerse libre de tabaco')

          .row(numero="4" titulo="De ser necesario, recomendar farmacoterapia")
            .col-12.py-4
              p.mb-4 Como parte de las estrategias a utilizar, se podría definir la necesidad del uso de medicación y si el profesional posee los conocimientos para su prescripción podría avanzar a la realización de la formulación (solo puede prescribir medicamentos un profesional médico).
              h4.mb-4 Son candidatos a terapia farmacológica para la cesación de tabaco:
              .row.justify-content-center
                .col-md-6
                  ul.lista-ul.mb-4
                    li
                      i.fas.fa-angle-right
                      | Personas que fuman más de 10 cigarrillos al día.
                    li
                      i.fas.fa-angle-right
                      | Personas que presentan un índice tabáquico (IPA) de más de 15 paquetes/año.
                    li
                      i.fas.fa-angle-right
                      | Fumadores con alta dependencia física a la nicotina. 
                    li
                      i.fas.fa-angle-right
                      | Antecedentes de recaídas y falla terapéutica a las intervenciones de consejería.
                    li
                      i.fas.fa-angle-right
                      | Uso previo de terapia farmacológica para la cesación de tabaco.
                .col-10.col-md-6
                  figure.mb-4
                    img(src='@/assets/curso/tema1/img27.jpg', alt='terapia farmacológica')              
              p.mb-0 El propósito de la intervención farmacológica es la de reducir los síntomas de abstinencia generados por la dependencia física, por lo que la terapia farmacológica es un complemento de las intervenciones clínicas y conductuales.
    
    p.mb-4 En definitiva, depende de la evaluación clínica del paciente y de la respuesta al plan terapéutico, y su objetivo es aliviar los síntomas físicos de la abstinencia.
    p.mb-4 A continuación, se anima a ver el video cómo brindar apoyo al paciente fumador:

    .video.mb-5(data-aos="fade")
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h3(data-aos="fade-up") 5A. Arreglar seguimiento:

    p.mb-4 es necesario organizar un seguimiento con el paciente, bien sea por telesalud o presencial, esto implica direccionarlo al componente de atenciones avanzadas del programa de cesación de tabaco, si es necesario. 

    p.mb-4 En el siguiente recurso de aprendizaje se indican las preguntas que deben resolverse en este paso de seguimiento:

    TabsB.color-acento-contenido.mb-5(data-aos="flip-left")
      .py-4.py-md-5.BG02.p-4(titulo="¿Cuándo?" :icono="require('@/assets/curso/tema1/img29.svg')")
        .row.justify-content-center
          .col-md-10.bg-white.p-3.mb-4
            p.mb-0.text-center ¿Cuándo?          
          .col-md-10
            .row.align-items-center
              .col-md-8.mb-4.mb-md-0
                ul.lista-ul.mb-4
                  li
                    i.fas.fa-angle-right
                    | El primer seguimiento debe ser programado idealmente durante la primera semana de la fecha de cesación.
                  li
                    i.fas.fa-angle-right
                    | Un segundo control se recomienda un mes después de la fecha de abandono del consumo.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema1/img32.svg', alt='')
      
      .py-4.py-md-5.BG02.p-4(titulo="¿Cómo?" :icono="require('@/assets/curso/tema1/img28.svg')")
        .row.justify-content-center
          .col-md-10.bg-white.p-3.mb-4
            p.mb-0.text-center ¿Cómo?
          .col-md-10
            .row.align-items-center
              .col-md-8.mb-4.mb-md-0
                p.mb-0 Utilizar métodos prácticos: seguimiento telefónico, telesalud, correo electrónico o consulta presencial. El seguimiento a los pacientes se recomienda hacerlo a través de trabajo en equipo, si es posible.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema1/img33.svg', alt='')

      .py-4.py-md-5.BG02.p-4(titulo="¿Para qué?" :icono="require('@/assets/curso/tema1/img30.svg')")
        .row.justify-content-center
          .col-md-10.bg-white.p-3.mb-4
            p.mb-0.text-center ¿Para qué?
        SlyderA
          .row.justify-content-center
            .col-md-10
              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  p.mb-4 Para los pacientes que han vuelto a fumar:
                  ul.lista-ul.mb-4
                    li
                      i.fas.fa-angle-right
                      | Identificar oportunamente los posibles problemas ya planteados y anticipar desafíos. 
                    li
                      i.fas.fa-angle-right
                      | Control de signos vitales, peso, talla, índice de masa corporal.
                    li
                      i.fas.fa-angle-right
                      | Anticipar riesgo de sobrepeso y promover estilos de vida saludable como alimentación saludable y actividad física.
                    li
                      i.fas.fa-angle-right
                      | Identificar aparición de síntomas de abstinencia y en el caso de presentarlos pensar en indicarle terapia farmacológica para su manejo.
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema1/img34.svg', alt='')
          
          .row.justify-content-center
            .col-md-10
              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  ul.lista-ul.mb-4
                    li
                      i.fas.fa-angle-right
                      | Evaluar el uso y los problemas de la medicación si le fue indicada. 
                    li
                      i.fas.fa-angle-right
                      | Recordar a los pacientes la importancia del apoyo social y familiar si aplica.
                    li
                      i.fas.fa-angle-right
                      | Para los pacientes que han logrado dejar de fumar: Felicitarlos por su éxito y permitirles que ellos mismo identifiquen los beneficios de haber dejado el consumo.
                    li
                      i.fas.fa-angle-right
                      | Prevención de recaídas.
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema1/img34.svg', alt='')
          
          .row.justify-content-center
            .col-md-10
              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  ul.lista-ul.mb-4
                    li
                      i.fas.fa-angle-right
                      | Mostrarles la recaída como una experiencia de aprendizaje, nunca como un fracaso terapéutico. Recuerde que en promedio una persona que ha dejado de fumar ha hecho por lo menos 5 intentos previos. Cada intento por dejar de fumar lo acerca cada vez más a alcanzar la meta: vivir libre del consumo de tabaco. 
                    li
                      i.fas.fa-angle-right
                      | Revisión de las circunstancias por las que recayó, recordar las motivaciones que lo llevaron a hacer este intento de cesación y motivar un nuevo compromiso. 
                    li
                      i.fas.fa-angle-right
                      | Enlace a un tratamiento más intensivo si está disponible.
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema1/img35.svg', alt='')

      .py-4.py-md-5.BG02.p-4(titulo="¿Con qué frecuencia?" :icono="require('@/assets/curso/tema1/img31.svg')")
        .row.justify-content-center
          .col-md-10.bg-white.p-3.mb-4
            p.mb-0.text-center ¿Con qué frecuencia?
        SlyderA
          .row.justify-content-center
            .col-md-10
              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  p.mb-0 El número sugerido de sesiones de seguimiento puede oscilar entre 3 y 6 dependiendo de la persona y de los recursos disponibles en cada institución. El acompañamiento debería abarcar al menos 6 meses.
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema1/img36.svg', alt='')
          
          .row.justify-content-center
            .col-md-10
              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  ul.lista-ul.mb-4
                    li
                      i.fas.fa-angle-right
                      | Consulta de valoración inicial (aplicación de las 5 Aes).
                    li
                      i.fas.fa-angle-right
                      | Consulta de preparación para el día D (día escogido por el fumador para dejar de fumar).
                    li
                      i.fas.fa-angle-right
                      | Consulta a la semana del día D.
                    li
                      i.fas.fa-angle-right
                      | Consulta dentro del primer mes de cesación.
                    li
                      i.fas.fa-angle-right
                      | Consulta no presencial en el tercer mes.
                    li
                      i.fas.fa-angle-right
                      | Seguimiento no presencial al sexto mes.
                    li
                      i.fas.fa-angle-right
                      | Paciente no mejora, evaluar adherencia a plan terapéutico y respuesta al tratamiento. Si con la intervención breve programada, el paciente no logra su objetivo de dejar de fumar (al primer mes de cesación), se recomienda reevaluar cada caso de manera particular y ajustar el plan de manejo. Esto puede implicar la derivación hacia el componente avanzado. 

                .col-md-4
                  figure
                    img(src='@/assets/curso/tema1/img36.svg', alt='')
          
          .row.justify-content-center
            .col-md-10
              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  p.mb-4 En caso, de que el paciente requiera adicionalmente manejo farmacológico, las sesiones podrían extenderse a 8, aunque esto depende de la respuesta del paciente:
                  ul.lista-ul.mb-4
                    li
                      i.fas.fa-angle-right
                      | Consulta de valoración inicial.
                    li
                      i.fas.fa-angle-right
                      | Consulta de preparación para el día D.
                    li
                      i.fas.fa-angle-right
                      | Consulta a la semana del día D.
                    li
                      i.fas.fa-angle-right
                      | Consultas quincenales en el primer mes de cesación.
                    li
                      i.fas.fa-angle-right
                      | Consulta al segundo mes.
                    li
                      i.fas.fa-angle-right
                      | Seguimiento no presencial al tercer mes.
                    li
                      i.fas.fa-angle-right
                      | Seguimiento no presencial al sexto mes.
                    li
                      i.fas.fa-angle-right
                      | Paciente no mejora reevaluar manejo y canalizar al equipo especializado.
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema1/img36.svg', alt='')
    
    p.mb-4 Las instituciones prestadoras de servicios de salud son los entornos donde se aplican las atenciones intermedias, para que puedan ser aplicadas por todo personal de salud entrenado. Sin embargo, para los casos que requieran manejo farmacológico, el médico será indispensable en este equipo. Estos profesionales, pueden compartir sus actividades de atención usual con la atención de las personas con tabaquismo; sin embargo, deben darse en consultas específicas como consultas programadas (Ministerio de Salud y Protección Social, 2020).

    p.mb-4 Las siguientes son las actividades derivadas de la aplicación de las atenciones intermedias, que implica la aplicación del modelo de las 5Aes:

    .tabla-b.color-acento-contenido.mb-5(data-aos="fade")
      table
        tr.BG07
          th
            h4.mb-0.text-white Atenciones intermedias 
          td
            h4.mb-0.text-white Instrumentos
        tr.BG08
          th
            p.mb-0 Consulta inicial
          td
        tr
          th
            p.mb-0 
              | Aplicar la estrategia de la 5Aes, si el paciente está motivado a dejar de fumar.
              br
              br
              | Si no está motivado, utilizar la estrategia de las 5R y la entrevista motivacional. 
          td
            p.mb-0
              | #[strong 5Aes:]
              br
              | 1A: Averiguar.
              br
              | 2A: Asesorar.
              br
              | 3A: Apreciar motivación.
              br
              | 4A: Ayudar a diseñar un plan para dejar de fumar.
              br
              | 5A: Arreglar un plan de seguimiento.
        tr
          th
            p.mb-0 
              | Evaluar el grado de tabaquismo o el índice tabáquico.
          td
            p.mb-0
              | IPA o Índice paquetes/año = (Nro. cigarrillos al día/20 x N.° de años fumando).
        tr
          th
            p.mb-0 
              | Evaluar la etapa de cambio comportamental.
          td
            p.mb-0
              | Etapas de cambio de Prochaska (precontemplación, contemplación, preparación, acción, mantenimiento).
        tr
          th
            p.mb-0 
              | Valoración de la dependencia física del tabaquismo.
          td
            p.mb-0
              | Prueba de Fagerstrom (versión breve).
        tr
          th
            p.mb-0 
              | Realizar historia clínica específica y examen físico.
          td
            p.mb-0
              | Evaluar comorbilidades, presencia de consumo de otras sustancias, antecedentes, intentos previos de cesación, motivos de recaídas, etc.
        tr
          th
            p.mb-0 
              | Evaluar motivaciones actuales para dejar de fumar y ayudar a elaborar plan para dejar de fumar.
          td
            p.mb-0
              | Ayudar a elaborar un plan para dejar de fumar. 
              br
              br
              |Usar la estrategia STAR.
              br
              br
              |Reforzar la motivación y preparar para el día D (fecha elegida para dejar de fumar).
        
        tr
          th
            p.mb-0 
              | Canalizar a los grupos especiales.
          td
            p.mb-0
              | Al componente de atenciones avanzadas: adolescentes, gestantes, comorbilidades crónicas, consumidor de sustancia psicoactivas y alteraciones de la salud mental.
              br
              br
              | A las Rutas Integrales de Atención en Salud (RIAS) específicas para su manejo: Patologías no controladas redireccionar.        
        tr
          th
            p.mb-0 
              | Ofrecer tratamiento farmacológico, si está indicado y según criterio médico. 
          td
            p.mb-0
              | Identificar indicaciones para ofrecer terapia farmacológica para apoyar la cesación de tabaco y prevenir síndrome de abstinencia.
    
    .brdbtnD1.mb-5

    .tarjeta.color-acento-botones.p-4.p-md-5.mb-5.BG03(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-6.col-md-5.mb-4.mb-md-0
          img.w-50.mx-auto(src="@/assets/curso/img01.svg")
        .col-md.col-lg-7
          p.mb-4 A continuación, se presenta el resumen de las actividades intermedias, es decir, la aplicación completa del modelo de las 5Aes en el marco de una consulta programada en la que se busca lograr que un paciente consumidor de productos de tabaco pase de la intención a la acción y logre iniciar un proceso de cesación.       
          a.boton.color-acento-botones.mb-4(:href="obtenerLink('/downloads/anexo02.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
          p.mb-0 Nota. Tomada del Ministerio de Salud y Protección Social de Colombia (2020).
    
    .tarjeta.BG02.p-4.p-md-5.mb-4(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-6.col-md-5.mb-4.mb-md-0
          img.w-50.mx-auto(src="@/assets/curso/img02.svg")
        .col-md.col-lg-7
          p.mb-4 En el siguiente video se realiza un ejercicio de aplicación de las 5Aes de manera demostrativa de la intervención de consejería breve, utilizando el modelo de las 5Aes a un paciente motivado.        
          a.boton.color-acento-botones.mb-4(href=("https://youtu.be/iarNiuv6tr8") target="_blank" type="application/pdf")
            span Ver video
            i.fas.fa-play-circle
          p.mb-0 Nota. Tomada del Ministerio de Salud y Protección Social de Colombia (2020).
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
