import React, { useCallback, useEffect, useState } from 'react';

import {
  Avatar,
  Button,
  Container,
  FieldController,
  Input,
  Select,
  Skeleton,
  Text,
} from '@/components';
import { states } from '@/data';
import { useUser } from '@/hooks/useUser';
import { SEO } from '@/layouts/Seo';
import {
  filterCNPJMask,
  filterCompanyNameMask,
  filterCPFMask,
  filterFullNameMask,
  filterPhoneMask,
  filterSimpleNameMask,
} from '@/utils';

import { CropImageModal } from './CropImageModal';
import { useUpdateProfile } from './hooks';
import { IUpdateUserForm } from './schema';
import { useUpdateUserForm } from './useUpdateUserForm';

const MyData: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isValid },
  } = useUpdateUserForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const profileImage = watch('profileImage');

  const defaultImage = {
    src: '/placeholder/user-112x112.webp',
    width: 112,
    height: 112,
  };

  const { mutateAsync: updateProfile, isPending } = useUpdateProfile();
  const { data, isLoading } = useUser();

  useEffect(() => {
    reset(data);
  }, [reset, data]);

  const onSubmit = useCallback(
    async (formData: IUpdateUserForm) => {
      await updateProfile(formData);
    },
    [updateProfile]
  );

  return (
    <>
      <SEO
        title="Meus Dados | Área do Cliente"
        description="Atualize suas informações pessoais e preferências de conta. Segurança e privacidade garantidas."
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          name: 'Meus Dados',
          description: 'Área de gerenciamento de dados do usuário',
        }}
      />

      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-12 mb-20">
          <Text tag="h1" size="2xl" weight="bold" className="mb-8">
            Meus dados
          </Text>

          <button
            type="button"
            className="group relative mb-4 cursor-pointer overflow-hidden rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            {isLoading ? (
              <Skeleton width={112} height={112} borderRadius={100} />
            ) : (
              <Avatar size="2xl" image={profileImage ?? defaultImage} />
            )}

            <span className="hidden group-hover:flex absolute inset-0 items-center justify-center font-medium text-white bg-gray-950/75 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              Atualizar Imagem
            </span>
          </button>

          <div className="grid sm:grid-cols-2 gap-4 lg:max-w-3/4  xl:max-w-2/3">
            <FieldController
              control={control}
              component={Input}
              id="email"
              type="email"
              name="email"
              label="Email"
              placeholder="seuemail@gmail.com"
              disabled
            />

            {data?.type === 'agency' && (
              <>
                <FieldController
                  control={control}
                  component={Input}
                  id="companyId"
                  name="companyId"
                  label="CNPJ"
                  placeholder="99.999.999/0001-99"
                  filterValue={filterCNPJMask}
                  disabled
                />

                <FieldController
                  control={control}
                  component={Input}
                  id="legalName"
                  name="legalName"
                  label="Razão Social"
                  placeholder="EMPRESA LTDA"
                  filterValue={filterCompanyNameMask}
                  disabled
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

            {(data?.type === 'owner' || data?.type === 'salesperson') && (
              <>
                <FieldController
                  control={control}
                  component={Input}
                  id="personalId"
                  name="personalId"
                  label="CPF"
                  placeholder="999.999.999-99"
                  filterValue={filterCPFMask}
                  disabled
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

            {data?.type === 'salesperson' && (
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
              label="Whatsapp"
              placeholder="(99) 99999-9999"
              filterValue={filterPhoneMask}
            />

            <div className="flex justify-end sm:col-span-2 mt-4">
              <Button size="large" disabled={!isValid} isLoading={isPending}>
                Atualizar
              </Button>
            </div>
          </div>
        </form>
      </Container>

      {isModalOpen && (
        <CropImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default MyData;
