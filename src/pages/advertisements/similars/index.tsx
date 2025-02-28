import { Divider, Button, Text, Card } from '@/components';

export const Similars = () => {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="mb-16">
      <Divider space="xl" />

      <Text size="2xl" weight="bold" className="mb-6">
        Encontre terrenos similares
      </Text>

      <div className="overflow-x-auto pb-6">
        <div className="flex items-start gap-4">
          {numbers.map((index) => (
            <Card
              key={index}
              padding="none"
              hasShadow
              className="min-w-[320px]"
            >
              <img
                src="/anuncios/images/4355127664.jpg"
                width={1200}
                height={559}
                alt="Foto Principal"
                className="w-full"
              />

              <div className="p-4">
                <Text
                  color="primary-700"
                  size="2xl"
                  weight="bold"
                  className="mb-2"
                >
                  R$ 140.000
                </Text>

                <Text
                  color="gray-700"
                  size="sm"
                  weight="medium"
                  className="mb-8"
                >
                  400m² - Park Way, Brasília
                </Text>

                <Button isFull variant="secondary">
                  Ver Terreno
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
