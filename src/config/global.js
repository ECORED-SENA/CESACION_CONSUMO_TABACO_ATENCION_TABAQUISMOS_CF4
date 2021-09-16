export default {
  global: {
    componenteFormativo: 'Consejería para la cesación del consumo de tabaco',
    descripcionCurso:
      'El contenido de este componente formativo permitirá reconocer y aplicar la consejería breve como una de las intervenciones más costo- efectivas para el tratamiento del tabaquismo y que puede ser aplicado en pacientes motivados y no motivados.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Intervención para el paciente motivado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Intervenciones básicas',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Intervenciones intermedias',
            hash: 't1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Intervención para el paciente no motivado para dejar de fumar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Entrevista motivacional',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Esquema de las 5Rs',
            hash: 't2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Recomendaciones de intervención para grupos especiales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Intervenciones breves para adolescentes',
            hash: 't3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Intervenciones breves para gestantes',
            hash: 't3_2',
          },
        ],
      },
    ],
    subMenu: [
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Fiore, M. C., Jaén, C. R., Baker, T. B., & Bailey, W. C. (2008). Treating tobacco use and dependence: 2008 update. Clinical practice guideline. U.S. Department of Health and Human Services. Public Health Service. ',
      link:
        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4465757/pdf/nihms59469.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social de Colombia. (2020). Directrices para desarrollar programas para la cesación del consumo de tabaco y atención del tabaquismo. MinSalud. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-cesacion-consumo-atencion-tabaco.pdf',
    },
    {
      referencia:
        'Ministerio de Salud Pública de la República Oriental del Uruguay. (2009). Guía nacional para abordaje del tabaquismo. Ministerio de Salud Pública de la República Oriental del Uruguay. ',
      link:
        'https://www.gub.uy/ministerio-salud-publica/comunicacion/publicaciones/guia-nacional-para-el-abordaje-del-tabaquismo-uruguay-2009',
    },
    {
      referencia:
        'Rollnick, S., & Miller, W. R. (1995). What is Motivational Interviewing?. Behavioural and Cognitive Psychotherapy. Cambridge University Press. ',
      link: 'https://doi.org/10.1017/S135246580001643X',
    },
  ],
  glosario: [
    {
      termino: 'Consejería o intervención breve',
      significado:
        'actividad comunicativa que promueve tanto el diálogo entre el fumador y el profesional de la salud como el desarrollo de habilidades para que el fumador suspenda el consumo de tabaco (Ministerio de Salud y Protección Social de Colombia, 2020).',
    },
    {
      termino: 'Intervención breve de las 5 “Aes”',
      significado:
        'actividad comunicativa entre el profesional de la salud y la persona fumadora en la cual se comparte información clave que le va a permitir al sujeto motivado buscar ayuda específica para recibir un plan de tratamiento y seguimiento que le permita dejar de fumar (Ministerio de Salud y Protección Social de Colombia, 2020).',
    },
    {
      termino: 'Entrevista motivacional',
      significado:
        'modalidad de consejería en la cual se utiliza un enfoque colaborativo, centrado en el paciente para guiar a la persona a encontrar por sí misma una fuerte motivación para el cambio (Ministerio de Salud y Protección Social de Colombia, 2020).',
    },
    {
      termino: 'Intervenciones breves en adolescentes',
      significado:
        'actividad comunicativa entre el profesional de la salud y el adolescente fumador en la cual se comparte información clave que le va a permitir al sujeto estructurar un plan formal para dejar de fumar (Ministerio de Salud y Protección Social de Colombia, 2020).',
    },
    {
      termino: 'Intervenciones breves en mujeres embarazadas',
      significado:
        'ctividad comunicativa entre el profesional de la salud y la gestante que fuma, en la cual se comparte información clave que le va a permitir al sujeto estructurar un plan formal para dejar de fumar (Ministerio de Salud y Protección Social de Colombia, 2020).',
    },
  ],
  complementario: [
    {
      texto:
        'Fiore, M. C., Bailey, W. C., & Cohen, S.J. (2015). A Clinical Practice Guideline for Treating Tobacco Use and Dependence: 2008 Update: A U.S. Public Health Service Report.',
      tipo: 'Libro (texto en inglés)',
      link:
        'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4465757/pdf/nihms59469.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social de Colombia (2020). Directrices para desarrollar programas para la cesación del consumo de tabaco y atención del tabaquismo.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-cesacion-consumo-atencion-tabaco.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelci Becerra',
        cargo: 'Profesional especializado',
        centro:
          'Ministerio de Salud - Sociedad Colombiana de Medicina Familiar',
      },
      {
        nombre: 'Yolanda Sandoval',
        cargo: 'Profesional especializado',
        centro:
          'Ministerio de Salud - Subdirección de enfermedades no transmisibles',
      },
      {
        nombre: 'Giovanna Andrea',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional - Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Oscar Julian Marquez Sanabria'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },

      {
        nombre: ['Luis Gabriel Urueta Alvarez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Adriana Marcela Suárez Eljure'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Ángela María Maldonado Jaime'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Arnulfo Beltrán Mojica'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Camilo Villamizar Lizcano'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Carlos Eduardo Garavito Parada'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Gilberto Junior Rodriguez Rodriguez'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Jessica Moreno Realpe'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['José Jaime Luis Tang Pinzón'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Lady Adriana Ariza Luque'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Lady Adriana Ariza Luque'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Laura Gisselle Murcia Pardo'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Lina Marcela Pérez Manchego'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Ludwyng Corzo García'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['María Carolina Tamayo López '],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Wilson Andrés Arenales Caceres'],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: ['Zuleidy Maria Ruiz Torres'],
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
