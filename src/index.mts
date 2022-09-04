import { Atmosphere, PlanetType, Species, StarCondition, Volcanism } from './consts.mjs';
import { species } from './species.mjs';
import { createNumber, matchesNumberCondition, populateDropdown } from './utils.mjs';

const $volcanism = document.querySelector('#volcanism') as HTMLSelectElement | null;
const $atmosphere = document.querySelector('#atmosphere') as HTMLSelectElement | null;
const $planetType = document.querySelector('#planetType') as HTMLSelectElement | null;
const $star = document.querySelector('#star') as HTMLSelectElement | null;
const $gravity = document.querySelector('#gravity') as HTMLSelectElement | null;
const $temperature = document.querySelector('#temperature') as HTMLInputElement | null;
const $distance = document.querySelector('#distance') as HTMLInputElement | null;
const $results = document.querySelector('#results') as HTMLTableSectionElement | null;
const $filterStats = document.querySelector('#filter-stats') as HTMLTableCellElement | null;

populateDropdown(Volcanism, $volcanism);
populateDropdown(Atmosphere, $atmosphere);
populateDropdown(PlanetType, $planetType);
populateDropdown(StarCondition, $star);

document.querySelectorAll('#search input, #search select').forEach((el) => {
  el.addEventListener('change', filterResults);
  el.addEventListener('input', filterResults);
});

function filterResults() {
  $results!.innerHTML = '';
  const results = findResults();
  $filterStats!.textContent = `${results.length} / ${species.length}`;
  for (const r of results) {
    addResult(r);
  }
}

type MaybeEnum = '*' | null | '' | undefined;
type MaybeNumber = '' | undefined | null | number;

function findResults(): Species[] {
  const volcanism = $volcanism?.value as MaybeEnum | keyof typeof Volcanism;
  const atmosphere = $atmosphere?.value as MaybeEnum | keyof typeof Atmosphere;
  const planetType = $planetType?.value as MaybeEnum | keyof typeof PlanetType;
  const star = $star?.value as MaybeEnum | keyof typeof StarCondition;
  const gravity = $gravity?.value as MaybeNumber | '*';
  const temperature = $temperature?.value as MaybeNumber;
  const distance = $distance?.value as MaybeNumber;

  return species
    .filter(
      (s) =>
        !s.conditions.volcanism ||
        volcanism === '*' ||
        (volcanism && s.conditions.volcanism?.includes(Volcanism[volcanism]))
    )
    .filter(
      (s) =>
        !s.conditions.atmosphere ||
        atmosphere === '*' ||
        (atmosphere && s.conditions.atmosphere?.includes(Atmosphere[atmosphere]))
    )
    .filter(
      (s) =>
        !s.conditions.planetType ||
        planetType === '*' ||
        (planetType && s.conditions.planetType?.includes(PlanetType[planetType]))
    )
    .filter(
      (s) =>
        !s.conditions.star ||
        star === '*' ||
        (star && s.conditions.star?.includes(StarCondition[star]))
    )
    .filter(
      (s) =>
        !s.conditions.gravity ||
        gravity === '*' ||
        (gravity && matchesNumberCondition(gravity, s.conditions.gravity))
    )
    .filter(
      (s) =>
        !s.conditions.temperature ||
        temperature === '' ||
        (temperature && matchesNumberCondition(temperature, s.conditions.temperature))
    )
    .filter(
      (s) =>
        !s.conditions.distance ||
        distance === '' ||
        (distance && matchesNumberCondition(distance, s.conditions.distance))
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
  $tr.append(
    createTd(species.conditions.distance && createNumber(species.conditions.distance) + ' Ls')
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

filterResults();
