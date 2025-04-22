import { useParams } from 'react-router';

import { Divider, Icon, Text } from '@/components';
import { useFetchLand } from '@/hooks/useLand';

import { generateInfos } from './generateInfos';

export const Infos = () => {
  const { id } = useParams();
  const { data } = useFetchLand(id);
  const dataInfos = generateInfos(data);

  return (
    <>
      {dataInfos.map(({ key, title, items }) => (
        <div key={key}>
          <Divider space="xl" />

          <Text tag="h2" size="xl" weight="medium" className="pt-4 mb-8">
            {title}
          </Text>

          <ul className="grid grid-cols-2 xl:grid-cols-3 items-stretch justify-start gap-4">
            {items.map(({ icon, label }) => (
              <li
                key={icon.name + label}
                className="grid grid-cols-[32px_auto] items-center gap-2"
              >
                <Icon
                  name={icon.name}
                  size={icon.size}
                  strokeWidth={icon.strokeWidth}
                />
                <Text>{label}</Text>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
