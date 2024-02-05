import { query } from "firebase/firestore";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginViews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const { push } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError([]);
    setIsLoading(true);
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const res = await signIn("credentials", {
        email: e.target.value,
        password: e.target.value,
        callbackUrl,
        redirect: false,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or Password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or Password is incorrect");
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-slate-950 text-center p-10">
        Login Page
      </h1>
      <div className="mt-20">
        <form onSubmit={handleSubmit} className="w-[30%] mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="•••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-slate-950 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full justify-center py-2.5 text-center mb-4"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          {error && (
            <p className="text-red-500 mt-2 text-center font-semibold">
              {error}
            </p>
          )}
        </form>
        <button
          onClick={() => signIn("google", { callbackUrl, redirect: false })}
          className="w-full font-medium text-md text-center text-slate-800 hover:text-slate-800"
        >
          Sign In With Google
        </button>
      </div>
      <p className="mt-5 text-center text-md font-semibold text-slate-800">
        Don`t have an account?{" "}
        <Link
          href="/auth/register"
          className="text-blue-600 hover:text-blue-700 underline"
        >
          Sign Up
        </Link>{" "}
        here
      </p>
    </div>
  );
};

export default LoginViews;
