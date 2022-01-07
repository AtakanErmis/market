import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

interface Props {
  itemTypes: string[];
  filterKey: string;
}

export default function ItemTypeFilter({ itemTypes, filterKey }: Props) {
  const [selected, setSelected] = useState<string>(itemTypes[0]);
  const [initialized, setInitialized] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      return;
    }
    if (router.query[filterKey]) {
      const newSelected =
        router.query[filterKey] instanceof Array
          ? router.query[filterKey][0]
          : router.query[filterKey];
      setSelected(newSelected as string);
    } else {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          [filterKey]: itemTypes[0],
        },
      });
    }
  }, [router, filterKey]);

  function onChange(type) {
    setSelected(type);
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [filterKey]: type,
      },
    });
  }
  return (
    <ul className="item-type-filter">
      {itemTypes.map((type) => (
        <li key={type} className="item-type">
          <button
            className={selected === type ? "active" : ""}
            onClick={() => onChange(type)}
          >
            {type}
          </button>
        </li>
      ))}
    </ul>
  );
}
