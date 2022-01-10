import Check from "@assets/icons/check.svg";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  itemCount?: number;
}

export default function Checkbox({ text, itemCount, ...rest }: Props) {
  return (
    <label className="checkbox-wrapper">
      <span className="checkbox__text">
        {text}{" "}
        <span className="checkbox__text--count">
          {itemCount ? `(${itemCount})` : ""}
        </span>
      </span>
      <input type="checkbox" {...rest} />
      <span className="checkbox__checkmark">
        <Check></Check>
      </span>
    </label>
  );
}
