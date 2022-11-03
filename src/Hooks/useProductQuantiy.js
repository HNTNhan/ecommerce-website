import { useState } from "react";
import QuantityInputGroup from "../Components/QuantityInputGroup";

export default function useProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  function handleQuantityChange(type, value) {
    if (type === 0) setQuantity((prevQuantity) => Math.max(+prevQuantity + +value, 0));
    else setQuantity(+value || 0);
  }

  return [
    quantity,
    <QuantityInputGroup quantity={quantity} handleQuantityChange={handleQuantityChange} />,
  ];
}
