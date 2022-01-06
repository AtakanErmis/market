import { useState } from "react";

interface Props {
  itemTypes: string[];
}

export default function ItemTypeFilter({ itemTypes }: Props) {
  const [selected, setSelected] = useState<string>(itemTypes[0]);
  return (
    <ul className="item-type-filter">
      {itemTypes.map((type) => (
        <li key={type} className="item-type">
          <button
            className={selected === type ? "active" : ""}
            onClick={() => setSelected(type)}
          >
            {type}
          </button>
        </li>
      ))}
    </ul>
  );
}
