import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Head from "next/head";

function Orders({ orders }) {
    // const { data: session } = useSession();
  return (
    <>
      <Header />
      <div className="bg-gray-100 h-screen mt-28">
        <Head>
          <title>Orders</title>
        </Head>
        <main className="max-w-screen-lg mx-auto p-10">
          <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
            Your Orders
          </h1>
        </main>
      </div>
    </>
  );
}

export default Orders;
