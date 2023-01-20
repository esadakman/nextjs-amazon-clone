import Image from "next/image";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectItems,selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Head from "next/head";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Checkout Page</title>
      </Head>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto mt-28" >
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm  ">
          <Image
            src="https:links.papareact.com/ikj"
            width={1050}
            height={250}
            alt="shopping banner" 
            priority={true}
            className="w-auto h-auto object-contain "
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Your Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md min-w-fit">
          {items.length > 0 && (
            <>
              <h2>
                Subtotal ({items.length} items):
                <span className="font-bold">
                  <Currency quantity={total} />
                </span>
              </h2>
              <button
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
