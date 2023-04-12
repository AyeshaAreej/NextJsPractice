import Link from "next/link";
function ProductList({ productId = 100 }) {
  return (
    <>
      <Link href="/">Home </Link>
      <h1>Product List</h1>
      <Link href={`/product/${productId}`}>Product {productId}</Link>
    </>
  );
}

export default ProductList;
