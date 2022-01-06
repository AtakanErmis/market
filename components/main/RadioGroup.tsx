import { useState } from "react";
import { ISelectItem } from "../../interfaces";
import Radio from "../ui/Radio";

interface Props {
  title?: string; // Title of the component.
  items: Array<ISelectItem>; // List of items to display.
}

// Component for Sorting.
export default function RadioGroup({ title, items }: Props) {
  const [checked, setChecked] = useState<number>(0);
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
                onChange={() => setChecked(index)}
              />
              {item.count && <span>{item.count}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
