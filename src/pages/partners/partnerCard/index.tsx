import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import { Avatar, Button, Card, Icon, Text } from '@/components';
import { filterPhoneMask, getPartnerName } from '@/utils';

import { IPartnerCard } from './types';

export const PartnerCard = ({
  singular,
  article,
  id,
  type,
  personalFirstName,
  personalLastName,
  tradeName,
  profileImage,
  phoneNumber,
  whatsappNumber,
  email,
  creci,
  creciState,
  activeLandsCount,
  createdAt,
}: IPartnerCard) => {
  const navigate = useNavigate();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handleSendMessage = (whatsappNumber: string, message: string) => {
    window.open(
      `https://api.whatsapp.com/send/?phone=55${whatsappNumber}&text=${message}`
    );
  };

  const partnerName = getPartnerName({
    type,
    personalFirstName,
    personalLastName,
    tradeName,
  });

  const goParnerLandList = useCallback(() => {
    navigate(`/parceiros/${id}`);
  }, [navigate, id]);

  return (
    <Card
      key={id}
      hasShadow
      className="grid md:grid-cols-[auto_280px] gap-4 mb-4"
    >
      <div>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          {profileImage?.src && <Avatar image={profileImage} size="2xl" />}

          <div className="flex flex-col items-start gap-1">
            <Text tag="h2" size="xl" weight="bold">
              {partnerName}
            </Text>

            <Text size="sm" className="flex items-center gap-1">
              <Icon name="phone" size={20} strokeWidth={1.5} />
              {filterPhoneMask(phoneNumber.slice(0, showPhoneNumber ? 14 : 5))}
              {!showPhoneNumber && (
                <button
                  className="text-primary-700 font-medium transition-opacity hover:opacity-80 cursor-pointer"
                  onClick={() => setShowPhoneNumber(true)}
                >
                  Ver telefone
                </button>
              )}
            </Text>

            <Text size="sm" className="flex items-center gap-1">
              <Icon name="mail" size={20} strokeWidth={1.5} />
              {email.slice(0, showEmail ? 999 : 7)}
              {!showEmail && (
                <button
                  className="text-primary-700 font-medium transition-opacity hover:opacity-80 cursor-pointer"
                  onClick={() => setShowEmail(true)}
                >
                  Ver email
                </button>
              )}
            </Text>

            <Text size="sm" className="flex items-center gap-1">
              <Icon name="identification" size={20} strokeWidth={1.5} />
              CRECI: {creci} - {creciState}
            </Text>

            <Text size="sm">
              Terrenos à venda: <b>{activeLandsCount}</b>
            </Text>

            <Text
              size="xs"
              className="inline-block bg-gray-200 rounded-sm px-3 py-1"
            >
              Parceiro desde {dayjs(createdAt).format('DD/MM/YYYY')}
            </Text>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-4">
        <Button
          onClick={() =>
            handleSendMessage(
              whatsappNumber,
              `Olá ${partnerName}, gostaria de saber algumas informações importantes sobre o seu trabalho.`
            )
          }
          variant="primary"
        >
          Falar com {article} {singular}
        </Button>

        <Button
          onClick={() =>
            handleSendMessage(
              whatsappNumber,
              `Olá ${partnerName}, gostaria de solicitar a avaliação do meu terreno.`
            )
          }
          variant="secondary"
        >
          Solicitar Avaliação do Terreno
        </Button>

        <Button onClick={goParnerLandList} color="success" variant="secondary">
          Lista de Terrenos
        </Button>
      </nav>
    </Card>
  );
};
