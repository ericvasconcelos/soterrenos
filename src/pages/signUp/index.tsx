import { Container } from '@/components';

import { SignUpForm } from './signUpForm';

const SignUp = () => (
  <>
    <Container>
      <div className="lg:grid grid-cols-2 gap-8 items-center mt-12">
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
  </>
);

export default SignUp;
