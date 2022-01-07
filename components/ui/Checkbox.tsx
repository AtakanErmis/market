import Check from "@assets/icons/check.svg";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

export default function Checkbox({ text, ...rest }: Props) {
  return (
    <label className="checkbox-wrapper">
      <span className="checkbox__text">{text}</span>
      <input type="checkbox" {...rest} />
      <span className="checkbox__checkmark">
        <Check></Check>
      </span>
    </label>
  );
}
