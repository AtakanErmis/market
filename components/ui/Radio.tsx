import CheckRadio from "@assets/icons/check-radio.svg";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

export default function Radio({ text, ...rest }: Props) {
  return (
    <label className="radio-wrapper">
      <span className="radio__text">{text}</span>
      <input type="radio" {...rest} />
      <span className="radio__checkmark">
        <CheckRadio />
      </span>
    </label>
  );
}
