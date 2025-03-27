import { Text } from '@/components';
import { Accordion } from '@/components/Accordion';

import { ContactForm } from './contactForm';
import { infos } from './data';

const HelpDesk = () => (
  <>
    <div className="mb-20">
      <Text tag="h1" size="2xl" weight="bold" className="mt-12 mb-8">
        Central de Ajuda
      </Text>

      <Accordion infos={infos} />
    </div>

    <ContactForm />
  </>
);

export default HelpDesk;
