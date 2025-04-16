import { ISignUpForm } from '@/types';

export const transformUserData = (formData: Partial<ISignUpForm>) => {
  const baseData = {
    type: formData.type,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    whatsappNumber: formData.whatsappNumber,
    password: formData.password,
  };

  switch (formData.type) {
    case 'owner':
      return {
        ...baseData,
        personalFirstName: formData.personalFirstName,
        personalLastName: formData.personalLastName,
        personalId: formData.personalId,
      };

    case 'salesperson':
      return {
        ...baseData,
        personalFirstName: formData.personalFirstName,
        personalLastName: formData.personalLastName,
        personalId: formData.personalId,
        creci: formData.creci,
        creciState: formData.creciState,
      };

    case 'agency':
      return {
        ...baseData,
        legalName: formData.legalName,
        tradeName: formData.tradeName,
        companyId: formData.companyId,
      };

    default:
      throw new Error('Tipo de usuário inválido');
  }
};
