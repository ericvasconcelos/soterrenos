import { Card, Icon, Text } from '@/components';
import { useUser } from '@/hooks/useUser';
import { filterPhoneMask, getPartnerName } from '@/utils';

export const SellerInfos = () => {
  const { data } = useUser();

  const partnerName = getPartnerName({
    type: data?.type,
    personalFirstName: data?.personalFirstName,
    personalLastName: data?.personalLastName,
    tradeName: data?.tradeName,
  });

  return (
    <Card>
      <Text tag="h2" size="xl" weight="bold" className="mb-1">
        Informações de contato no anúncio
      </Text>

      <Text size="sm" className="mb-4">
        Essas informações são encontradas e alteradas na página "minha conta".
      </Text>

      <div className="flex md:flex-col lg:flex-row gap-2 mb-6">
        {data?.profileImage?.src && (
          <img
            src={data?.profileImage.src}
            width={data?.profileImage.width}
            height={data?.profileImage.height}
            alt={data?.profileImage.alt ?? partnerName}
            className="w-[106px] h-[106px] object-cover rounded-full"
          />
        )}

        <div>
          <Text weight="medium" className="mb-1.5">
            {partnerName}
          </Text>

          <Text size="sm" className="flex items-center gap-1 mb-1.5">
            <Icon name="phone" size={20} />
            Telefone: {filterPhoneMask(data?.phoneNumber || '')}
          </Text>

          <Text size="sm" className="flex items-center gap-1 mb-1.5">
            <Icon name="whatsapp" size={20} />
            Whatsapp: {filterPhoneMask(data?.whatsappNumber || '')}
          </Text>

          <Text size="sm" className="flex items-center gap-1 mb-1.5">
            <Icon name="mail" size={20} />
            Email: {data?.email}
          </Text>

          <Text size="sm" className="flex items-center gap-1">
            <Icon name="identification" size={20} />
            CRECI: {data?.creci}
          </Text>
        </div>
      </div>
    </Card>
  );
};
