import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};


const ProductCard = ({ productId, price, name, photo, stock, handler }: ProductsProps) => {
  console.log(`${server}/${photo}`);

  return (
    <div className="product-card">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button
          onClick={() =>
            handler({
              productId,
              photo,
              name,
              price,
              quantity: 1,
              stock,
            })
          }
        >
          <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default ProductCard