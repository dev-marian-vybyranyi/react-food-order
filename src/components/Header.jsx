import logoImg from "../assets/logo.jpg";
import Button from "../components/UI/Button";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const cartItemNumber = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({cartItemNumber})</Button>
      </nav>
    </header>
  );
};

export default Header;
