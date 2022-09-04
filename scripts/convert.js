function convert(csv = '') {
  const lines = csv.split('\n');

  const species = {};

  for (const line of lines) {
    const [name, gravity, volcanism, atmosphere, temperature, sales, star, planet, distance] =
      line.split(',');

    const NAME = name.trim().toUpperCase();
    if (!species[NAME]) {
      species[NAME] = {
        genus: cap(name.split(' ')[0]),
        name: cap(name.split(' ')[1]),
        conditions: {
          gravity: new Set(),
          volcanism: new Set(),
          atmosphere: new Set(),
          temperature: new Set(),
          star: new Set(),
          planetType: new Set(),
          distance: new Set(),
        },
        salesValue: new Set(),
      };
    }

    const s = species[NAME];
    const c = s.conditions;

    c.gravity.add(gravity);
    c.volcanism.add(volcanism);
    c.atmosphere.add(atmosphere);
    c.temperature.add(temperature);
    c.star.add(star);
    c.planetType.add(planet);
    c.distance.add(distance);

    s.salesValue.add(sales);
  }

  return Object.values(species).map((x) => ({
    ...x,
    conditions: {
      gravity: Array.from(x.conditions.gravity),
      volcanism: Array.from(x.conditions.volcanism),
      atmosphere: Array.from(x.conditions.atmosphere),
      temperature: Array.from(x.conditions.temperature),
      star: Array.from(x.conditions.star),
      planetType: Array.from(x.conditions.planetType),
      distance: Array.from(x.conditions.distance),
    },
    salesValue: Array.from(x.salesValue),
  }));

  function cap(string) {
    return string.trim().charAt(0).toUpperCase() + string.slice(1);
  }
}

console.clear();
convert(csv);
