import { agencyList } from '@/data';
import { IAgency } from '@/types';

import Partners from '../index';

const Agencies = () => (
  <Partners<IAgency>
    data={agencyList}
    variants={{
      singular: 'imobiliária',
      plural: 'imobiliárias',
      article: 'a',
    }}
  />
);

export default Agencies;
