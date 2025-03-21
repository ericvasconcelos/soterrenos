interface INeighborhood {
  value: string;
  label: string;
}

interface ICity {
  value: string;
  label: string;
  neighborhoods: INeighborhood[];
}

export interface IState {
  value: string;
  label: string;
  cities: ICity[];
}

export interface ILand {
  address: {
    state: string;
    city: string;
    neighborhood: string;
  };
}
