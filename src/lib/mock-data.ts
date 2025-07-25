export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: 'Tops' | 'Pantalones' | 'Vestidos' | 'Abrigos' | 'Accesorios';
  dataAiHint: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  dataAiHint: string;
};

const products: Product[] = [
  {
    id: '1',
    name: 'Vestido de Verano Floral Vintage',
    description: 'Un hermoso y ligero vestido de verano vintage con un clásico estampado floral. Hecho de 100% algodón, es perfecto para los cálidos días de verano. El corte en A favorece a todo tipo de cuerpos y cuenta con un delicado lazo en la cintura.',
    price: 45.00,
    images: ['/Vestido-de-Verano-Floral-Vintage.png', '/Vestido-de-Verano-Floral-Vintage.png', '/Vestido-de-Verano-Floral-Vintage.png'],
    category: 'Vestidos',
    dataAiHint: 'vestido floral',
  },
  {
    id: '2',
    name: 'Chaqueta de Mezclilla Clásica',
    description: 'Una chaqueta de mezclilla atemporal con un tacto ligeramente desgastado para máxima comodidad. Esta chaqueta cuenta con botones de latón clásicos, dos bolsillos en el pecho y un lavado medio versátil que combina con todo.',
    price: 65.00,
    images: ['/Chaqueta-de-Mezclilla-Clásica.png', '/Chaqueta-de-Mezclilla-Clásica.png', '/Chaqueta-de-Mezclilla-Clásica.png'],
    category: 'Abrigos',
    dataAiHint: 'chaqueta mezclilla',
  },
  {
    id: '3',
    name: 'Pantalones de Lino de Tiro Alto',
    description: 'Pantalones de tiro alto elegantes y cómodos hechos de una mezcla de lino transpirable. El corte de pierna ancha proporciona una silueta moderna, mientras que el color beige neutro los convierte en un básico de armario versátil.',
    price: 55.00,
    images: ['/Pantalones-de-Lino-de-Tiro-Alto.png', '/Pantalones-de-Lino-de-Tiro-Alto.png'],
    category: 'Pantalones',
    dataAiHint: 'pantalones lino',
  },
  {
    id: '4',
    name: 'Blusa de Mezcla de Seda',
    description: 'Una lujosa y suave blusa de mezcla de seda en un precioso rosa pastel. Tiene un corte relajado, mangas largas con puños abotonados y un diseño simple y elegante que se puede vestir de forma formal o informal.',
    price: 48.00,
    images: ['/Blusa-de-Mezcla-de-Seda.png'],
    category: 'Tops',
    dataAiHint: 'blusa seda',
  },
  {
    id: '5',
    name: 'Bolso Cruzado de Cuero',
    description: 'Un bolso cruzado de cuero de alta calidad en un rico color coñac. Este bolso duradero y elegante tiene el tamaño perfecto para tus esenciales diarios, con una correa ajustable y múltiples compartimentos.',
    price: 75.00,
    images: ['/Bolso-Cruzado-de-Cuero.png', '/Bolso-Cruzado-de-Cuero.png'],
    category: 'Accesorios',
    dataAiHint: 'bolso cuero',
  },
  {
    id: '6',
    name: 'Falda Larga Bohemia',
    description: 'Falda larga bohemia, fluida y de espíritu libre, con un diseño escalonado y un delicado estampado de cachemira. La cintura elástica asegura un ajuste cómodo para llevar todo el día.',
    price: 42.00,
    images: ['/Falda Larga Bohemia.jpg'],
    category: 'Pantalones',
    dataAiHint: 'falda bohemia',
  },
  {
    id: '7',
    name: 'Suéter de Mezcla de Cachemira',
    description: 'Un suéter de mezcla de cachemira increíblemente suave y acogedor en un versátil color gris jaspeado. El clásico cuello redondo y los ribetes acanalados lo convierten en un imprescindible para el clima más fresco.',
    price: 85.00,
    images: ['/Suéter-de-Mezcla-de-Cachemira.png', '/Suéter-de-Mezcla-de-Cachemira.png'],
    category: 'Tops',
    dataAiHint: 'sueter cachemira',
  },
  {
    id: '8',
    name: 'Gabardina Clásica',
    description: 'Una gabardina sofisticada y atemporal. Este abrigo de doble botonadura es perfecto para el clima de entretiempo, con un cinturón en la cintura y tejido resistente al agua.',
    price: 120.00,
    images: ['/Gabardina Clásica.jpg', '/Gabardina Clásica.jpg', '/Gabardina Clásica.jpg'],
    category: 'Abrigos',
    dataAiHint: 'gabardina',
  },
];

const blogPosts: BlogPost[] = [
  {
    slug: 'el-arte-de-comprar-de-segunda-mano',
    title: 'El Arte de Comprar de Segunda Mano: Guía para Principiantes',
    date: '2024-05-15',
    author: 'Jane Doe',
    excerpt: 'Descubre los secretos para comprar de segunda mano con éxito, desde encontrar joyas ocultas hasta cuidar tu ropa usada.',
    content: '<p>Comprar de segunda mano es más que ir de compras; es una búsqueda del tesoro. En esta guía, te explicaremos todo lo que necesitas saber para convertirte en un comprador de segunda mano inteligente. Cubriremos cómo detectar telas de calidad, los mejores días para comprar y cómo limpiar y cuidar tus nuevos hallazgos.</p><p>Una de las habilidades clave en la compra de segunda mano es la paciencia. No siempre encontrarás lo que buscas en tu primer intento, pero la recompensa de encontrar esa pieza perfecta y única bien vale la pena la espera. Mantén la mente abierta y no temas mirar en secciones que normalmente no explorarías.</p>',
    image: '/El Arte de Comprar de Segunda Mano: Guía para Principiantes.jpg',
    dataAiHint: 'ropa segunda mano'
  },
  {
    slug: 'por-que-la-segunda-mano-es-el-futuro',
    title: 'Por Qué la Segunda Mano es el Futuro de la Moda Sostenible',
    date: '2024-04-22',
    author: 'John Smith',
    excerpt: 'Aprende cómo elegir ropa de segunda mano ayuda al medio ambiente y promueve una economía de la moda más circular.',
    content: '<p>La industria de la moda es una de las más contaminantes del mundo. Al elegir comprar de segunda mano, participas activamente en un modelo más sostenible. Extiendes la vida de una prenda, reduces los residuos textiles y disminuyes la demanda de nueva producción, lo que ahorra agua, energía y recursos.</p><p>En Chorus Echo, estamos orgullosos de ser parte de este movimiento. Cada pieza que nos compras es un paso hacia un futuro más consciente y con estilo.</p>',
    image: '/Por Qué la Segunda Mano es el Futuro de la Moda Sostenible.jpg',
    dataAiHint: 'moda sostenible'
  },
  {
    slug: '5-maneras-de-combinar-una-chaqueta-de-mezclilla',
    title: '5 Maneras de Combinar una Chaqueta de Mezclilla Clásica en Cualquier Estación',
    date: '2024-03-10',
    author: 'Emily White',
    excerpt: 'La chaqueta de mezclilla es un básico atemporal. Aquí tienes cinco formas creativas de llevarla durante todo el año, desde vestidos de verano hasta capas de invierno.',
    content: '<p>Una chaqueta de mezclilla es posiblemente una de las piezas más versátiles que puedes tener. Aquí están nuestras 5 mejores maneras de combinarla:</p><ol><li><strong>Sobre un vestido de verano:</strong> La forma perfecta de adaptar un vestido de verano a las noches más frescas.</li><li><strong>Con vaqueros negros:</strong> Un "esmoquin canadiense" clásico con un toque moderno.</li><li><strong>En capas bajo un abrigo:</strong> Para más calidez y estilo en invierno.</li><li><strong>Con una falda midi:</strong> Crea una silueta elegante y equilibrada.</li><li><strong>Atada a la cintura:</strong> Un look casual inspirado en los 90 que es a la vez elegante y práctico.</li></ol>',
    image: '/5-Maneras-de-Combinar-una-Chaqueta-de-Mezclilla-Clásica-en-Cualquier-Estación.png',
    dataAiHint: 'moda chaqueta mezclilla'
  },
];


export function getProducts() {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
