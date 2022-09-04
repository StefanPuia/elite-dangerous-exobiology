import {
  SALES_VALUE,
  GRAVITY,
  Species,
  DISTANCE,
  TEMPERATURE,
  Atmosphere,
  PlanetType,
  Volcanism,
  StarCondition,
} from './consts.mjs';

export const species: Species[] = [
  {
    genus: 'Aleoida',
    name: 'Arcus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T175K_180K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Aleoida',
    name: 'Coronamus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T180K_190K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Aleoida',
    name: 'Gravis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T190K_195K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Aleoida',
    name: 'Laminiae',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.HighMetalContent, PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Aleoida',
    name: 'Spica',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Acies',
    conditions: {
      atmosphere: [Atmosphere.Neon],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Alcyoneum',
    conditions: {
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Aurasus',
    conditions: {
      atmosphere: [Atmosphere.CarbonDioxide],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Bullaris',
    conditions: {
      atmosphere: [Atmosphere.Methane],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Cerbrus',
    conditions: {
      atmosphere: [Atmosphere.Water, Atmosphere.SulfurDioxide],
      planetType: [
        PlanetType.Rocky,
        PlanetType.HighMetalContent,
        PlanetType.Icy,
        PlanetType.RockyIce,
      ],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Informem',
    conditions: {
      atmosphere: [Atmosphere.Nitrogen],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Bacterium',
    name: 'Nebulus',
    conditions: {
      atmosphere: [Atmosphere.Helium],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Omentum',
    conditions: {
      volcanism: [Volcanism.Nitrogen, Volcanism.Ammonia],
      atmosphere: [Atmosphere.Neon],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Scopulum',
    conditions: {
      volcanism: [Volcanism.Carbon, Volcanism.Methane],
      atmosphere: [Atmosphere.Neon],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Tela',
    conditions: {
      volcanism: [Volcanism.Helium, Volcanism.Iron, Volcanism.Silicate, Volcanism.Ammonia],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Verrata',
    conditions: {
      volcanism: [Volcanism.Water],
      atmosphere: [Atmosphere.Neon],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Vesicula',
    conditions: {
      atmosphere: [Atmosphere.Argon],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Bacterium',
    name: 'Volu',
    conditions: {
      atmosphere: [Atmosphere.Oxygen],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Cactoida',
    name: 'Cortexum',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T180K_195K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Cactoida',
    name: 'Lapis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Cactoida',
    name: 'Peperatis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Cactoida',
    name: 'Pullulanta',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T180K_195K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Cactoida',
    name: 'Vermis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Water],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Clypeus',
    name: 'Lacrimam',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide, Atmosphere.Water],
      temperature: TEMPERATURE.T_GT_190K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Clypeus',
    name: 'Margaritus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide, Atmosphere.Water],
      temperature: TEMPERATURE.T_GT_190K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Clypeus',
    name: 'Speculumi',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide, Atmosphere.Water],
      temperature: TEMPERATURE.T_GT_190K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
      distance: DISTANCE.MORE_THAN_2_5KLS,
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Concha',
    name: 'Aureolas',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Concha',
    name: 'Biconcavis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Nitrogen],
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Concha',
    name: 'Labiata',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T_LT_190K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Concha',
    name: 'Renibus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide, Atmosphere.Water],
      temperature: TEMPERATURE.T180K_195K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Electricae',
    name: 'Pluma',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Helium, Atmosphere.Neon, Atmosphere.Argon],
      star: [StarCondition.AVPlus],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Electricae',
    name: 'Radialem',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Helium, Atmosphere.Neon, Atmosphere.Argon],
      star: [StarCondition.Nebulae],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fonticulua',
    name: 'Campestris',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.Argon, Volcanism.Icy, Volcanism.RockyIce],
      atmosphere: [Atmosphere.Argon],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fonticulua',
    name: 'Digitos',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.Icy, Volcanism.RockyIce],
      atmosphere: [Atmosphere.Methane],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fonticulua',
    name: 'Fluctus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.Icy, Volcanism.RockyIce],
      atmosphere: [Atmosphere.Oxygen],
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Fonticulua',
    name: 'Lapida',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.Icy, Volcanism.RockyIce],
      atmosphere: [Atmosphere.Nitrogen],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fonticulua',
    name: 'Segmentatus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Neon],
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Fonticulua',
    name: 'Upupam',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.ArgonRich, Volcanism.Icy, Volcanism.RockyIce],
      atmosphere: [Atmosphere.Argon],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Frutexa',
    name: 'Acus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Frutexa',
    name: 'Collum',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.SulfurDioxide],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Frutexa',
    name: 'Fera',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Frutexa',
    name: 'Flabellum',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Frutexa',
    name: 'Flammasis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Frutexa',
    name: 'Metallic',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      planetType: [PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Frutexa',
    name: 'Metallicum',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Frutexa',
    name: 'Sponsae',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Water],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fumerola',
    name: 'Aquatis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.Water],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fumerola',
    name: 'Carbosis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.Carbon, Volcanism.Methane],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fumerola',
    name: 'Extremus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.Silicate, Volcanism.Iron, Volcanism.Rocky],
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Fumerola',
    name: 'Nitris',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.Nitrogen, Volcanism.Ammonia],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Fungoida',
    name: 'Bullarum',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Argon],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fungoida',
    name: 'Gelata',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide, Atmosphere.Water],
      temperature: TEMPERATURE.T180K_195K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fungoida',
    name: 'Setisis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia, Atmosphere.Methane],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Fungoida',
    name: 'Stabitis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide, Atmosphere.Water],
      temperature: TEMPERATURE.T180K_195K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Osseus',
    name: 'Cornibus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T180K_195K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Osseus',
    name: 'Discus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Water],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Osseus',
    name: 'Fractus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T180K_190K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Osseus',
    name: 'Pellebantus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T190K_195K,
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Osseus',
    name: 'Pumice',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Argon, Atmosphere.Methane],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Osseus',
    name: 'Spiralis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Recepta',
    name: 'Conditivus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.SulfurDioxide],
      planetType: [PlanetType.Icy, PlanetType.RockyIce],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Recepta',
    name: 'Deltahedronix',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.SulfurDioxide],
      planetType: [PlanetType.Rocky, PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Recepta',
    name: 'Umbrux',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.SulfurDioxide],
      planetType: [
        PlanetType.Icy,
        PlanetType.RockyIce,
        PlanetType.Rocky,
        PlanetType.HighMetalContent,
      ],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Stratum',
    name: 'Araneamus',
    conditions: {
      atmosphere: [Atmosphere.SulfurDioxide],
      temperature: TEMPERATURE.T_GT_165K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Stratum',
    name: 'Cucumisis',
    conditions: {
      atmosphere: [Atmosphere.SulfurDioxide, Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T_GT_190K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Stratum',
    name: 'Excutitus',
    conditions: {
      atmosphere: [Atmosphere.CarbonDioxide, Atmosphere.SulfurDioxide],
      temperature: TEMPERATURE.T165K_190K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Stratum',
    name: 'Frigus',
    conditions: {
      atmosphere: [Atmosphere.SulfurDioxide, Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T_GT_190K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Stratum',
    name: 'Laminamus',
    conditions: {
      atmosphere: [Atmosphere.Ammonia],
      temperature: TEMPERATURE.T_GT_165K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Stratum',
    name: 'Limaxus',
    conditions: {
      atmosphere: [Atmosphere.CarbonDioxide, Atmosphere.SulfurDioxide],
      temperature: TEMPERATURE.T165K_190K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Stratum',
    name: 'Paleas',
    conditions: {
      atmosphere: [Atmosphere.CarbonDioxide, Atmosphere.Ammonia, Atmosphere.Water],
      temperature: TEMPERATURE.T_GT_165K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Stratum',
    name: 'Tectonicas',
    conditions: {
      atmosphere: [
        Atmosphere.Oxygen,
        Atmosphere.Ammonia,
        Atmosphere.CarbonDioxide,
        Atmosphere.Water,
        Atmosphere.SulfurDioxide,
      ],
      temperature: TEMPERATURE.T_GT_165K,
      planetType: [PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Tubus',
    name: 'Cavas',
    conditions: {
      gravity: GRAVITY.LESS_THAN_015G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T160K_190K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tubus',
    name: 'Compagibus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_015G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T160K_190K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tubus',
    name: 'Conifer',
    conditions: {
      gravity: GRAVITY.LESS_THAN_015G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T160K_190K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tubus',
    name: 'Rosarium',
    conditions: {
      gravity: GRAVITY.LESS_THAN_015G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Tubus',
    name: 'Sororibus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_015G,
      atmosphere: [Atmosphere.Ammonia, Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T160K_190K,
      planetType: [PlanetType.HighMetalContent],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Tussock',
    name: 'Albata',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T175K_180K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Capillum',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      volcanism: [Volcanism.Rocky],
      atmosphere: [Atmosphere.Argon, Atmosphere.Methane],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Tussock',
    name: 'Caputus',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T180K_190K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Catena',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Cultro',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Divisa',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Ammonia],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Ignis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T160K_170K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Pennata',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T145K_155K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Pennatis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Propagito',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Serrati',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T170K_175K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Stigmasis',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.SulfurDioxide],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.HIGH,
  },
  {
    genus: 'Tussock',
    name: 'Triticum',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T190K_195K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
  {
    genus: 'Tussock',
    name: 'Ventusa',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.CarbonDioxide],
      temperature: TEMPERATURE.T155K_160K,
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.LOW,
  },
  {
    genus: 'Tussock',
    name: 'Virgam',
    conditions: {
      gravity: GRAVITY.LESS_THAN_027G,
      atmosphere: [Atmosphere.Water],
      planetType: [PlanetType.Rocky],
    },
    salesValue: SALES_VALUE.MEDIUM,
  },
];
