import { ISelectItem } from "@interfaces/index";
import Checkbox from "@components/ui/Checkbox";

interface Props {
  title?: string; // Title of the component.
  items: Array<ISelectItem>; // List of items to display.
  hasSearch?: boolean; // Whether to display search bar.
  searchPlaceholder?: string; // Placeholder text for search bar.
}

// Component for Filters.
export default function CheckboxGroup({
  title,
  items,
  hasSearch,
  searchPlaceholder,
}: Props) {
  return (
    <div className="checkbox-group">
      <div className="checkbox-group__title">{title}</div>
      <div className="checkbox-group__panel">
        {hasSearch && (
          <input
            type="text"
            className="checkbox-group__search-box"
            placeholder={searchPlaceholder}
          />
        )}
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Checkbox text={item.name} />
              {item.count && <span>{item.count}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
