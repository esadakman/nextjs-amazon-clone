import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/client";
function Header() {
  const [session] = useSession();

  console.log(session?.user?.name.split(" ").slice(0, 2).join(" "));

  return (
    <header>
      <div className="flex items-center bg-amazon_blue top-0 z-50  shadow-lg p-2 py-3 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https:links.papareact.com/f90"
            width={120}
            height={50}
            alt="amazon logo"
            priority={true}
            className="w-auto h-auto cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ml-2 transition-all ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* // ! Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <div className="link " onClick={!session ? signIn : signOut}>
            <p>
              {session
                ? `Hello, ${session?.user.name
                    .split(" ")
                    .slice(0, 2)
                    .join(" ")}`
                : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link ">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 -right-1 md:right-11 h-4 w-4 text-center text-amazon_blue font-bold bg-yellow-400 rounded-full">
              4
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 bg-amazon_blue-light text-white ">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopping Toolkit</p>
        {/* <p className="link hidden lg:inline-flex">Health & Personal Care</p> */}
      </div>
    </header>
  );
}

export default Header;
