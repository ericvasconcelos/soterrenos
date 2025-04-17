interface ICity {
  value: string;
  label: string;
}

export interface IState {
  value: string;
  label: string;
  cities: ICity[];
}
