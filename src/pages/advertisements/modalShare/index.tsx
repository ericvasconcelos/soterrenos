import { Modal, Icon, Text } from '@/components';
import { IModalShare } from './types';
import { getTotalArea, priceFormatter } from '@/utils';
import { data } from '../data';

export const ModalShare = ({ isOpen, close }: IModalShare) => {
  const totalArea = getTotalArea(data.landSize);
  const currentUrl = window.location.href;

  // Função para copiar link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert('Link copiado para a área de transferência!');
    } catch (error) {
      console.error('Falha ao copiar o link', error);
    }
  };

  // Compartilhar no WhatsApp
  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `Confira esse terreno: ${currentUrl}`
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  // Compartilhar no Facebook
  const handleFacebookShare = () => {
    const quote = encodeURIComponent('Confira este terreno incrível! 🏡');
    const facebookUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}&quote=${quote}`;
    window.open(facebookUrl, '_blank');
  };

  // Compartilhar no Messenger
  const handleMessengerShare = () => {
    const messengerUrl = `https://www.messenger.com/t/?link=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(messengerUrl, '_blank');
  };

  // Compartilhar no Twitter
  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=Confira%20esse%20terreno!`;
    window.open(twitterUrl, '_blank');
  };

  // Compartilhar no Email
  const handleEmailShare = () => {
    const mailtoUrl = `mailto:?subject=Confira esse terreno&body=${encodeURIComponent(
      `Confira esse terreno disponível: ${currentUrl}`
    )}`;
    window.open(mailtoUrl, '_blank');
  };

  // Compartilhar no Telegram
  const handleTelegramShare = () => {
    const telegramUrl = `https://telegram.me/share/url?url=${encodeURIComponent(
      currentUrl
    )}&text=Confira%20esse%20terreno!`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <Text size="2xl" weight="medium" className="mb-4">
        Compartilhe esse terreno
      </Text>

      <div className="grid grid-cols-[120px_auto] gap-4 mb-6">
        <img
          src="/anuncios/images/4355127664.jpg"
          width={1200}
          height={559}
          alt="Foto Principal"
          className="w-[120px] h-auto"
        />

        <div>
          <Text color="primary-700" size="lg" weight="bold" className="mb-2">
            R$ {priceFormatter(data.price)}
          </Text>

          <Text color="gray-700" size="sm">
            {totalArea}m² - {data.address.neighborhood}, {data.address.city}
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <Icon name="document-duplicate" size={32} />
          Copiar Link
        </button>

        <button
          onClick={handleWhatsAppShare}
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <Icon name="whatsapp" size={32} />
          WhatsApp
        </button>

        <button
          onClick={handleFacebookShare}
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <Icon name="facebook" size={32} />
          Facebook
        </button>

        <button
          onClick={handleMessengerShare}
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <Icon name="facebook-messenger" size={30} />
          Messenger
        </button>

        <button
          onClick={handleTwitterShare}
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <Icon name="twitter" size={30} />
          Twitter
        </button>

        <button
          onClick={handleEmailShare}
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 cursor-pointer"
        >
          <Icon name="mail" size={32} />
          Email
        </button>

        <button
          onClick={handleTelegramShare}
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 transition-all hover:bg-gray-100"
        >
          <Icon name="telegram" size={32} />
          Telegram
        </button>
      </div>
    </Modal>
  );
};
