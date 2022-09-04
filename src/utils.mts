import { NumberCondition } from './consts.mjs';

export const populateDropdown = (options: Object, $select: Element | null) => {
  for (const [key, value] of Object.entries(options)) {
    const $option = document.createElement('option');
    $option.textContent = value;
    $option.value = key;
    $select?.append($option);
  }
};

export const createNumber = (nc?: NumberCondition): string => {
  if (!nc || (!nc.min && !nc.max)) {
    return '';
  }

  if (!nc.min) {
    return `< ${nc.max}`;
  }

  if (!nc.max) {
    return `> ${nc.min}`;
  }

  return `${nc.min} - ${nc.max}`;
};

export const matchesNumberCondition = (value: number, nc: NumberCondition): boolean => {
  const min = nc.min || -Infinity;
  const max = nc.max || Infinity;

  return value >= min && value <= max;
};
