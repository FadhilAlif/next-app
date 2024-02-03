import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold text-slate-950">Login Page</h1>
      <p className="text-2xl text-red-500">
        Don`t have an account?{" "}
        <Link href="/auth/register" className="link">
          Register
        </Link>
      </p>
      <button
        className="py-2 px-3 bg-slate-700 rounded-lg hover:bg-slate-600 text-white font-semibold"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginViews;
