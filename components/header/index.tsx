import useWindowSize from "@hooks/useWindowSize";
import Basket from "@components/header/Basket";

export default function Header() {
  const { width } = useWindowSize();
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-items-wrapper">
          {width >= 624 && <div className="col"></div>}
          <img
            className="main-header__logo"
            src="/images/logo.svg"
            alt="Market"
          />
          <Basket />
        </div>
      </div>
    </header>
  );
}
