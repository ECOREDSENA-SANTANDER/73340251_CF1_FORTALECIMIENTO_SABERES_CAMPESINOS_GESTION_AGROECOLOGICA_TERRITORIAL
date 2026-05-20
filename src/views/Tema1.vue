<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de la agroecología en el contexto territorial

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Concepto e importancia de la agroecología

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Principios de la agroecología

      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Enfoque territorial de la agroecología

      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Saberes y conocimientos campesinos

      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.5 Relación cultura – territorio - producción

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
