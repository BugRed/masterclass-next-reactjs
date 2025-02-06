import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Home</h1>
      <nav>
        <Link href={'/first'}>
          FIRST COMPONENT
        </Link>
        <Link href={'/flexbox'}>
          FLEXBOX
        </Link>
      </nav>
    </div>
  );
}
