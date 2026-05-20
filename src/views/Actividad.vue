<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Saberes agroecológicos y construcción colectiva del conocimiento territorial',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar el nivel de comprensión de los saberes agroecológicos y construcción colectiva del conocimiento territorial, promoviendo la valoración del conocimiento local y su relación con los sistemas productivos.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la agroecología?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un método de agricultura industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un enfoque integral que relaciona producción, ambiente y sociedad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una técnica de fertilización química.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un sistema de monocultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 2,
          texto: '¿Cuál es uno de los principios de la agroecología?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso intensivo de agroquímicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diversificación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Monocultivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción masiva',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 3,
          texto: 'La diversificación en agroecología busca:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir especies cultivadas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar el uso de fertilizantes',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar biodiversidad',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incorporar variedad de especies',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 4,
          texto: 'El reciclaje de nutrientes consiste en:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprar fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Quemar residuos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar pesticidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reutilizar residuos orgánicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 5,
          texto: 'Las sinergias biológicas permiten:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Relaciones beneficiosas entre especies.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar plagas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 6,
          texto: 'La resiliencia en agroecología se refiere a:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar producción únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Adaptarse a cambios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar diversidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar más químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 7,
          texto: 'El enfoque territorial permite:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar modelos iguales en todos lados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar cultura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir participación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Adaptar prácticas al contexto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 8,
          texto: 'Los saberes campesinos son:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Técnicos exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Empíricos y tradicionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Científicos únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 9,
          texto: 'Un ejemplo de saber campesino es:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calendarios lunares.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fertilizantes químicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso de drones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Maquinaria pesada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 10,
          texto: 'La relación cultura-territorio-producción implica:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Separar cultura de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Integrar identidad y prácticas productivas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar el territorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar solo tecnología.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 11,
          texto: 'La metodología CAC significa:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Control agrícola convencional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Campesino a campesino.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cultivo agroindustrial continuo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ciencia aplicada comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 12,
          texto: 'La CAC se basa en:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aprendizaje horizontal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Enseñanza vertical.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso de tecnología avanzada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción industrial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 13,
          texto: 'El diagnóstico participativo permite:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar participación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Imponer decisiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar necesidades del territorio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 14,
          texto: 'Los líderes campesinos en la CAC son:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Personas externas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitadores del aprendizaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Técnicos únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Empresarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 15,
          texto: 'El intercambio de experiencias permite:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aprendizaje individual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar participación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compartir conocimientos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir interacción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 16,
          texto: 'La experimentación en CAC consiste en:',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo teoría.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar prácticas en campo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Comprar insumos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar cambios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 17,
          texto: 'La evaluación colectiva busca:',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluar individualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar resultados en grupo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar opiniones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Calificar únicamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 18,
          texto: 'La replicación en CAC implica:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Guardar información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Limitar aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar cambios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Difundir conocimientos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 19,
          texto: 'El diálogo de saberes consiste en:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Integrar saberes tradicionales y técnicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Imponer conocimiento técnico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar campesinos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar cultura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
        {
          id: 20,
          texto: 'Una estrategia pedagógica participativa es:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clase magistral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escuela de campo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Conferencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Examen escrito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los saberes agroecológicos y construcción colectiva del conocimiento territorial.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
