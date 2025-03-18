import {
  Button,
  Card,
  FieldController,
  Input,
  Text,
  Textarea,
} from '@/components';
import { filterNameMask } from '@/utils';

import { IContactForm, useContactForm } from './useContactForm';

export const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useContactForm();

  const onSubmit = (formData: IContactForm) => {
    const { name, email, message } = formData;
    window.open(
      `https://api.whatsapp.com/send/?phone=5561992391847&text=${message}%0ANome: ${name}%0AEmail: ${email}`
    );
  };

  return (
    <Card className="max-w-3xl m-auto" hasShadow>
      <Text size="lg" weight="medium" className="mb-4">
        Está com alguma dúvida? <br />
        Envie uma mensagem para nossa equipe e responderemos assim que possível
      </Text>

      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-4">
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
            id="name"
            name="name"
            label="Nome"
            placeholder="Nome Sobrenome"
            filterValue={filterNameMask}
          />
        </div>

        <FieldController
          control={control}
          component={Textarea}
          id="message"
          name="message"
          label="Mensagem"
          placeholder="Deixe sua mensagem para o vendedor"
        />

        <Button isFull size="large" icon="whatsapp" disabled={!isValid}>
          Enviar mensagem
        </Button>
      </form>
    </Card>
  );
};
