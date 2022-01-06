import Check from "../../assets/icons/check.svg";

interface Props {
  text?: string;
}

export default function Checkbox({ text }: Props) {
  return (
    <label className="checkbox-wrapper">
      <span className="checkbox__text">{text}</span>
      <input type="checkbox" />
      <span className="checkbox__checkmark">
        <Check></Check>
      </span>
    </label>
  );
}
