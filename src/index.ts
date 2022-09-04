type Volcanism =
  | 'Ammonia'
  | 'Carbon'
  | 'Helium'
  | 'Iron'
  | 'Methane'
  | 'Nitrogen'
  | 'Rocky'
  | 'Silicate'
  | 'Argon'
  | 'Argon Rich'
  | 'Icy'
  | 'Rocky Ice'
  | 'Water';
type Atmosphere =
  | 'Ammonia'
  | 'Argon'
  | 'Carbon Dioxide'
  | 'Helium'
  | 'Methane'
  | 'Neon'
  | 'Nitrogen'
  | 'Oxygen'
  | 'Sulfur Dioxide'
  | 'Water';
type PlanetType = 'Icy' | 'Rocky Ice' | 'Rocky' | 'High Metal Content';
type StarCondition = string;
type NumberCondition = {
  min?: number;
  max?: number;
};
export const GRAVITY: Record<string, NumberCondition> = {
  LESS_THAN_015G: {
    max: 0.15,
  },
  LESS_THAN_027G: {
    max: 0.27,
  },
  ANY: {},
};
export const SALES_VALUE: Record<string, NumberCondition> = {
  LOW: {
    max: 350_000,
  },
  MEDIUM: {
    min: 350_000,
    max: 700_000,
  },
  HIGH: {
    min: 700_000,
  },
};
export const DISTANCE: Record<string, NumberCondition> = {
  MORE_THAN_2_5KLS: {
    min: 2_500,
  },
};
export const TEMPERATURE: Record<string, NumberCondition> = {
  T180K_195K: {
    min: 180,
    max: 195,
  },
  T180K_190K: {
    min: 180,
    max: 190,
  },
  T160K_190K: {
    min: 160,
    max: 190,
  },
  T160K_170K: {
    min: 160,
    max: 170,
  },
  T155K_160K: {
    min: 155,
    max: 160,
  },
  T170K_175K: {
    min: 170,
    max: 175,
  },
  T145K_155K: {
    min: 145,
    max: 155,
  },
  T165K_190K: {
    min: 165,
    max: 190,
  },
  T175K_180K: {
    min: 175,
    max: 180,
  },
  T190K_195K: {
    min: 190,
    max: 195,
  },
  T_GT_165K: {
    min: 165,
  },
  T_GT_190K: {
    min: 190,
  },
  T_LT_190K: {
    min: 190,
  },
};

export type Species = {
  genus: string;
  name: string;
  conditions: {
    gravity?: NumberCondition[];
    volcanism?: Volcanism[];
    atmosphere?: Atmosphere[];
    planetType?: PlanetType[];
    temperature?: NumberCondition[];
    star?: StarCondition[];
    distance?: NumberCondition[];
  };
  salesValue: NumberCondition[];
};
