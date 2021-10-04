import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";
import Button from "../button";
import "./style.css"

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);
  return (
    <div className="container_list">
      {type === "catalogue" &&
        catalogue.map((item, index) => (
          <div className="item_list" key={index}>
            <p>{item.name}</p>
            <Button type={type} item={item} />
          </div>
        ))}
      {type === "cart" &&
        cart.map((item, index) => (
          <div className="item_list" key={index}>
            <p>{item.name}</p>
            <Button type={type} item={item} />
          </div>
        ))}
    </div>
  );
};
export default ProductList;
