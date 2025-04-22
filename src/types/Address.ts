export interface IAddress {
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  condominium?: string;
  lat?: number;
  lng?: number;
}
