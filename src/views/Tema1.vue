<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de la agroecología en el contexto territorial
      img.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/1.png', alt='')(data-aos='fade-right')
      p.mb-0(data-aos='fade-right') Aborda los fundamentos de la agroecología desde un enfoque territorial, reconociendo la interacción entre los sistemas productivos, el entorno natural y los saberes campesinos. Permite comprender los principios agroecológicos y su aplicación en contextos específicos, fortaleciendo la relación entre cultura, territorio y producción para el desarrollo sostenible.
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Concepto e importancia de la agroecología

      .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 Se presenta la agroecología como un enfoque que orienta la producción agrícola de manera sostenible, integrando la relación entre naturaleza, sociedad y producción, y resaltando su importancia para mejorar la productividad, conservar los recursos naturales y promover prácticas agrícolas más equilibradas y adaptadas al contexto rural.


      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-brown")(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-end(titulo="Concepto de agroecología")
          .col-sm-12.col-lg-6
              p.mb-4 La agroecología es una disciplina científica, un conjunto de prácticas agrícolas y un movimiento social. Como disciplina, estudia la interacción entre los componentes ecológicos y los sistemas agrícolas. Como práctica, promueve técnicas sostenibles basadas en procesos naturales. Como movimiento, impulsa la justicia social, la soberanía alimentaria y la autonomía de los territorios.
              p.mb-0 En términos generales, la agroecología busca diseñar sistemas productivos que imiten el funcionamiento de los ecosistemas naturales, favoreciendo la biodiversidad, el reciclaje de nutrientes y la resiliencia frente a perturbaciones externas.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/3.png', alt='')
  
        .row.justify-content-center.mb-0.align-items-end(titulo="Importancia de la agroecología")
          .col-sm-12.col-lg-11
            p.mb-4 La agroecología adquiere relevancia en el contexto actual por múltiples razones:
            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-8
                .titulo-sexto.color-acento-contenido
                  p.mb-0  #[b Tabla 1.] Razones del contexto en la agroecología
                .tabla-b.color-primario.mb-0
                  table
                    thead
                      tr
                        th.w-25 #[b Razones]
                        th #[b Descripción]
                    tbody
                      tr
                        td.fw-bold Ambientales
                        td
                          | • Reduce la degradación del suelo.
                          br
                          | • Disminuye el uso de agroquímicos.
                          br
                          | • Conserva la biodiversidad.
                          br
                          | • Protege fuentes hídricas.
                      tr
                        td.fw-bold Sociales
                        td
                          | • Fortalece la organización comunitaria.
                          br
                          | • Valora el conocimiento campesino.
                          br
                          | • Promueve la equidad.
                          br
                          | • Mejora la calidad de vida rural.
                      tr
                        td.fw-bold Económicas
                        td
                          | • Reduce costos de producción.
                          br
                          | • Favorece economías locales.
                          br
                          | • Disminuye dependencia de insumos externos.
                      tr
                        td.fw-bold Culturales
                        td
                          | • Preserva tradiciones agrícolas.
                          br
                          | • Fortalece la identidad territorial.
                          br
                          | • Recupera prácticas ancestrales.


        .row.justify-content-center.mb-0.align-items-end(titulo="Agroecología vs agricultura convencional")
          .col-sm-12.col-lg-11
            p.mb-4 La agroecología y la agricultura convencional representan dos enfoques distintos de la producción agrícola. Mientras la agricultura convencional se basa en el uso intensivo de insumos externos y la maximización de la productividad, la agroecología propone sistemas sostenibles que integran principios ecológicos y saberes locales, buscando el equilibrio entre producción, ambiente y bienestar social.
            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-8
                .titulo-sexto.color-acento-contenido
                  p.mb-0  #[b Tabla 2.] Aspectos de la agroecología convencional y agroecología ecológica
                .tabla-b.color-primario.mb-0
                  table
                    thead
                      tr
                        th #[b Aspecto]
                        th #[b Agricultura convencional]
                        th #[b Agroecología]
                    tbody
                      tr
                        td Enfoque
                        td Productivista
                        td Integral
                      tr
                        td Insumos
                        td Externos (químicos)
                        td Internos (naturales)
                      tr
                        td Biodiversidad
                        td Baja
                        td Alta
                      tr
                        td Impacto ambiental
                        td Alto
                        td Bajo
                      tr
                        td Conocimiento
                        td Técnico
                        td Técnico + tradicional








      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Principios de la agroecología


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/4.png', alt='')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-1.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/5.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Los principios de la agroecología constituyen la base para el diseño y manejo de sistemas productivos sostenibles, resilientes y adaptados a las condiciones del territorio. Estos principios no solo orientan las prácticas agrícolas, sino que también integran dimensiones ecológicas, sociales, culturales y económicas, permitiendo una comprensión integral de los agroecosistemas.

          p.mb-0 A diferencia de los modelos convencionales, la agroecología busca optimizar las interacciones entre los componentes del sistema productivo (suelo, plantas, animales, clima y comunidad), favoreciendo procesos naturales y reduciendo la dependencia de insumos externos. En este sentido, los principios agroecológicos promueven una agricultura más eficiente, equilibrada y en armonía con el entorno.

      TabsC.color-primario.mb-5(data-aos='fade-right')
        .py-3.py-md-4(titulo="Diversificación")  
          .row.justify-content-center.mb-5.align-items-end
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/6.png', alt='')
            .col-sm-12.col-lg-6
              p.mb-4 La diversificación es uno de los pilares fundamentales de la agroecología y consiste en incorporar una mayor variedad de especies vegetales y animales dentro del sistema productivo. Esto puede lograrse mediante prácticas como policultivos, rotación de cultivos, asociaciones de especies y sistemas agroforestales.
              .bg-color-1.p-5
                h4 La implementación de sistemas diversificados permite:
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Reducir la incidencia de plagas y enfermedades. 
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Mejorar la fertilidad del suelo. 
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Disminuir riesgos productivos frente a eventos climáticos. 
                  li.d-flex.mb-0
                    i.fas.fa-circle.icon-list
                    p.mb-0 Aumentar la disponibilidad de alimentos y productos.
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-11
              p.mb-0 Además, la diversificación fortalece la biodiversidad funcional, lo que contribuye al equilibrio ecológico del sistema. Desde el enfoque campesino, esta práctica también responde a estrategias tradicionales de manejo del territorio, donde la variedad de cultivos garantiza seguridad alimentaria y estabilidad económica.

        .py-3.py-md-4(titulo="Reciclaje de nutrientes")  
          .row.justify-content-center.mb-5.align-items-end
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/7.png', alt='')
            .col-sm-12.col-lg-6
              p.mb-4 El reciclaje de nutrientes busca cerrar los ciclos dentro del sistema productivo, aprovechando al máximo los recursos disponibles en el entorno. Este principio se basa en la reutilización de residuos orgánicos como estiércol, restos de cosecha, compost, abonos verdes y otros materiales biodegradables.
              .bg-color-1.p-5
                h4 Entre sus beneficios se destacan:
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Mejora de la fertilidad del suelo.  
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Incremento de la materia orgánica.  
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Reducción de costos en insumos externos. 
                  li.d-flex.mb-0
                    i.fas.fa-circle.icon-list
                    p.mb-0 Disminución de impactos ambientales. 
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-11
              p.mb-0 El reciclaje de nutrientes permite reducir la dependencia de fertilizantes químicos, promoviendo un manejo más sostenible y autónomo. Asimismo, fortalece la actividad biológica del suelo, favoreciendo procesos naturales como la descomposición y la mineralización.

        .py-3.py-md-4(titulo="Sinergias biológicas")  
          .row.justify-content-center.mb-0.align-items-end
            .col-sm-12.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/8.png', alt='')
            .col-sm-12.col-lg-6
              p.mb-4 Las sinergias biológicas se refieren a las interacciones positivas que se establecen entre los diferentes organismos dentro del agroecosistema. Estas relaciones pueden darse entre plantas, animales, microorganismos y otros componentes del sistema.
              .bg-color-1.p-5
                h4 Algunos ejemplos incluyen:
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Asociación de cultivos que se benefician mutuamente.
                  li.d-flex.mb-0 
                    i.fas.fa-circle.icon-list
                    p.mb-0 Presencia de insectos benéficos que controlan plagas. 
                  


      h4.mb-5(data-aos='fade-right') Ejemplo de asociación benéfica de cultivos
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            p.mb-0  #[b Tabla 3.] Asociación benéfica de cultivos.
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-6.mb-cus
              .tabla-b.color-primario.wcus-tabla.mb-0
                table
                  thead
                    tr
                      th #[b Cultivo]
                      th #[b Buena asociación]
                  tbody
                    tr
                      td Pimiento
                      td Zanahoria
                    tr
                      td Calabacín
                      td Guisantes
                    tr
                      td Berenjena
                      td Espinaca
                    tr
                      td Hortalizas
                      td Apio
                    tr
                      td Perejil
                      td Tomates
                    tr
                      td Pepino
                      td Cebollas
                    tr
                      td Zanahoria
                      td Ajos
                    tr
                      td Espinaca
                      td Patatas
            .col-sm-12.col-lg-6
              .tabla-b.wcus-tabla.color-primario.mb-0
                table
                  thead
                    tr
                      th #[b Cultivo]
                      th #[b Buena asociación]
                  tbody
                    tr
                      td Tomates
                      td Puerro
                    tr
                      td Lechuga
                      td Habas
                    tr
                      td Apio
                      td Remolacha
                    tr
                      td Cebollas
                      td Calabaza
                    tr
                      td Ajos
                      td Brócoli
                    tr
                      td Patatas
                      td Sandía
                    tr
                      td Guisantes
                      td Pepino
                    tr
                      td Puerro
                      td Coliflor

      h4.mb-5.tit-icon(data-aos='fade-right') Presencia de insectos benéficos que controlan plagas.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1. 
            span Insectos benéficos
          figure
              img(src='@/assets/curso/temas/t1/9.svg', alt='La imagen presenta una infografía educativa sobre insectos benéficos controladores de plagas agrícolas, mostrando siete especies con ilustraciones científicas detalladas: Trichogramma (parasitoide de huevos), Coccinella septempunctata (mariquita depredadora de pulgones y cochinillas), Chrysoperla carnea (crisopa con larvas depredadoras generalistas), Episyrphus balteatus (sírfido depredador de pulgones), Carcelia spp (parasitoide de orugas) y Cotesia marginiventris (avispa parasitoide del gusano cogollero). El material está diseñado con fines didácticos para identificación entomológica en manejo integrado de plagas, incorporando nomenclatura científica binomial y fotografías realistas que facilitan el reconocimiento de estos organismos auxiliares en agroecosistemas. ')


      h4.mb-5(data-aos='fade-right') Ejemplo de insectos benéficos
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos='fade-right')
        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-5
            .col-5
              img(src='@/assets/curso/temas/t1/10.svg' alt='')
          h4.text-center.fw-italic Trichogramma
          p.mb-0.text-center Parasitan huevos de insectos plaga.

        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-5
            .col-5
              img(src='@/assets/curso/temas/t1/11.svg' alt='')
          h4.text-center.fw-italic Coccinella septempunctata
          p.mb-0.text-center Un auténtico depredador de pulgones, cochinillas, ácaros y moscas blancas.

        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-5
            .col-5
              img(src='@/assets/curso/temas/t1/12.svg' alt='')
          h4.text-center.fw-italic Chrysoperla carnea
          p.mb-0.text-center Las larvas de las crisopas son depredadores generalistas.

        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-5
            .col-5
              img(src='@/assets/curso/temas/t1/13.svg' alt='')
          h4.text-center.fw-italic Episyrphus balteatus
          p.mb-0.text-center Sus larvas son voraces depredadores de pulgones, escamas, mosca blanca.

        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-5
            .col-5
              img(src='@/assets/curso/temas/t1/14.svg' alt='')
          h4.text-center.fw-italic Carcelia spp
          p.mb-0.text-center Parasitan a orugas y larvas defoliadoras como el gusano peludo.
        .tarjeta.bg-fondo-1.p-4
          .row.justify-content-center.mb-5
            .col-5
              img(src='@/assets/curso/temas/t1/15.svg' alt='')
          h4.text-center.fw-italic Cotesia marginiventris
          p.mb-0.text-center Esta avispa parasita orugas y larvas como el gusano cogollero



      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Microorganismos del suelo que mejoran la disponibilidad de nutrientes

      p.mb-5(data-aos='fade-right') El aprovechamiento de estas sinergias permite fortalecer los procesos ecológicos naturales, reduciendo la necesidad de insumos externos y mejorando la eficiencia del sistema productivo.

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-brown")(data-aos='fade-right')
        .row.justify-content-center.mb-0.align-items-end(titulo="Bacterias.")
          .col-sm-12.col-lg-11
            .row.justify-content-center.mb-5.align-items-center
              .col-sm-12.col-lg-1.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/16.svg', alt='')
              .col-sm-12.col-lg-11
                  p.mb-0 Las bacterias beneficiosas cumplen un rol fundamental en la agricultura, ya que favorecen el desarrollo de los cultivos mediante distintas interacciones con las plantas. Entre sus principales aportes se destacan:
            h4.mb-3 Fijación de nitrógeno
            p.mb-5 Algunas bacterias como #[i Rhizobium], que establece simbiosis con leguminosas, y #[i Azotobacter], capturan el nitrógeno del aire y lo convierten en formas aprovechables por las plantas.

            h4.mb-3 Descomposición de materia orgánica
            p.mb-5 Participan en la degradación de residuos vegetales y animales, liberando nutrientes esenciales como nitrógeno, fósforo y azufre, lo que contribuye a mejorar la fertilidad del suelo.
            
            h4.mb-3 Estimulación del crecimiento vegetal (PGPR)
            p.mb-0 Géneros como #[i Bacillus] y #[i Pseudomonas] favorecen el desarrollo de las plantas mediante la producción de sustancias reguladoras del crecimiento y la optimización en la absorción de nutrientes.

        .row.justify-content-center.mb-0.align-items-end(titulo="Hongos")
          .col-sm-12.col-lg-11
            .row.justify-content-center.mb-5.align-items-center
              .col-sm-12.col-lg-1.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/17.svg', alt='')
              .col-sm-12.col-lg-11
                  p.mb-3 Los hongos son esenciales para el equilibrio y la salud del suelo, cumpliendo funciones clave como:
                  h4.mb-3 Descomposición de materia orgánica
                  p.mb-0 Los hongos degradan compuestos orgánicos y facilitan la liberación de nutrientes como fósforo y potasio. Las micorrizas, en particular, establecen asociaciones con las raíces, mejorando la absorción de nutrientes y brindando protección frente a patógenos.`
            h4.mb-3 Control biológico
            p.mb-0 Algunos hongos actúan como agentes naturales de control al competir con microorganismos perjudiciales, disminuyendo su presencia y reduciendo el uso de agroquímicos.
        .row.justify-content-center.mb-0.align-items-end(titulo="Actinobacterias")
          .col-sm-12.col-lg-11
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-1.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/18.svg', alt='')
              .col-sm-12.col-lg-11
                  p.mb-0 Este grupo de microorganismos es relevante en la descomposición de compuestos complejos como la celulosa y la quitina. Además, intervienen en la formación de humus, mejorando la estructura del suelo y su capacidad de retener agua y nutrientes.
        
        .row.justify-content-center.mb-0.align-items-end(titulo="Algas")
          .col-sm-12.col-lg-11
            .row.justify-content-center.mb-0.align-items-center
              .col-sm-12.col-lg-1.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/19.svg', alt='')
              .col-sm-12.col-lg-11
                  p.mb-0 Las algas presentes en el suelo son organismos fotosintéticos que contribuyen a la producción de oxígeno, la estabilización del suelo y la conservación de la humedad. Son especialmente importantes en zonas áridas o semiáridas, donde ayudan a mantener la estructura del suelo.
        
        .row.justify-content-center.mb-0.align-items-end(titulo="Protozoos")
          .col-sm-12.col-lg-11
            p.mb-4 Aunque su acción es indirecta, los protozoos cumplen una función importante en la dinámica del suelo. Al alimentarse de bacterias, regulan sus poblaciones y liberan nutrientes en formas disponibles para las plantas.
            .titulo-sexto.color-acento-contenido
              p.mb-0  #[b Tabla 3.] Beneficios de los microorganismos en los suelos agrícolas.
            .tabla-b.color-primario.mb-4
              table
                thead
                  tr
                    th.w-25 #[b Beneficio]
                    th #[b Descripción]
                tbody
                  tr
                    td Mejoramiento de la fertilidad
                    td La actividad microbiana permite transformar la materia orgánica en nutrientes disponibles, enriqueciendo el suelo.
                  tr
                    td Disminución del uso de fertilizantes químicos
                    td Procesos como la fijación biológica de nitrógeno y la liberación natural de nutrientes reducen la necesidad de insumos sintéticos.
                  tr
                    td Control de plagas y enfermedades
                    td Muchos microorganismos actúan como barreras naturales contra patógenos mediante competencia, producción de sustancias antimicrobianas o inducción de defensas en las plantas.
                  tr
                    td Mejora de la estructura del suelo
                    td Favorecen la formación de agregados, incrementando la retención de agua y facilitando el desarrollo radicular.
                  tr
                    td Biorremediación
                    td Algunos microorganismos tienen la capacidad de degradar contaminantes, contribuyendo a la recuperación de suelos afectados.

            p.mb-0 #[b Nota:] el manejo adecuado del suelo, mediante prácticas como la rotación de cultivos, el uso de abonos orgánicos y la conservación de la materia orgánica, favorece la diversidad microbiana. Esto fortalece la salud del suelo y mejora la sostenibilidad y resiliencia de los sistemas productivos.
        
        .row.justify-content-center.mb-0.align-items-end(titulo="Eficiencia en el uso de recursos")
          .col-sm-12.col-lg-11
            .row.justify-content-center.mb-5.align-items-center
              .col-sm-12.col-lg-1.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/20.svg', alt='')
              .col-sm-12.col-lg-11
                  p.mb-0 Este principio busca optimizar el aprovechamiento de los recursos disponibles en el territorio, como el agua, el suelo, la energía y los nutrientes. La agroecología promueve el uso racional y sostenible de estos recursos, evitando el desperdicio y la sobreexplotación.
            h4.mb-3 Entre las prácticas asociadas se encuentran:
            ul.lista-ul--color.mb-4
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Uso eficiente del agua (riego tecnificado, cosecha de agua). 
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Manejo adecuado del suelo.
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Integración de sistemas productivos.
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Aprovechamiento de energías renovables. 
            p.mb-0 La eficiencia en el uso de recursos contribuye a la sostenibilidad económica y ambiental de los sistemas productivos, lo que permite mantener la productividad a largo plazo.
        .row.justify-content-center.mb-0.align-items-end(titulo="Resiliencia")
          .col-sm-12.col-lg-11
            .row.justify-content-center.mb-5.align-items-center
              .col-sm-12.col-lg-1.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/21.svg', alt='')
              .col-sm-12.col-lg-11
                  p.mb-0 La resiliencia es la capacidad del sistema productivo para adaptarse y recuperarse frente a perturbaciones como cambios climáticos, crisis económicas o eventos naturales. En agroecología, este principio es clave para garantizar la estabilidad y continuidad de la producción.
            h4.mb-3 Los sistemas resilientes se caracterizan por:
            ul.lista-ul--color.mb-4
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Alta diversidad biológica. 
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Suelos saludables. 
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 Bajo nivel de dependencia externa. 
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Capacidad de adaptación e innovación.
            p.mb-0 La resiliencia no solo se construye desde lo ecológico, sino también desde lo social, mediante el fortalecimiento de las comunidades rurales y sus capacidades organizativas.

        .row.justify-content-center.mb-0.align-items-end(titulo="Cocreación de conocimiento")
          .col-sm-12.col-lg-11
            .row.justify-content-center.mb-5.align-items-center
              .col-sm-12.col-lg-1.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/22.svg', alt='')
              .col-sm-12.col-lg-11
                  p.mb-0 La cocreación de conocimiento reconoce que el aprendizaje es un proceso colectivo donde se integran saberes técnicos y conocimientos tradicionales. Este principio es fundamental en la agroecología, ya que permite construir soluciones contextualizadas y pertinentes.
            h4.mb-3 Se basa en:
            ul.lista-ul--color.mb-4
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 El diálogo de saberes. 
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 La participación activa de los actores rurales. 
                li.d-flex
                  i.fas.fa-circle.icon-list
                  p.mb-0 La experimentación en campo. 
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 El aprendizaje colectivo.
            p.mb-0 La cocreación de conocimiento fortalece la autonomía de los productores y promueve la innovación desde el territorio, articulándose directamente con la metodología Campesino a Campesino (CAC).

















      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Enfoque territorial de la agroecología

      p.mb-5(data-aos='fade-right') El territorio no es solo un espacio físico, sino una construcción social donde interactúan factores ambientales, culturales, económicos y políticos.
      
      .bg-full-width.mb-5.bg-fondo-2(data-aos='fade-right')
        .p-full-width
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2  Elementos del territorio

          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-8
              .bg-color-2.p-4.mb-4
                p.mb-0 El territorio es una construcción integral donde interactúan componentes naturales, sociales, culturales y económicos. En el enfoque agroecológico, comprender estos elementos es clave para diseñar sistemas productivos sostenibles, ya que cada uno influye directamente en la forma en que se desarrollan las actividades agrícolas y en la calidad de vida de las comunidades rurales.

              h4.mb-5.tit-icon Recursos naturales (suelo, agua, biodiversidad)
              p.mb-3 Los recursos naturales constituyen la base de los sistemas productivos agroecológicos. El suelo es el principal medio para el desarrollo de los cultivos, ya que aporta nutrientes, retiene agua y sostiene la actividad biológica. Su calidad depende de factores como la textura, estructura, contenido de materia orgánica y manejo adecuado.
              p.mb-3 El agua es un recurso esencial para la producción agrícola, influyendo en el crecimiento de las plantas y en la productividad. Su disponibilidad, calidad y manejo (riego, conservación, cosecha de agua) son determinantes para la sostenibilidad del sistema.

              p.mb-0 La biodiversidad incluye la variedad de especies vegetales, animales y microorganismos presentes en el territorio. Esta diversidad favorece el equilibrio ecológico, contribuye al control natural de plagas, mejora la fertilidad del suelo y fortalece la resiliencia del sistema productivo

            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/23.png', alt='')


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t1/24.png', alt='')
        .col-sm-12.col-lg-7.bg-color-3.p-4.br-3
            img.wcus-2.mb-3(src='@/assets/curso/temas/t1/25.svg', alt='')
            h4.mb-5.tit-icon Actores sociales (campesinos, organizaciones)
            p.mb-3 Los actores sociales son fundamentales en la gestión del territorio, ya que son quienes toman decisiones, implementan prácticas productivas y transmiten conocimientos. Entre ellos se encuentran los campesinos, asociaciones, cooperativas, instituciones y organizaciones comunitarias.
            p.mb-3 Su participación permite:
            ul.lista-ul--color.mb-4
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Construir soluciones colectivas. 
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Fortalecer procesos organizativos. 
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Promover el intercambio de saberes. 
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Impulsar el desarrollo rural.
            p.mb-0 En la agroecología, el reconocimiento de estos actores es clave para fomentar la autonomía, la equidad y la sostenibilidad de los sistemas productivos.

      h4.mb-5.tit-icon(data-aos='fade-right') Cultura y tradiciones
      p.mb-5(data-aos='fade-right') La cultura y las tradiciones reflejan la identidad de las comunidades rurales y están estrechamente vinculadas con las prácticas agrícolas. Incluyen conocimientos ancestrales, formas de producción, costumbres, creencias y valores que han sido transmitidos de generación en generación.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img.wcus-3(src='@/assets/curso/temas/t1/26.png', alt='')
        .col-sm-12.col-lg-4.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t1/27.svg', alt='')
        .col-sm-12.col-lg-5.bg-color-4.p-5
            p.mb-3 Estos elementos culturales aportan:
            ul.lista-ul--color.mb-3
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Prácticas sostenibles adaptadas al entorno.
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Estrategias de manejo del territorio. 
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Identidad y sentido de pertenencia. 
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 Diversidad de conocimientos.
            p.mb-0 La agroecología valora y rescata estos saberes, integrándolos con conocimientos técnicos para fortalecer los sistemas productivos.



      h4.mb-5.tit-icon(data-aos='fade-right') Infraestructura y acceso a mercados
      .row.justify-content-center.mb-5(data-aos='fade-right')
         .col-sm-12.col-lg-5.d-none.d-lg-block
           img(src='@/assets/curso/temas/t1/28.png', alt='')
         .col-sm-12.col-lg-7
            p.mb-2 La infraestructura comprende los medios físicos que facilitan la producción, transformación y comercialización de productos agrícolas, como vías de acceso, sistemas de riego, centros de acopio y transporte.
            p.mb-3 El acceso a mercados es fundamental para garantizar la sostenibilidad económica de los productores, permitiendo la comercialización de sus productos en condiciones justas.

            .bg-color-1.p-4.mb-3
              .row.justify-content-center.mb-0.align-items-center
                .col-sm-12.col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/28.svg', alt='')
                .col-sm-12.col-lg-10
                  h5 Estos elementos influyen en:
                  ul.lista-ul--color.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-circle.icon-list
                      p.mb-0 La rentabilidad de los sistemas productivos.  
                    li.d-flex.mb-0
                      i.fas.fa-circle.icon-list
                      p.mb-0 La competitividad de los productos.  
                    li.d-flex.mb-0
                      i.fas.fa-circle.icon-list
                      p.mb-0 La integración de las comunidades al desarrollo económico.  
                    li.d-flex.mb-0
                      i.fas.fa-circle.icon-list
                      p.mb-0 La seguridad alimentaria. 
            p.mb-0 En el enfoque agroecológico, se promueve el fortalecimiento de mercados locales y circuitos cortos de comercialización, favoreciendo relaciones más justas entre productores y consumidores.


      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia del enfoque territorial


      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.br-1.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/29.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-4
          p.mb-0 El enfoque territorial es fundamental en la agroecología, ya que permite comprender que los sistemas productivos no existen de manera aislada, sino que están profundamente relacionados con las características ambientales, sociales, culturales y económicas del territorio donde se desarrollan. Este enfoque reconoce que cada territorio posee condiciones particulares que influyen directamente en las prácticas agrícolas y en las formas de vida de las comunidades rurales.

      p.mb-4(data-aos='fade-right') Su importancia radica en que orienta la planificación y gestión de los sistemas productivos de manera contextualizada, evitando la aplicación de modelos estandarizados que no responden a las realidades locales. A través del enfoque territorial, se promueve el uso adecuado de los recursos naturales, respetando las dinámicas ecológicas y los saberes tradicionales de las comunidades campesinas.
      p.mb-5(data-aos='fade-right') Entre los principales aportes del enfoque territorial se destacan:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/30.png', alt='')
        .col-sm-12.col-lg-6
          LineaTiempoD.color-acento-botones.mb-0
            .row.mb-0(numero="1" titulo="Reconocimiento de la diversidad local")
              .col-12
                p.mb-0 Permite valorar las características propias de cada territorio, como el clima, el suelo, la biodiversidad y las prácticas culturales, favoreciendo sistemas productivos adaptados y sostenibles. 
            .row.mb-0(numero="2" titulo="Fortalecimiento de los saberes campesinos")
              .col-12
                p.mb-0 Integra los conocimientos tradicionales en la toma de decisiones, reconociendo su importancia en el manejo del territorio y en la conservación de los recursos naturales. 
            .row.mb-0(numero="3" titulo="Mejora en la planificación productiva")
              .col-12
                p.mb-0 Facilita la implementación de estrategias acordes a las condiciones del entorno, optimizando la productividad y reduciendo riesgos. 
            .row.mb-0(numero="4" titulo="Promoción del desarrollo sostenible")
              .col-12
                p.mb-0 Articula las dimensiones ambiental, social y económica, contribuyendo a mejorar la calidad de vida de las comunidades rurales. 
            .row.mb-0(numero="5" titulo="Fomento de la participación comunitaria")
              .col-12
                p.mb-0 Impulsa procesos colectivos donde los actores del territorio participan en la identificación de problemáticas y en la construcción de soluciones.





      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Saberes y conocimientos campesinos


      .row.justify-content-center.mb-5.align-items-center.bg-color-1.p-4(data-aos="fade-right")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/31.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 Los saberes y conocimientos campesinos son el resultado de procesos históricos de aprendizaje construidos a partir de la experiencia directa, la observación del entorno y la transmisión de generación en generación. Estos conocimientos se desarrollan en estrecha relación con el territorio, permitiendo a las comunidades rurales comprender los ciclos naturales, interpretar señales del ambiente y tomar decisiones productivas adecuadas.
      p.mb-5(data-aos='fade-right') A diferencia del conocimiento técnico formal, los saberes campesinos no siempre están sistematizados, pero poseen una alta capacidad de adaptación y una profunda conexión con la realidad local. En el enfoque agroecológico, estos conocimientos son fundamentales, ya que aportan soluciones prácticas, sostenibles y contextualizadas.


      .bg-full-width.mb-0.bg-fondo-3(data-aos='fade-right')
        .p-full-width
          .tarjeta.bg-color-5.p-4
            PasosB.color-acento-botones
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/32.png', alt='')
                .col-sm-12.col-lg-6
                  h5.mb-4 Características
                  p.mb-3 Los saberes campesinos presentan una serie de características que los diferencian y les otorgan valor dentro de los sistemas productivos:
                  ul.lista-ul--color.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Empíricos:] se construyen a partir de la práctica cotidiana, la experimentación y la observación directa de los fenómenos naturales. No dependen exclusivamente de métodos científicos, sino de la experiencia acumulada. 
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Contextuales:] están estrechamente ligados a las condiciones específicas del territorio (clima, suelo, cultura), lo que los hace altamente pertinentes para cada región. 
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Dinámicos:] no son estáticos; evolucionan con el tiempo a medida que cambian las condiciones del entorno y se incorporan nuevas experiencias o aprendizajes. 
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Colectivos:] se construyen y transmiten dentro de la comunidad, fortaleciendo la identidad y el trabajo colaborativo. El conocimiento no pertenece a un individuo, sino al colectivo. 
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/33.png', alt='')
                .col-sm-12.col-lg-6
                  h5.mb-4 Ejemplos
                  p.mb-4 Los saberes campesinos se manifiestan en múltiples prácticas que han demostrado su eficacia a lo largo del tiempo.
                  ul.lista-ul--color.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Uso de calendarios lunares:] orientan actividades agrícolas como la siembra, poda y cosecha, basándose en las fases de la luna y su influencia en los cultivos.  
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Selección de semillas:] los agricultores eligen y conservan semillas de las mejores plantas, garantizando adaptación, calidad y diversidad genética.  
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Manejo tradicional del suelo:] incluye prácticas como el uso de abonos orgánicos, rotación de cultivos y descanso del suelo para mantener su fertilidad. 
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Asociaciones de cultivos:] consiste en sembrar diferentes especies en un mismo espacio para aprovechar beneficios mutuos, como el control de plagas y el uso eficiente de nutrientes.  
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t1/34.png', alt='')
                .col-sm-12.col-lg-6
                  h5.mb-3 Importancia
                  p.mb-2 Los saberes campesinos son fundamentales para el desarrollo de sistemas agroecológicos sostenibles, ya que aportan múltiples beneficios.
                  ul.lista-ul--color.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Permiten prácticas sostenibles:] están basados en el respeto por los ciclos naturales y el uso responsable de los recursos, lo que contribuye a la conservación del ambiente.   
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Reducen la dependencia tecnológica:] disminuyen la necesidad de insumos externos (fertilizantes, pesticidas), promoviendo la autonomía de los productores.   
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Fortalecen la identidad cultural:] preservan tradiciones, valores y formas de vida propias de las comunidades rurales, reforzando el sentido de pertenencia.  
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Favorecen la resiliencia:] al estar adaptados al territorio, permiten enfrentar mejor los cambios climáticos y las condiciones adversas.   
                    li.d-flex.mb-0
                      i.fas.fa-leaf
                      p.mb-0 #[b Promueven la soberanía alimentaria:] facilitan la producción de alimentos propios, diversos y culturalmente apropiados.  
              

















      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.5 Relación cultura – territorio - producción


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/35.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-4 La producción agrícola no puede entenderse únicamente desde una perspectiva técnica o económica; está profundamente influenciada por la cultura y por las condiciones propias del territorio. En los sistemas agroecológicos, esta relación es esencial, ya que permite comprender que las prácticas productivas son el resultado de procesos históricos, sociales y ambientales que configuran la identidad de las comunidades rurales.
            p.mb-0 La cultura orienta las decisiones sobre qué, cómo y cuándo producir; el territorio establece las condiciones y limitantes naturales; y la producción, a su vez, expresa la forma en que las comunidades se relacionan con su entorno. Esta interacción permanente da lugar a sistemas productivos únicos, adaptados y con significado social.



      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aporte

      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/36.svg')         
          h2.text-center Cultura
          p.mb-0 La cultura influye directamente en las prácticas productivas mediante tradiciones, creencias, conocimientos ancestrales y formas de organización comunitaria. Por ejemplo, determina los calendarios de siembra, el uso de semillas nativas, las técnicas de cultivo y las formas de manejo del suelo. Además, incorpora valores como el respeto por la naturaleza y el trabajo colectivo. 


        .col-md.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/37.svg')        
          h2.text-center Territorio
          p.mb-0  El territorio, entendido como el conjunto de condiciones naturales (clima, suelo, relieve, disponibilidad de agua), define qué tipo de cultivos pueden desarrollarse y en qué condiciones. También influye en el acceso a recursos, infraestructura y mercados, lo que condiciona las decisiones productivas y las estrategias de manejo. 
        
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/38.svg')         
          h2.text-center Producción
          p.mb-0 La producción agrícola es una expresión de la identidad cultural de las comunidades. Los cultivos, las técnicas empleadas y los productos obtenidos reflejan la historia, los conocimientos y las tradiciones del territorio. De esta manera, la agricultura no solo cumple una función económica, sino también social y cultural.  


      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Interacciones dinámicas


      p.mb-3(data-aos='fade-right') La relación entre cultura, territorio y producción es dinámica y evoluciona con el tiempo. Los cambios en el entorno (climáticos, económicos o tecnológicos) generan transformaciones en las prácticas productivas, pero estas suelen adaptarse manteniendo elementos culturales propios.
      p.mb-5(data-aos='fade-right') En este sentido, la agroecología promueve:


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/39.png', alt='')
        .col-sm-12.col-lg-4.d-none.d-lg-block.mx-0.px-0
          img(src='@/assets/curso/temas/t1/40.svg', alt='')
        .col-sm-12.col-lg-5.bg-color-4.px-5.pt-5
            ul.lista-ul--color.mb-3
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 La adaptación de prácticas tradicionales a nuevas condiciones.
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 La integración de conocimientos técnicos sin perder identidad cultural.
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 El fortalecimiento de sistemas productivos resilientes.
                li.d-flex.mb-0
                  i.fas.fa-circle.icon-list
                  p.mb-0 La conservación de la diversidad biocultural.
            p.mb-0 #[b Ejemplo:] el cultivo de maíz es un claro ejemplo de esta relación integral. No se trata únicamente de un producto agrícola, sino de un elemento central en la cultura de muchas comunidades rurales.

      h5.mb-5(data-aos='fade-right') El maíz está asociado a:
      .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.br-3.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/41.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column.br-5
          ul.lista-ul--color.mb-3
            li.d-flex.mb-0
              i.fas.fa-circle.icon-list
              p.mb-0  Prácticas agrícolas tradicionales, como la selección de semillas criollas y la siembra en policultivos (ej. maíz, frijol y calabaza). 
            li.d-flex.mb-0
              i.fas.fa-circle.icon-list
              p.mb-0  Manifestaciones culturales, como festividades, rituales y celebraciones relacionadas con la siembra y la cosecha. 
            li.d-flex.mb-0
              i.fas.fa-circle.icon-list
              p.mb-0  Gastronomía local, siendo base de múltiples alimentos tradicionales. 
            li.d-flex.mb-0
              i.fas.fa-circle.icon-list
              p.mb-0  Identidad comunitaria, al representar historia, conocimiento y vínculo con el territorio.
          p.mb-0 #[b Nota:] este ejemplo evidencia cómo la producción agrícola trasciende lo productivo y se convierte en un elemento clave de la vida social y cultural.
  

  </template>

<script>
export default {
  name: 'Tema1',
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

<style lang="sass"></style>
