import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { LandCard, Skeleton, Spinner, Text } from '@/components';
import { activeList, inactiveList } from '@/data';
import { ILand } from '@/types';
import { generateArray, wait } from '@/utils';

import { IAdsList } from './types';

export const AdsList: FC<IAdsList> = ({ type }) => {
  const initialAds = type === 'active' ? activeList : inactiveList;
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(true);
  const [error, setError] = useState('');
  const [visibleAds, setVisibleAds] = useState<ILand[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver>(null);
  const itemsPerPage = 8;
  const skeletons = generateArray(8);

  const handleLoadAds = useCallback(async () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newAds = initialAds.advertisements.slice(startIndex, endIndex);

    try {
      if (currentPage === 1) setInitialLoading(true);
      else setLoadingMore(true);

      await wait(2000);
      setVisibleAds((prev) => [...new Set([...prev, ...newAds])]);
      setHasMore(endIndex < initialAds.total);
    } catch (err) {
      setError('Ocorrou algum erro ao carregar as informações');
      return err;
    } finally {
      setInitialLoading(false);
      setLoadingMore(false);
    }
  }, [currentPage, initialAds]);

  useEffect(() => {
    handleLoadAds();
  }, [handleLoadAds]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrentPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {!initialLoading &&
        visibleAds.map((ad, index) => {
          if (visibleAds.length === index + 1) {
            return (
              <div ref={lastElementRef} key={ad.code}>
                <LandCard type="edit" {...ad} />
              </div>
            );
          }

          return <LandCard type="edit" key={ad.code} {...ad} />;
        })}

      {!initialLoading && !loadingMore && error && (
        <Text size="2xl" color="danger-700" weight="medium" align="center">
          {error}
        </Text>
      )}

      {initialLoading &&
        skeletons.map((item) => (
          <Skeleton key={item} width="100%" height={320} borderRadius={12} />
        ))}

      {loadingMore && (
        <div className="col-span-full w-full flex justify-center pt-8">
          <Spinner size="lg" />
        </div>
      )}

      {!hasMore && (
        <div className="col-span-full text-center py-4 text-gray-500 mt-8">
          Não há mais anúncios para carregar
        </div>
      )}
    </div>
  );
};
