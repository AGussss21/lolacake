import { useEffect, useState } from "react";
import  API  from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Daftar Produk Lola Cake</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - Rp{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
