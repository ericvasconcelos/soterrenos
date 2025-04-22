import { Skeleton } from '@/components';
import { generateArray } from '@/utils';

export const AdSkeleton = () => {
  const items = generateArray(4);

  return (
    <div>
      <div className="flex items-center justify-between my-5">
        <Skeleton width="60%" height={36} borderRadius={8} />
        <Skeleton width={150} height={32} borderRadius={8} />
      </div>

      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-4 lg:grid-rows-[180px_180px] xl:grid-rows-[250px_250px] gap-4 mb-8">
        <div className="flex items-center justify-center col-span-2 row-span-2">
          <Skeleton width="100%" height="100%" borderRadius={8} />
        </div>

        {items.map((item) => (
          <div
            key={item}
            className="hidden lg:flex items-center justify-center"
          >
            <Skeleton width="100%" height="100%" borderRadius={8} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[auto_280px] lg:grid-cols-[auto_360px] xl:grid-cols-[auto_420px] gap-4 lg:gap-6 xl:gap-8 mb-22">
        <div>
          <Skeleton width="60%" height={42} borderRadius={8} />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="xl:flex xl:items-end gap-2">
              <Skeleton width={200} height={36} borderRadius={8} />
            </div>

            <div className="xl:flex xl:items-end gap-2">
              <Skeleton width={200} height={36} borderRadius={8} />
            </div>

            <div className="xl:flex xl:items-end gap-2">
              <Skeleton width={200} height={36} borderRadius={8} />
            </div>

            <div className="xl:flex xl:items-end gap-2">
              <Skeleton width={200} height={36} borderRadius={8} />
            </div>

            <div className="xl:flex xl:items-end gap-2">
              <Skeleton width={200} height={36} borderRadius={8} />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <Skeleton width="100%" height={200} borderRadius={8} />
        </div>
      </div>
    </div>
  );
};
