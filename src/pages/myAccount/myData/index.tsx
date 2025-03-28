import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {
  Avatar,
  Button,
  Container,
  FieldController,
  Input,
  Select,
  Text,
} from '@/components';
import { states } from '@/data';
import { useUser } from '@/hooks/useUser';
import {
  filterCNPJMask,
  filterCompanyNameMask,
  filterCPFMask,
  filterFullNameMask,
  filterPhoneMask,
  filterSimpleNameMask,
} from '@/utils';

import { CropImageModal } from './CropImageModal';
import { IUpdateUserForm } from './schema';
import { useUpdateUserForm } from './useUpdateUserForm';

const MyData: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { isValid, isSubmitting },
  } = useUpdateUserForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const newImage = watch('newImage');
  const profileImage = watch('profileImage');

  const { data } = useUser('agency');

  useEffect(() => {
    reset(data);
  }, [reset, data]);

  const handleSaveImage = useCallback(
    (croppedImage: FileList) => {
      setValue('newImage', croppedImage);
    },
    [setValue]
  );

  const currentImage = useMemo(() => {
    const croppedImage = newImage as FileList;

    if (croppedImage && croppedImage?.[0]) {
      const urlImage = URL.createObjectURL(croppedImage[0]);
      return {
        src: urlImage,
      };
    }

    if (profileImage?.src) {
      return profileImage;
    }

    return '';
  }, [newImage, profileImage]);

  const onSubmit = (formData: IUpdateUserForm) => {
    console.log(formData);
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-12 mb-20">
          <Text tag="h1" size="2xl" weight="bold" className="mb-8">
            Meus dados
          </Text>

          <button
            className="group relative mb-4 cursor-pointer overflow-hidden rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            {currentImage && <Avatar size="2xl" image={currentImage} />}

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
                  id="personalName"
                  name="personalName"
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
              label="Whatsapp"
              placeholder="(99) 99999-9999"
              filterValue={filterPhoneMask}
            />

            <div className="flex justify-end sm:col-span-2 mt-4">
              <Button size="large" disabled={!isValid} isLoading={isSubmitting}>
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
          onSave={handleSaveImage}
        />
      )}
    </>
  );
};

export default MyData;
