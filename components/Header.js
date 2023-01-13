import Image from "next/image";

function Header() {
  return (
    <header className="fixed w-screen top-0 z-50 grid bg-white shadow-lg">
      <div>
        <div>
          <Image
          src="https:links.papareact.com/f90"
          width={100}
          height={40}
          alt="amazon logo"
          priority={true}
          className="w-auto h-auto cursor-pointer"

          />
        </div>
      </div>
    </header>
  );
}

export default Header;
