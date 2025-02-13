import { APP_NAME } from "@/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <span className="font-bold">
        <Link href="/">{APP_NAME}</Link>
      </span>
      <nav>
        <ul>
          <li>
            <Link href="/items/new">New Item</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
