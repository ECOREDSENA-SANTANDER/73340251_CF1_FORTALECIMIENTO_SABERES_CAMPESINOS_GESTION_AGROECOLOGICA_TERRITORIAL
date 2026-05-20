export default {
  global: {
    Name: 'Saberes agroecológicos y construcción colectiva del conocimiento territorial',
    Description:
      'Este componente formativo orienta la comprensión de los principios de la agroecología en relación con el territorio, integrando saberes campesinos y promoviendo la construcción colectiva del conocimiento mediante la metodología Campesino a Campesino, fortaleciendo procesos de aprendizaje participativo y desarrollo agroecológico contextualizado.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la agroecología en el contexto territorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto e importancia de la agroecología',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios de la agroecología',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Enfoque territorial de la agroecología',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Saberes y conocimientos campesinos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Relación cultura – territorio - producción',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Territorio, ambiente y suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conocimiento campesino',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Territorio (dimensión ecológica, cultural y productiva)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Agroecosistemas y ambiente',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'El suelo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Normativa agropecuaria en Colombia',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Metodología Campesino a Campesino – CAC',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto, objetivos y principios',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Roles',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estrategias pedagógicas participativas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Actividades',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas y procesos comunitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Herramientas metodológicas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Talleres participativos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Diálogo de saberes',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Procesos comunitarios',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Gestión de la información',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje horizontal',
      significado:
        'proceso educativo basado en la igualdad, donde todos los participantes enseñan y aprenden mutuamente.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'variedad de especies vegetales, animales y microorganismos presentes en un sistema productivo.',
    },
    {
      termino: 'Campesino  campesino (cac)',
      significado:
        'metodología participativa basada en el intercambio de conocimientos entre productores.',
    },
    {
      termino: 'Conocimiento ancestral',
      significado:
        'saberes tradicionales transmitidos de generación en generación dentro de las comunidades rurales.',
    },
    {
      termino: 'Construcción colectiva',
      significado:
        'proceso mediante el cual un grupo genera conocimiento de manera conjunta y participativa.',
    },
    {
      termino: 'Diálogo de saberes',
      significado:
        'intercambio entre conocimientos tradicionales y técnicos para generar soluciones integrales.',
    },
    {
      termino: 'Diversificación',
      significado:
        'práctica de incorporar diferentes cultivos o especies para mejorar la sostenibilidad.',
    },
    {
      termino: 'Enfoque territorial',
      significado:
        'perspectiva que considera las características sociales, culturales y ambientales de un territorio.',
    },
    {
      termino: 'Escuelas de campo',
      significado:
        'espacios de aprendizaje práctico donde los productores experimentan directamente en sus parcelas.',
    },
    {
      termino: 'Intercambio de experiencias',
      significado:
        'actividad donde los participantes comparten prácticas, conocimientos y resultados.',
    },
    {
      termino: 'Mapa parlante',
      significado:
        'es una herramienta participativa utilizada en procesos comunitarios para representar de manera gráfica y colectiva un territorio, incorporando la percepción, conocimientos y experiencias de sus habitantes.',
    },
    {
      termino: 'Participación comunitaria',
      significado:
        'involucramiento activo de la comunidad en procesos de toma de decisiones y aprendizaje.',
    },
    {
      termino: 'Resiliencia',
      significado:
        'capacidad de un sistema para adaptarse y recuperarse frente a cambios o dificultades.',
    },
    {
      termino: 'Saberes campesinos',
      significado:
        'conjunto de conocimientos prácticos desarrollados por las comunidades rurales.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de mantener procesos productivos en equilibrio con el ambiente y la sociedad a largo plazo.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
