import Image from "next/image";
import MainNav from "./MainNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbed, faHeart, faShop } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full items-center px-[7rem] bg-white pt-3">
      <div className="w-3/12">
        <Image src="/images/logo.webp" width="120" height="30" alt="Logo"/>
      </div>
      <MainNav/>
      <div className="w-2/12">
        <ul className="flex items-center">
          <li>
            <Link href="/" className="flex relative w-10 h-10">
              <FontAwesomeIcon icon={faHeart} className="w-5"/>
              <span className="absolute top-1 right-2 bg-green-600 text-white text-xs w-[15px] height-[13px] text-center rounded-full">1</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex relative w-10 h-10">
              <FontAwesomeIcon icon={faCartFlatbed} className="w-5"/>
              <span className="absolute top-1 right-2 bg-green-600 text-white text-xs w-[15px] height-[13px] text-center rounded-full">3</span>
            </Link>
          </li>
          <li>
            item: <span className="font-bold">$150.00</span>
          </li>
        </ul>
      </div>
    </header>
  )
}
