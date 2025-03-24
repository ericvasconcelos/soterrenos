export interface IBasePartner {
  id: string;
  type: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  phoneNumber: string;
  email: string;
  creci?: string;
  purchaseNotice: number;
  rentNotice: number;
  since: number;
  servedCities: Array<{
    city: string;
    state: string;
  }>;
  whatsappNumber: string;
}

export interface IAgency extends IBasePartner {
  tradeName: string;
  legalName: string;
}

export interface ISalesperson extends IBasePartner {
  firstName: string;
  lastName: string;
}
