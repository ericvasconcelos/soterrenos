import { Container } from '@/components';
import { SEO } from '@/layouts/Seo';

import { SignUpForm } from './signUpForm';

const SignUp = () => (
  <>
    <SEO
      title="Cadastre-se"
      description="Faça seu cadastro e divulgue seu terreno em menos de 5 minutos"
      schemaMarkup={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Cadastro',
        description: 'Área de cadastro para novos usuários da Só Terrenos',
      }}
    />
    <Container>
      <div className="lg:grid grid-cols-2 gap-8 items-center pt-12">
        <div className="hidden lg:flex items-end justify-center">
          <img
            src="/sign-up/vendedor-de-terrenos.webp"
            alt="Vendedor de Terrenos"
            className="block w-full max-w-[520px] h-auto"
          />
        </div>

        <SignUpForm />
      </div>
    </Container>
  </>
);

export default SignUp;
