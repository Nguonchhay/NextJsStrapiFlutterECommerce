import Link from "next/link";

export default function MainNav() {
  return (
    <ul className="flex font-bold">
      <li>
        <Link href="/" className="text-indigo-500">Home</Link>
      </li>
      <li className="pl-10">
        <Link href="/">Shop</Link>
      </li>
      <li className="pl-10">
        <Link href="/">Promotion</Link>
      </li>
      <li className="pl-10">
        <Link href="/">Contact</Link>
      </li>
    </ul>
  )
}
