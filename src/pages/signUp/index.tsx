import { Container } from '@/components';
import { Page } from '@/layouts/Page';

import { SignUpForm } from './signUpForm';

const SignUp = () => (
  <Page>
    <Container>
      <div className="lg:grid grid-cols-2 gap-8 mt-12">
        <div className="hidden lg:flex items-end justify-center">
          <img
            src="/sign-up/vendedor-de-terrenos.png"
            alt="Vendedor de Terrenos"
            className="block w-full max-w-[520px] h-auto"
          />
        </div>

        <SignUpForm />
      </div>
    </Container>
  </Page>
);

export default SignUp;
