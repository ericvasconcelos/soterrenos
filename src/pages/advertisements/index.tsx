import { Page } from '@/layouts/Page';
import { useParams } from 'react-router';

export default function Advertisements() {
  const { title } = useParams();
  return (
    <Page>
      <h1>Anúncio: {title}</h1>
    </Page>
  );
}
