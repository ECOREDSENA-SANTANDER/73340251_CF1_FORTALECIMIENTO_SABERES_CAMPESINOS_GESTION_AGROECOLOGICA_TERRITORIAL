<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas y procesos comunitarios

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Herramientas metodológicas

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Talleres participativos

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Diálogo de saberes

    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.4 Procesos comunitarios

    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.5 Gestión de la información

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

<style lang="sass"></style>
