import LazyLoad from 'react-lazyload';

import { Text, VideoPlayer } from '@/components';

export const HowItWorks = () => (
  <div className="mb-16 lg:mb-24">
    <Text
      tag="h2"
      color="primary-700"
      weight="bold"
      size="4xl"
      align="center"
      className="mb-12"
    >
      Como Funciona?
    </Text>
    <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12 mb-22">
      <div>
        <LazyLoad height={300} offset={100} once>
          <img
            src="/home/icons/secure-login.svg"
            alt="Cadastro Rápido e Seguro"
            className="block max-h-[240px] w-auto mx-auto mb-10"
          />
        </LazyLoad>
        <Text
          tag="h3"
          size="xl"
          weight="bold"
          align="center"
          className="mb-2 text-primary-500"
        >
          Cadastro Rápido e Seguro
        </Text>
        <Text color="gray-900" align="center" className="max-w-[300px] mx-auto">
          Faça seu cadastro como Proprietário, Imobiliária ou Corretor e tenha
          acesso exclusivo à plataforma.
        </Text>
      </div>
      <div>
        <LazyLoad height={300} offset={100} once>
          <img
            src="/home/icons/form-land.svg"
            alt="Crie Seu Anúncio"
            className="block max-h-[240px] w-auto mx-auto mb-10"
          />
        </LazyLoad>
        <Text
          tag="h3"
          size="xl"
          weight="bold"
          align="center"
          className="mb-2 text-primary-500"
        >
          Crie Seu Anúncio
        </Text>
        <Text color="gray-700" align="center" className="max-w-[320px] mx-auto">
          Adicione fotos, vídeos, localização, valor e detalhes do terreno (como
          infraestrutura e proximidades) de forma intuitiva.
        </Text>
      </div>
      <div>
        <LazyLoad height={300} offset={100} once>
          <img
            src="/home/icons/launch-land.svg"
            alt="Publique e Venda!"
            className="block max-h-[240px] w-auto mx-auto mb-10"
          />
        </LazyLoad>
        <Text
          tag="h3"
          size="xl"
          weight="bold"
          align="center"
          className="mb-2 text-primary-500"
        >
          Publique e Venda!
        </Text>
        <Text color="gray-700" align="center" className="max-w-[300px] mx-auto">
          Seu anúncio será divulgado para milhares de interessados. Eles entram
          em contato diretamente com você!
        </Text>
      </div>
    </div>

    <LazyLoad height={405} once>
      <div className="flex justify-center max-w-[720px] mx-auto">
        <VideoPlayer url="https://www.youtube.com/watch?v=RnMtWgjcrSM" />
      </div>
    </LazyLoad>
  </div>
);
