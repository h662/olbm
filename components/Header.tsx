import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Logo from "../public/images/logo.png";

const Header: FC = () => {
  return (
    <header className="flex justify-center py-4 md:py-6">
      <div className="w-20 md:w-40">
        <Link href="/">
          <Image src={Logo} alt="OLBM" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
