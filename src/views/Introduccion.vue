<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png')
      .col-sm-12.col-lg-7
          p.mb-0 La agricultura ha sido históricamente una actividad fundamental para el desarrollo de las sociedades rurales, estrechamente vinculada a los conocimientos, prácticas y tradiciones de las comunidades campesinas. En este contexto, la agroecología surge como un enfoque integral que reconoce la importancia del territorio, la biodiversidad y los saberes locales en la construcción de sistemas productivos sostenibles. Más allá de la producción de alimentos, la agroecología promueve relaciones equilibradas entre el ser humano, la naturaleza y la cultura. Sin embargo, los modelos agrícolas convencionales, caracterizados por el uso intensivo de insumos externos y la homogeneización de los sistemas productivos, han generado impactos negativos sobre los ecosistemas y han debilitado los conocimientos tradicionales. Esta situación ha evidenciado la necesidad de fortalecer enfoques alternativos que valoren los saberes campesinos y promuevan prácticas adaptadas a las condiciones específicas de cada territorio.

    .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.svg')
      .col-sm-12.col-lg-11
          p.mb-0 En este sentido, el estudio de los principios agroecológicos y su articulación con el enfoque territorial permite comprender las dinámicas productivas desde una perspectiva integral, donde se reconocen factores ambientales, sociales y culturales. La agroecología no solo se limita a técnicas de producción, sino que implica un proceso de construcción colectiva del conocimiento, en el cual los agricultores desempeñan un papel activo como generadores y transmisores de saberes.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.br-1.mb-5(data-aos="fade-right")
      .bloque-texto-g__img.d-none.d-lg-block(
        :style="{ backgroundImage: `url(${require_src('@/assets/curso/intro/3.png')})` }")
      
      .bloque-texto-g__texto.p-4.d-flex.flex-column.br-2
        p.mb-4 En las últimas décadas, la metodología Campesino a Campesino (CAC) se ha consolidado como una estrategia pedagógica clave para el fortalecimiento de procesos formativos en el ámbito rural. Esta metodología, basada en el aprendizaje horizontal y el intercambio de experiencias, facilita la apropiación de conocimientos y promueve la innovación desde la práctica, contribuyendo al desarrollo de sistemas agroecológicos más resilientes y contextualizados.
        p.mb-0 El proceso de construcción colectiva del conocimiento implica la integración de diferentes formas de saber, donde el diálogo entre conocimientos técnicos y tradicionales permite generar soluciones pertinentes a las problemáticas del territorio. A través de estrategias participativas, se fomenta la reflexión crítica, la experimentación y la toma de decisiones fundamentadas en la realidad de las comunidades.


    p.mb-5(data-aos="fade-right") Asimismo, la implementación de prácticas agroecológicas basadas en principios de sostenibilidad, equidad y respeto por el entorno natural contribuye a la conservación de los recursos, el fortalecimiento de la seguridad alimentaria y la mejora de la calidad de vida de las poblaciones rurales. Este enfoque promueve sistemas productivos diversificados, resilientes y socialmente justos.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png')
      .col-sm-12.col-lg-7
          p.mb-4 Este componente formativo tiene como propósito desarrollar en el aprendiz las capacidades necesarias para interpretar los fundamentos de la agroecología, reconocer la importancia de los saberes campesinos y aplicar la metodología Campesino a Campesino como herramienta para la construcción colectiva del conocimiento. A través del estudio teórico y la aplicación práctica, se busca fortalecer habilidades orientadas al análisis territorial, el trabajo comunitario y la implementación de prácticas agroecológicas.
          p.mb-0 De esta manera, el proceso formativo contribuye no solo al desarrollo de competencias técnicas y sociales, sino también a la formación de aprendices comprometidos con el desarrollo territorial sostenible, la valorización de los saberes locales y la promoción de modelos productivos que respondan a los desafíos actuales del sector agropecuario.


    .row.justify-content-center.align-items-center(data-aos="fade-right")       
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/J9vEDGIxoBg?si=Xgqq1S_VM4f57JDH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Optimizando el campo a través del conocimiento compartido


</template>

<script>
export default {
  name: 'Introduccion',
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
