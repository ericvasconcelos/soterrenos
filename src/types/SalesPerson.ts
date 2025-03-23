export interface ISalesPerson {
  id: string;
  type: string;
  firstName: string;
  lastName: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  creci: string;
  purchaseNotice: number;
  rentNotice: number;
  since: number;
  servedCities: {
    city: string;
    state: string;
  }[];
}
