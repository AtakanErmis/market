import { ISelectItem } from "@interfaces/index";
import Checkbox from "@components/ui/Checkbox";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  title?: string; // Title of the component.
  items: Array<ISelectItem>; // List of items to display.
  hasSearch?: boolean; // Whether to display search bar.
  searchPlaceholder?: string; // Placeholder text for search bar.
  filterKey: string;
}

// Component for filters.
export default function CheckboxGroup({
  title,
  items,
  hasSearch,
  searchPlaceholder,
  filterKey,
}: Props) {
  const router = useRouter();
  const [selected, setSelected] = useState<ISelectItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sets selected filter state as the query string value.
  useEffect(() => {
    if (router.query[filterKey]) {
      const newSelected =
        router.query[filterKey] instanceof Array
          ? (router.query[filterKey] as string[]).map((slug) => {
              const item = items.find((item) => item.slug === slug);
              if (item.slug) {
                return item;
              }
            })
          : [items.find((item) => item.slug === router.query[filterKey])];
      setSelected(newSelected);
    }
  }, [router]);

  // Updates the query string and selected items state when the selected items are changed.
  function onChange(e, item) {
    if (item.slug) {
      const { checked } = e.target;
      let newSelected = selected;
      if (checked) {
        newSelected = [...selected, item];
      } else {
        newSelected = selected.filter((i) => i.slug !== item.slug);
      }
      setSelected(newSelected);
      router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            [filterKey]: newSelected.map((item) => item.slug),
          },
        },
        undefined,
        { scroll: false }
      );
    } else {
      setSelected([]);
      router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            [filterKey]: [],
          },
        },
        undefined,
        { scroll: false }
      );
    }
  }

  return (
    <div className="checkbox-group">
      <div className="checkbox-group__title" data-testid="checkbox-group-title">
        {title}
      </div>
      <div className="checkbox-group__panel">
        {hasSearch && (
          <input
            type="text"
            className="checkbox-group__search-box"
            data-testid="checkbox-group-search-box"
            placeholder={searchPlaceholder}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        )}
        <ul>
          {items
            .filter(
              (item) =>
                searchQuery
                  ? item.name.search(new RegExp(searchQuery, "i")) !== -1 // search by name
                  : true // if search query is not set, we show all items.
            )
            .map((item, index) => (
              <li key={index}>
                <Checkbox
                  onChange={(e) => onChange(e, item)}
                  checked={
                    item.slug
                      ? selected.some((i) => i.slug === item.slug)
                      : !selected.some((i) => i.slug)
                  }
                  text={item.name}
                  itemCount={item.itemCount}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
