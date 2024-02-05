import Navbar from "@/components/layouts/Navbar";
import { useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data }: any = useSession();

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-center text-3xl mt-10 font-bold">
        Hello {data && data.user.name}
      </h1>
    </div>
  );
}
