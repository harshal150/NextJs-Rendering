"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Fetching API`s In Next.Js</h1>
      <br></br>
      <br></br>

      {/* fetching data on client side */}
      <button className="flex border-spacing-2 border-b-black">
      <Link href="/productlist">Go To Product1 List -- Client side fetch API </Link> 
      </button>

       {/* fetching data on server side */}
       <button className="flex border-spacing-2 border-b-black">
      <Link href="/categorylist">Go To Product2 List -- Server side fetch API </Link> 
      </button>
    </main>
  );
}
