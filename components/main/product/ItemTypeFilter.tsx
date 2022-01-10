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
  const router = useRouter();

  // Reads the query string and sets the selected item type state.
  useEffect(() => {
    if (router?.query[filterKey]) {
      const newSelected = // router query is string[] | string, so we have to convert it to string if it is string[]
        router.query[filterKey] instanceof Array
          ? router.query[filterKey][0]
          : router.query[filterKey];
      setSelected({
        name: newSelected as string,
        slug: newSelected as string,
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
