import { useEffect, useState } from "react";

import ProductsService from "services/ProductsService";
import { Product } from "types/Product";

type Result = [
  products: Product[],
  isLoading: boolean
]

function useProducts() : Result  {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function() {
      try {
        setIsLoading(true);
        const data = await ProductsService.getProducts();
        setProducts(data);
      } catch (e)  {
        const error = e as Error;
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    })()
  }, []);

  return [products, isLoading];
}

export default useProducts;