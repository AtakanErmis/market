import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ISelectItem } from "@interfaces/index";

interface Props {
  itemTypes: ISelectItem[];
  filterKey: string;
}

// Component for filter buttons for item types.
export default function ItemTypeFilter({ itemTypes, filterKey }: Props) {
  const [selected, setSelected] = useState<ISelectItem>();
  const [initialized, setInitialized] = useState<boolean>(false);
  const router = useRouter();
  console.log(itemTypes);

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
      setSelected({
        name: newSelected as string,
        slug: newSelected as string,
      });
    } else {
      // if the query is not set, we set the first item type as selected.
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          [filterKey]: itemTypes[0].slug,
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
        [filterKey]: type.slug,
      },
    });
  }
  return (
    <ul className="item-type-filter">
      {itemTypes.map((type) => (
        <li key={type.slug} className="item-type">
          <button
            className={selected?.slug === type.slug ? "active" : ""}
            onClick={() => onChange(type)}
          >
            {type.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
