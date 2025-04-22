import Partners from '../index';

const SalesPerson = () => (
  <Partners
    type="salesperson"
    variants={{
      singular: 'corretor',
      plural: 'corretores',
      article: 'o',
    }}
  />
);

export default SalesPerson;
