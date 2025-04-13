import { useCallback, useState } from 'react';

import {
  Button,
  Card,
  FieldController,
  Icon,
  Input,
  Text,
  Textarea,
} from '@/components';
import { filterFullNameMask, filterPhoneMask, getPartnerName } from '@/utils';

import { data } from '../data';
import { ISellersContactForm } from './types';
import { IContactForm, useContactForm } from './useContactForm';

export const SellersContactForm = ({
  type,
  personalFirstName,
  personalLastName,
  tradeName,
  phoneNumber,
  whatsappNumber,
  email,
  creci,
  profileImage,
}: ISellersContactForm) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useContactForm();
  const [showPhoneNumber, setShowPhoneNumber] = useState<boolean>(false);
  const [showEmail, setShowEmail] = useState<boolean>(false);

  const onSubmit = useCallback(
    (formData: IContactForm) => {
      window.open(
        `https://api.whatsapp.com/send/?phone=55${whatsappNumber}&text=${formData.message}%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phoneNumber}`
      );
    },
    [whatsappNumber]
  );

  const handleShowPhoneNumber = () => {
    setShowPhoneNumber(true);
  };

  const handleShowEmail = () => {
    setShowEmail(true);
  };

  const partnerName = getPartnerName({
    type,
    personalFirstName,
    personalLastName,
    tradeName,
  });

  return (
    <Card className="sticky top-6" hasShadow>
      <div className="flex md:flex-col lg:flex-row gap-2 mb-6">
        {profileImage?.src && (
          <img
            src={profileImage.src}
            width={profileImage.width}
            height={profileImage.height}
            alt={profileImage.alt ?? partnerName}
            className="w-[106px] h-[106px] object-cover rounded-full"
          />
        )}

        <div>
          <Text weight="medium" className="mb-1.5">
            {partnerName}
          </Text>

          <Text size="sm" className="flex items-center gap-1 mb-1.5">
            <Icon name="phone" size={20} />
            {filterPhoneMask(phoneNumber.slice(0, showPhoneNumber ? 15 : 5))}
            {!showPhoneNumber && (
              <button
                className="text-primary-700 font-medium transition-opacity hover:opacity-80 cursor-pointer"
                onClick={handleShowPhoneNumber}
              >
                Ver email
              </button>
            )}
          </Text>

          <Text size="sm" className="flex items-center gap-1 mb-1.5">
            <Icon name="mail" size={20} />
            {email.slice(0, showEmail ? 999 : 7)}
            {!showEmail && (
              <button
                className="text-primary-700 font-medium transition-opacity hover:opacity-80 cursor-pointer"
                onClick={handleShowEmail}
              >
                Ver telefone
              </button>
            )}
          </Text>

          <Text size="sm" className="flex items-center gap-1">
            <Icon name="identification" size={20} />
            CRECI: {creci}
          </Text>
        </div>
      </div>

      <Text size="lg" weight="medium" className="mb-4">
        Contate o vendedor via Whatsapp
      </Text>

      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <FieldController
          control={control}
          component={Input}
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="seuemail@gmail.com"
          disabled={!data.active}
        />

        <div className="grid lg:grid-cols-2 gap-4">
          <FieldController
            control={control}
            component={Input}
            id="name"
            name="name"
            label="Nome"
            placeholder="Nome Sobrenome"
            filterValue={filterFullNameMask}
            disabled={!data.active}
          />

          <FieldController
            control={control}
            component={Input}
            id="phoneNumber"
            name="phoneNumber"
            label="Celular"
            placeholder="(61) 99999-9999"
            filterValue={filterPhoneMask}
            disabled={!data.active}
          />
        </div>

        <FieldController
          control={control}
          component={Textarea}
          id="message"
          name="message"
          label="Mensagem"
          placeholder="Deixe sua mensagem para o vendedor"
          disabled={!data.active}
        />

        <Button
          isFull
          size="large"
          icon="whatsapp"
          disabled={!isValid || !data.active}
        >
          Enviar mensagem
        </Button>
      </form>
    </Card>
  );
};
