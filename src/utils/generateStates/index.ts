import { initialLands } from '../lands';
import { normalizeText } from '../normalizeText';
import { IState } from './types';

export function generateStates(): IState[] {
  const stateMap = new Map<string, IState>();

  for (const land of initialLands) {
    const { state, city, neighborhood } = land.address;

    if (!stateMap.has(state)) {
      stateMap.set(state, {
        value: normalizeText(state),
        label: state,
        cities: [],
      });
    }

    const currentState = stateMap.get(state)!;
    let currentCity = currentState.cities.find((c) => c.label === city);

    if (!currentCity) {
      currentCity = {
        value: normalizeText(city),
        label: city,
        neighborhoods: [],
      };
      currentState.cities.push(currentCity);
    }

    if (!currentCity.neighborhoods.some((n) => n.label === neighborhood)) {
      currentCity.neighborhoods.push({
        value: normalizeText(neighborhood),
        label: neighborhood,
      });
    }
  }

  const statesMapped = Array.from(stateMap.values());

  return statesMapped;
}
