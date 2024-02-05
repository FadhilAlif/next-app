import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Script from "next/script";
import Image from "next/image";

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
      <div className="flex items-center">
        <span className="text-white font-bold flex items-center gap-4 mr-4">
          {data?.user?.name}
          {""}
          {data?.user?.image && (
            <Image
              src={data.user.image}
              alt={data.user.name}
              width={100}
              height={100}
              className="w-10 rounded-full"
            />
          )}
        </span>
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
