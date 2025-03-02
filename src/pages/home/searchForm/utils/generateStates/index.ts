import { lands } from '../../../data/lands';
import { IState } from './types';

export function generateStates(): IState[] {
  const stateMap = new Map<string, IState>();
  let stateId = 1,
    cityId = 1,
    neighborhoodId = 1;

  for (const land of lands) {
    const { state, city, neighborhood } = land.address;

    if (!stateMap.has(state)) {
      stateMap.set(state, {
        value: (stateId++).toString(),
        label: state,
        cities: [],
      });
    }

    const currentState = stateMap.get(state)!;
    let currentCity = currentState.cities.find((c) => c.label === city);

    if (!currentCity) {
      currentCity = {
        value: (cityId++).toString(),
        label: city,
        neighborhoods: [],
      };
      currentState.cities.push(currentCity);
    }

    if (!currentCity.neighborhoods.some((n) => n.label === neighborhood)) {
      currentCity.neighborhoods.push({
        value: (neighborhoodId++).toString(),
        label: neighborhood,
      });
    }
  }

  const statesMapped = Array.from(stateMap.values());

  return statesMapped;
}
