<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La comprensión y apropiación de los fundamentos de la agroecología constituye un proceso esencial para el desarrollo de sistemas productivos sostenibles, resilientes y contextualizados. El reconocimiento de los saberes campesinos y su relación con el territorio permite identificar prácticas, conocimientos y dinámicas que favorecen el equilibrio entre producción agrícola, conservación de los recursos naturales y bienestar comunitario.

    p Los sistemas agroecológicos requieren una visión integral que articule los principios ecológicos con las dimensiones sociales, culturales y económicas del territorio. La interacción entre estos elementos determina la sostenibilidad de los sistemas productivos, por lo que es necesario promover procesos de aprendizaje que integren el conocimiento técnico con los saberes tradicionales, fortaleciendo así la toma de decisiones en contextos rurales.

    p Asimismo, la implementación de metodologías participativas, como la estrategia Campesino a Campesino (CAC), facilita la construcción colectiva del conocimiento, el intercambio de experiencias y la validación de prácticas agroecológicas en condiciones reales. Este enfoque permite fortalecer las capacidades locales, promover la innovación desde el territorio y consolidar procesos de aprendizaje horizontal.

    p Finalmente, este componente formativo contribuye al desarrollo de competencias que permiten al aprendiz interpretar, valorar y aplicar los principios de la agroecología en su contexto, integrando los saberes campesinos en la gestión territorial. De esta manera, se promueve el desarrollo rural sostenible, la autonomía de las comunidades y la implementación de prácticas productivas acordes con las necesidades actuales del sector agropecuario.


    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama titulado: Saberes agroecológicos y construcción colectiva del conocimiento territorial, que organiza cuatro componentes principales:  el primero; Fundamentos de la agroecología en el contexto territorial, con temas como concepto e importancia, principios, enfoque territorial, saberes campesinos y relación cultura-territorio-producción; el segundo, Territorio, ambiente y suelo, que incluye conocimiento campesino, territorio en sus dimensiones ecológica, cultural y productiva, agroecosistemas y ambiente, el suelo y normativa agropecuaria en Colombia; el tercero, Metodología campesino a campesino (CAC), que abarca concepto, objetivos y principios, roles, estrategias pedagógicas participativas y actividades; y por último,  Herramientas y procesos comunitarios, que comprende herramientas metodológicas, talleres participativos, diálogo de saberes, procesos comunitarios y gestión de la información.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
