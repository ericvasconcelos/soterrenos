import React, { useCallback } from 'react';
import { useWatch } from 'react-hook-form';
import { Link } from 'react-router';

import {
  Button,
  Card,
  FieldController,
  Input,
  Select,
  Text,
} from '@/components';
import { states, userTypes } from '@/data';
import { ISignUpForm } from '@/types';
import {
  filterCNPJMask,
  filterCompanyNameMask,
  filterCPFMask,
  filterFullNameMask,
  filterPhoneMask,
  filterSimpleNameMask,
} from '@/utils';

import { useSignUp } from '../hooks';
import { useSignUpForm } from '../hooks/useSignUpForm';

export const SignUpForm: React.FC = () => {
  const { mutateAsync: signUp } = useSignUp();
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useSignUpForm();

  const userType = useWatch({ control, name: 'type' });

  const onSubmit = useCallback(
    async (formData: ISignUpForm) => {
      await signUp(formData);
    },
    [signUp]
  );

  return (
    <Card hasShadow className="h-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text tag="h1" size="2xl" weight="bold" className="mb-8">
          <span className="text-primary-700">Cadastre-se</span> e tenha o mundo
          dos <span className="text-primary-700">terrenos</span> em suas mãos
        </Text>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <FieldController
            control={control}
            component={Select}
            id="type"
            name="type"
            label="Tipo de usuário"
            options={userTypes}
          />

          {userType === 'agency' && (
            <>
              <FieldController
                control={control}
                component={Input}
                id="companyId"
                name="companyId"
                label="CNPJ"
                placeholder="99.999.999/0001-99"
                filterValue={filterCNPJMask}
              />

              <FieldController
                control={control}
                component={Input}
                id="legalName"
                name="legalName"
                label="Razão Social"
                placeholder="EMPRESA LTDA"
                filterValue={filterCompanyNameMask}
              />

              <FieldController
                control={control}
                component={Input}
                id="tradeName"
                name="tradeName"
                label="Nome Fantasia"
                placeholder="Empresa"
                filterValue={filterCompanyNameMask}
              />
            </>
          )}

          {(userType === 'owner' || userType === 'salesperson') && (
            <>
              <FieldController
                control={control}
                component={Input}
                id="personalId"
                name="personalId"
                label="CPF"
                placeholder="999.999.999-99"
                filterValue={filterCPFMask}
              />

              <FieldController
                control={control}
                component={Input}
                id="personalFirstName"
                name="personalFirstName"
                label="Nome"
                placeholder="Seu nome"
                filterValue={filterSimpleNameMask}
              />

              <FieldController
                control={control}
                component={Input}
                id="personalLastName"
                name="personalLastName"
                label="Sobrenome"
                placeholder="Seu sobrenome"
                filterValue={filterFullNameMask}
              />
            </>
          )}

          {userType === 'salesperson' && (
            <>
              <FieldController
                control={control}
                component={Input}
                id="creci"
                name="creci"
                label="CRECI"
                placeholder="CRECI"
                maxLength={16}
              />

              <FieldController
                control={control}
                component={Select}
                id="creciState"
                name="creciState"
                label="Estado do CRECI"
                options={states}
              />
            </>
          )}

          <FieldController
            control={control}
            component={Input}
            id="phoneNumber"
            name="phoneNumber"
            label="Telefone"
            placeholder="(99) 99999-9999"
            filterValue={filterPhoneMask}
          />

          <FieldController
            control={control}
            component={Input}
            id="whatsappNumber"
            name="whatsappNumber"
            label="Número do Whatsapp"
            placeholder="(99) 99999-9999"
            filterValue={filterPhoneMask}
          />

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

          <FieldController
            control={control}
            component={Input}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirmar Senha"
            placeholder="********"
          />
        </div>

        <Button
          isFull
          size="large"
          disabled={!isValid}
          isLoading={isSubmitting}
        >
          Cadastrar
        </Button>

        <Text size="sm" align="center" className="my-4">
          Acesse a{' '}
          <Link to="/entrar" className="text-primary-700">
            área de login
          </Link>
        </Text>
      </form>
    </Card>
  );
};
