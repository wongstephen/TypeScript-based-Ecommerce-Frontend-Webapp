import React, { useEffect, useState } from "react";
import { Product } from "../Interfaces";
import axios from "axios";
import useProductContext from "./useProductContext";

const useAxios = () => {
  const [response, setResponse] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("false");
  const [reload, setReload] = useState<number>(0);
  const { products, setProducts } = useProductContext();

  const refetch = (): void => setReload((prev) => prev + 1);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData(): Promise<void> {
      try {
        if (products.length > 0) {
          return;
        }
        // console.log("fetch");
        const res = await axios.get("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        const data: Product[] = res.data.products;
        setResponse(() => {
          return data;
        });
        setProducts(() => {
          return data;
        });
      } catch (err) {
        setError(err.message);
        console.log(err);
      } finally {
        setLoading(false);
        return controller.abort();
      }
    }
    fetchData();
  }, [reload]);

  return { response, loading, error, refetch };
};

export default useAxios;
