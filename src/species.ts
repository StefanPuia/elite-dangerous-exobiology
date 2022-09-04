import { SALES_VALUE, GRAVITY, Species, DISTANCE, TEMPERATURE } from '.';

export const species: Species[] = [
  {
    genus: 'Aleoida',
    name: 'Arcus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T175K_180K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Aleoida',
    name: 'Coronamus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T180K_190K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Aleoida',
    name: 'Gravis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T190K_195K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Aleoida',
    name: 'Laminiae',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['High Metal Content', 'Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Aleoida',
    name: 'Spica',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Acies',
    conditions: {
      atmosphere: ['Neon'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Alcyoneum',
    conditions: {
      atmosphere: ['Ammonia'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Aurasus',
    conditions: {
      atmosphere: ['Carbon Dioxide'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Bullaris',
    conditions: {
      atmosphere: ['Methane'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Cerbrus',
    conditions: {
      atmosphere: ['Water', 'Sulfur Dioxide'],
      planetType: ['Rocky', 'High Metal Content', 'Icy', 'Rocky Ice'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Informem',
    conditions: {
      atmosphere: ['Nitrogen'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Bacterium',
    name: 'Nebulus',
    conditions: {
      atmosphere: ['Helium'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Omentum',
    conditions: {
      volcanism: ['Nitrogen', 'Ammonia'],
      atmosphere: ['Neon'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Scopulum',
    conditions: {
      volcanism: ['Carbon', 'Methane'],
      atmosphere: ['Neon'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Tela',
    conditions: {
      volcanism: ['Helium', 'Iron', 'Silicate', 'Ammonia'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Verrata',
    conditions: {
      volcanism: ['Water'],
      atmosphere: ['Neon'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Vesicula',
    conditions: {
      atmosphere: ['Argon'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Bacterium',
    name: 'Volu',
    conditions: {
      atmosphere: ['Oxygen'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Cactoida',
    name: 'Cortexum',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T180K_195K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Cactoida',
    name: 'Lapis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Cactoida',
    name: 'Peperatis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Cactoida',
    name: 'Pullulanta',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T180K_195K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Cactoida',
    name: 'Vermis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Water'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Clypeus',
    name: 'Lacrimam',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide', 'Water'],
      temperature: [TEMPERATURE.T_GT_190K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Clypeus',
    name: 'Margaritus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide', 'Water'],
      temperature: [TEMPERATURE.T_GT_190K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Clypeus',
    name: 'Speculumi',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide', 'Water'],
      temperature: [TEMPERATURE.T_GT_190K],
      planetType: ['Rocky', 'High Metal Content'],
      distance: [DISTANCE.MORE_THAN_2_5KLS],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Concha',
    name: 'Aureolas',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Concha',
    name: 'Biconcavis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Nitrogen'],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Concha',
    name: 'Labiata',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T_LT_190K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Concha',
    name: 'Renibus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide', 'Water'],
      temperature: [TEMPERATURE.T180K_195K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Electricae',
    name: 'Pluma',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Helium', 'Neon', 'Argon'],
      star: [],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Electricae',
    name: 'Radialem',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Helium', 'Neon', 'Argon'],
      star: ['Nebulae'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fonticulua',
    name: 'Campestris',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Argon', 'Icy', 'Rocky Ice'],
      atmosphere: ['Argon'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fonticulua',
    name: 'Digitos',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Icy', 'Rocky Ice'],
      atmosphere: ['Methane'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fonticulua',
    name: 'Fluctus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Icy', 'Rocky Ice'],
      atmosphere: ['Oxygen'],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Fonticulua',
    name: 'Lapida',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Icy', 'Rocky Ice'],
      atmosphere: ['Nitrogen'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fonticulua',
    name: 'Segmentatus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Neon'],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Fonticulua',
    name: 'Upupam',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Argon Rich', 'Icy', 'Rocky Ice'],
      atmosphere: ['Argon'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Frutexa',
    name: 'Acus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Frutexa',
    name: 'Collum',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Sulfur Dioxide'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Frutexa',
    name: 'Fera',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Frutexa',
    name: 'Flabellum',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Frutexa',
    name: 'Flammasis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Frutexa',
    name: 'Metallic',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      planetType: ['High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Frutexa',
    name: 'Metallicum',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Frutexa',
    name: 'Sponsae',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Water'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fumerola',
    name: 'Aquatis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Water'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fumerola',
    name: 'Carbosis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Carbon', 'Methane'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fumerola',
    name: 'Extremus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Silicate', 'Iron', 'Rocky'],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Fumerola',
    name: 'Nitris',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Nitrogen', 'Ammonia'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Fungoida',
    name: 'Bullarum',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Argon'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fungoida',
    name: 'Gelata',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide', 'Water'],
      temperature: [TEMPERATURE.T180K_195K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fungoida',
    name: 'Setisis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia', 'Methane'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Fungoida',
    name: 'Stabitis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide', 'Water'],
      temperature: [TEMPERATURE.T180K_195K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Osseus',
    name: 'Cornibus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T180K_195K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Osseus',
    name: 'Discus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Water'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Osseus',
    name: 'Fractus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T180K_190K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Osseus',
    name: 'Pellebantus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T190K_195K],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Osseus',
    name: 'Pumice',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Argon', 'Methane'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Osseus',
    name: 'Spiralis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Recepta',
    name: 'Conditivus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Sulfur Dioxide'],
      planetType: ['Icy', 'Rocky Ice'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Recepta',
    name: 'Deltahedronix',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Sulfur Dioxide'],
      planetType: ['Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Recepta',
    name: 'Umbrux',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Sulfur Dioxide'],
      planetType: ['Icy', 'Rocky Ice', 'Rocky', 'High Metal Content'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Stratum',
    name: 'Araneamus',
    conditions: {
      atmosphere: ['Sulfur Dioxide'],
      temperature: [TEMPERATURE.T_GT_165K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Stratum',
    name: 'Cucumisis',
    conditions: {
      atmosphere: ['Sulfur Dioxide', 'Carbon Dioxide'],
      temperature: [TEMPERATURE.T_GT_190K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Stratum',
    name: 'Excutitus',
    conditions: {
      atmosphere: ['Carbon Dioxide', 'Sulfur Dioxide'],
      temperature: [TEMPERATURE.T165K_190K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Stratum',
    name: 'Frigus',
    conditions: {
      atmosphere: ['Sulfur Dioxide', 'Carbon Dioxide'],
      temperature: [TEMPERATURE.T_GT_190K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Stratum',
    name: 'Laminamus',
    conditions: {
      atmosphere: ['Ammonia'],
      temperature: [TEMPERATURE.T_GT_165K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Stratum',
    name: 'Limaxus',
    conditions: {
      atmosphere: ['Carbon Dioxide', 'Sulfur Dioxide'],
      temperature: [TEMPERATURE.T165K_190K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Stratum',
    name: 'Paleas',
    conditions: {
      atmosphere: ['Carbon Dioxide', 'Ammonia', 'Water'],
      temperature: [TEMPERATURE.T_GT_165K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Stratum',
    name: 'Tectonicas',
    conditions: {
      atmosphere: ['Oxygen', 'Ammonia', 'Carbon Dioxide', 'Water', 'Sulfur Dioxide'],
      temperature: [TEMPERATURE.T_GT_165K],
      planetType: ['High Metal Content'],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Tubus',
    name: 'Cavas',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_015G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T160K_190K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tubus',
    name: 'Compagibus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_015G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T160K_190K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tubus',
    name: 'Conifer',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_015G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T160K_190K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tubus',
    name: 'Rosarium',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_015G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Tubus',
    name: 'Sororibus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_015G],
      atmosphere: ['Ammonia', 'Carbon Dioxide'],
      temperature: [TEMPERATURE.T160K_190K],
      planetType: ['High Metal Content'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Tussock',
    name: 'Albata',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T175K_180K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Capillum',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      volcanism: ['Rocky'],
      atmosphere: ['Argon', 'Methane'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Tussock',
    name: 'Caputus',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T180K_190K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Catena',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Cultro',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Divisa',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Ammonia'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Ignis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T160K_170K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Pennata',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T145K_155K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Pennatis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Propagito',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Serrati',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T170K_175K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Stigmasis',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Sulfur Dioxide'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.HIGH],
  },
  {
    genus: 'Tussock',
    name: 'Triticum',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T190K_195K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
  {
    genus: 'Tussock',
    name: 'Ventusa',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Carbon Dioxide'],
      temperature: [TEMPERATURE.T155K_160K],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.LOW],
  },
  {
    genus: 'Tussock',
    name: 'Virgam',
    conditions: {
      gravity: [GRAVITY.LESS_THAN_027G],
      atmosphere: ['Water'],
      planetType: ['Rocky'],
    },
    salesValue: [SALES_VALUE.MEDIUM],
  },
];
