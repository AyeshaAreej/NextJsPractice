import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <div>
        <Link href="/product">Product</Link>
      </div>
      <Link href="/post">Posts</Link>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

export default Home;
