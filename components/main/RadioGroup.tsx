import { useState } from "react";
import { ISelectItem } from "@interfaces/index";
import Radio from "@components/ui/Radio";

interface Props {
  title?: string; // Title of the component.
  items: Array<ISelectItem>; // List of items to display.
  onChange?: (value: ISelectItem) => void; // Callback function to be called when an item is selected.
}

// Component for Sorting.
export default function RadioGroup({ title, items, onChange }: Props) {
  const [checked, setChecked] = useState<number>(0);
  function setItem(index) {
    setChecked(index);
    onChange(items[index]);
  }
  return (
    <div className="radio-group">
      <div className="radio-group__title">{title}</div>
      <div className="radio-group__panel">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <Radio
                text={item.name}
                checked={checked === index}
                onChange={() => setItem(index)}
              />
              {item.count && <span>{item.count}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
