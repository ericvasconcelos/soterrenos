import { Divider, Icon, Text } from '@/components';
import { data } from '../data';
import { generateInfos } from './generateInfos';

export const Infos = () => {
  const { infos } = data;
  const dataInfos = generateInfos(infos);

  return (
    <>
      {dataInfos.map(({ key, title, items }) => (
        <div key={key}>
          <Divider space="xl" />

          <Text tag="h3" size="xl" weight="medium" className="pt-4 mb-8">
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
