export type ServiceItem = {
    id: string;
    title: string;
    image: string;
    // icon: string;
    description: string;
    color: string;
    details: {
      title: string;
      items: string[];
    }[];
  };
  
  export const SERVICES: ServiceItem[] = [
    {
      id: "civil",
      title: "Civil",
      image: "https://rfeng.biz/wp-content/uploads/2022/11/civil-engineer-banner-1024x732.jpg",
      color: "#3b82f6", // blue
      description:
        "Proyectos de infraestructura civil para diversos subsectores, con reconocida seriedad y compromiso.",
      details: [
        {
          title: "Proyectos Viales y de Infraestructura",
          items: [
            "Proyectos viales",
            "Defensas ribereñas",
            "Presas de relaves",
            "Diques",
            "Trochas carrozables",
            "Caminos vecinales",
            "Rehabilitación de redes de agua y alcantarillado",
          ],
        },
        {
          title: "Proyectos Urbanísticos y de Edificaciones",
          items: [
            "Proyectos urbanísticos",
            "Proyectos de edificaciones urbanas",
            "Regularización de edificaciones",
            "Declaraciones de fábrica",
            "Independizaciones",
            "Saneamiento físico y legal de bienes inmuebles",
          ],
        },
      ],
    },
    {
      id: "electricidad",
      title: "Electricidad",
      image: "https://media.ambito.com/p/7b249707b24035c27d304a8aad59217f/adjuntos/239/imagenes/040/455/0040455846/electricidad.png",
      color: "#f59e0b", // amber
      description:
        "Desarrollo de proyectos eléctricos y electromecánicos, desde instalaciones de alta tensión hasta sistemas de protección.",
      details: [
        {
          title: "Proyectos Eléctricos y Electromecánicos",
          items: [
            "Proyectos eléctricos en alta, media y baja tensión",
            "Proyectos electromecánicos",
            "Diseño, supervisión y construcción de infraestructura eléctrica",
            "Montaje de transformadores",
            "Sistemas de protección catódica",
          ],
        },
      ],
    },
    {
      id: "mecanica",
      title: "Mecanica",
      image: "https://tse2.mm.bing.net/th?id=OIP.g2yu4lV4pcRW6fJcBVaA3QHaEK&pid=Api&P=0&h=180",
      color: "#10b981", // emerald
      description: "Soluciones integrales en ingeniería mecánica para diversos sectores industriales.",
      details: [
        {
          title: "Proyectos Mecánicos",
          items: [
            "Diseño y fabricación de estructuras metálicas",
            "Sistemas de ventilación y climatización",
            "Instalaciones de gas y combustibles",
            "Mantenimiento de equipos industriales",
            "Automatización de procesos industriales",
          ],
        },
        {
          title: "Ingeniería y Arquitectura",
          items: [
            "Estudios de ingeniería y arquitectura",
            "Evaluación de proyectos de inversión",
            "Asesoría en factibilidad de proyectos de inversión",
            "Proyectos de geología y geotecnia",
            "Ensayos de laboratorio para mecánica de suelos",
          ],
        },
      ],
    },
    {
      id: "telecomunicaciones",
      title: "Telecomunicaciones",
      image: "https://www.arqhys.com/wp-content/uploads/2017/09/telecomunicaciones_366.jpg",
      color: "#8b5cf6", // violet
      description:
        "Proyectos de telecomunicaciones con tecnologías avanzadas, desde redes de datos hasta sistemas inalámbricos.",
      details: [
        {
          title: "Proyectos de Telecomunicaciones",
          items: [
            "Diseño e implementación de redes de datos",
            "Sistemas de comunicación inalámbrica",
            "Instalación de fibra óptica",
            "Sistemas de seguridad y vigilancia",
            "Centros de datos y servidores",
          ],
        },
        {
          title: "Proyectos Informáticos y de Inteligencia Artificial",
          items: [
            "Proyectos informáticos",
            "Proyectos de inteligencia artificial",
            "Desarrollo de software a medida",
            "Implementación de sistemas de gestión",
            "Soluciones de automatización",
          ],
        },
      ],
    },
  ]
  