import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../../interfaces/products";
import { getProductById } from "../../api/apiProducts";
import ProductCard from "../../features/products/ProductCard";
import { Button } from "flowbite-react";

export const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | undefined>();

  useEffect(() => {
    if (params.id) {
      getProductById(+params.id).then(result => {
        console.log(result);
        setProduct(result.data);
      });
    }
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center gap-10">
      <ProductCard product={product} showDetails={true} />
      <Button>
        <Link to={'/products'}>Go back</Link>
      </Button>
    </div>
  );
};