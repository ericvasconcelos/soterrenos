import React from 'react';
import { Link } from 'react-router';

import { useAuth } from '@/auth';
import {
  Button,
  Card,
  Container,
  FieldController,
  Input,
  Text,
} from '@/components';
import { SEO } from '@/layouts/Seo';

import { ILogin } from './types';
import { useLoginForm } from './useLoginForm';

const Login: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useLoginForm();

  const { login, loading } = useAuth();

  const onSubmit = async (data: ILogin) => await login(data);

  return (
    <>
      <SEO
        title="Acesse Sua Conta"
        description="Gerencie seus anúncios de terrenos ou encontre o lote ideal. Cadastro rápido e seguro. Comece agora!"
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Login/Cadastro',
          description: 'Área de acesso para usuários da Só Terrenos',
        }}
      />

      <Container>
        <Card hasShadow className="max-w-lg mx-auto my-14">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <Text tag="h1" size="3xl" weight="bold">
              Acessar
            </Text>

            <FieldController
              control={control}
              component={Input}
              id="email"
              type="email"
              name="email"
              label="Email"
              placeholder="seuemail@gmail.com"
            />

            <FieldController
              control={control}
              component={Input}
              type="password"
              id="password"
              name="password"
              label="Senha"
              placeholder="********"
            />

            <Button isFull size="large" disabled={!isValid} isLoading={loading}>
              Acessar
            </Button>

            <Text size="sm" align="center">
              É novo aqui? Acesse a{' '}
              <Link to="/cadastrar" className="text-primary-700">
                área de cadastro
              </Link>
            </Text>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default Login;
