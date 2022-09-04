import { Atmosphere, PlanetType, Species, StarCondition, Volcanism } from './consts.mjs';
import { species } from './species.mjs';
import { createNumber, matchesNumberCondition, populateDropdown } from './utils.mjs';

const $volcanism = document.querySelector('#volcanism');
const $atmosphere = document.querySelector('#atmosphere');
const $planetType = document.querySelector('#planetType');
const $star = document.querySelector('#star');
const $gravity = document.querySelector('#gravity');
const $temperature = document.querySelector('#temperature');
const $results = document.querySelector('#results');

populateDropdown(Volcanism, $volcanism);
populateDropdown(Atmosphere, $atmosphere);
populateDropdown(PlanetType, $planetType);
populateDropdown(StarCondition, $star);

document.querySelectorAll('#search input, #search select').forEach((el) => {
  el.addEventListener('change', handleChange);
  el.addEventListener('input', handleChange);
});

function handleChange() {
  $results!.innerHTML = '';
  const results = findResults();
  for (const r of results) {
    addResult(r);
  }
}

function findResults(): Species[] {
  const volcanism = ($volcanism as HTMLSelectElement | null)?.value as
    | keyof typeof Volcanism
    | null;
  const atmosphere = ($atmosphere as HTMLSelectElement | null)?.value as
    | keyof typeof Atmosphere
    | null;
  const planetType = ($planetType as HTMLSelectElement | null)?.value as
    | keyof typeof PlanetType
    | null;
  const star = ($star as HTMLSelectElement | null)?.value as keyof typeof StarCondition | null;
  const gravity = ($gravity as HTMLSelectElement | null)?.value as number | undefined;
  const temperature = ($temperature as HTMLInputElement | null)?.value as number | undefined;

  console.log(planetType, PlanetType[planetType!]);

  return species
    .filter(
      (s) =>
        !volcanism ||
        !s.conditions.volcanism ||
        s.conditions.volcanism?.includes(Volcanism[volcanism])
    )
    .filter(
      (s) =>
        !atmosphere ||
        !s.conditions.atmosphere ||
        s.conditions.atmosphere?.includes(Atmosphere[atmosphere])
    )
    .filter(
      (s) =>
        !planetType ||
        !s.conditions.planetType ||
        s.conditions.planetType?.includes(PlanetType[planetType])
    )
    .filter((s) => !star || !s.conditions.star || s.conditions.star?.includes(StarCondition[star]))
    .filter(
      (s) =>
        !gravity || !s.conditions.gravity || matchesNumberCondition(gravity, s.conditions.gravity)
    )
    .filter(
      (s) =>
        !temperature ||
        !s.conditions.temperature ||
        matchesNumberCondition(temperature, s.conditions.temperature)
    );
}

function addResult(species: Species) {
  const $tr = document.createElement('tr');
  $tr.append(createTd(species.genus));
  $tr.append(createTd(species.name));
  $tr.append(createTd(createNumber(species.salesValue) + ' CR'));
  $tr.append(createTd(species.conditions.planetType?.join(' or ')));
  $tr.append(createTd(species.conditions.atmosphere?.join(' or ')));
  $tr.append(createTd(species.conditions.volcanism?.join(' or ')));
  $tr.append(
    createTd(species.conditions.temperature && createNumber(species.conditions.temperature) + ' K')
  );
  $tr.append(
    createTd(species.conditions.gravity && createNumber(species.conditions.gravity) + ' g')
  );
  $tr.append(createTd(species.conditions.star?.join(' or ')));

  if ((species.salesValue.min || 0) >= 350_000) {
    $tr.style.color = '#e3e551';
  }
  if ((species.salesValue.min || 0) >= 700_000) {
    $tr.style.color = '#f75757';
  }
  $results?.append($tr);
}

function createTd(content: any) {
  const $td = document.createElement('td');
  $td.textContent = content;
  return $td;
}
