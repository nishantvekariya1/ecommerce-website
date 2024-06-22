import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {
  const addToCartHandler = () => {
  };

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard 
          productId={"_id"}
          name={"Macbook"}
          price={98000}
          stock={2}
          handler={addToCartHandler}
          photo={"https://www.shutterstock.com/image-illustration/macbook-pro-2023-m2-chip-600nw-2328203513.jpg"} 
        />
      </main>
    </div>
  )
}

export default Home