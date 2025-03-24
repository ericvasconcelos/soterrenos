import { salespersonList } from '@/data';
import { ISalesperson } from '@/types';

import Partners from '../index';

const SalesPerson = () => (
  <Partners<ISalesperson>
    data={salespersonList}
    variants={{
      singular: 'corretor',
      plural: 'corretores',
      article: 'o',
    }}
  />
);

export default SalesPerson;
