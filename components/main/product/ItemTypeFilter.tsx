import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
  itemTypes: string[];
  filterKey: string;
}

// Component for filter buttons for item types.
export default function ItemTypeFilter({ itemTypes, filterKey }: Props) {
  const [selected, setSelected] = useState<string>(itemTypes[0]);
  const [initialized, setInitialized] = useState<boolean>(false);
  const router = useRouter();

  // Reads the query string and sets the selected item type state.
  useEffect(() => {
    if (!initialized) {
      // the query in next.js router is not initialized yet. So we won't do anything in first render.
      setInitialized(true);
      return;
    }
    if (router.query[filterKey]) {
      const newSelected = // router query is string[] | string, so we have to convert it to string if it is string[]
        router.query[filterKey] instanceof Array
          ? router.query[filterKey][0]
          : router.query[filterKey];
      setSelected(newSelected as string);
    } else {
      // if the query is not set, we set the first item type as selected.
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
    // when the item type is changed, we update the query string and selected state.
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
