import { useEffect, useState } from "react";

type FetchMoreData = () => Promise<void>;

export const useInfiniteScroll = (fetchMoreData: FetchMoreData): boolean => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 850;
      if (isNearBottom && !isFetching) {
        setIsFetching(true);
        fetchMoreData().then(() => setIsFetching(false));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMoreData, isFetching]);

  return isFetching;
};
