import { useParams } from 'react-router';

export default function Advertisements() {
  const { title } = useParams();
  return <h1>Anúncio: {title}</h1>;
}
