import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data }: any = useSession();
  console.log(data);

  return (
    <div className={styles.navbar}>
      <div id="title" className="text-2xl font-bold text-white"></div>
      <Script
        id="onclick-title"
        strategy="afterInteractive"
      >{`document.getElementById("title").innerHTML = "Navbar"`}</Script>
      <div className="flex items-center gap-4">
        <Link
          href={"/about"}
          className="text-white font-semibold underline decoration-2 decoration-slate-300 hover:text-slate-300"
        >
          About
        </Link>
        <Link
          href={"/product"}
          className="text-white font-semibold underline decoration-2 decoration-slate-300 hover:text-slate-300"
        >
          Our Product
        </Link>
        <div className="text-white font-bold flex items-center">
          {data?.user?.name}
          {""}
          {data?.user?.image && (
            <Image
              src={data.user.image}
              alt={data.user.name}
              width={100}
              height={100}
              className="ml-2 w-10 rounded-full"
            />
          )}
          <div></div>
        </div>
        {data ? (
          <button
            onClick={() => signOut()}
            className="text-white font-semibold py-2 px-3 bg-slate-700 rounded-full hover:bg-slate-600 shadow-xl"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="text-white font-semibold py-2 px-3 bg-slate-600 rounded-full hover:bg-slate-500 shadow-xl"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
