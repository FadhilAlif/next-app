import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterViews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const { push } = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError([]);
    setIsLoading(true);
    const data = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      e.target.reset();
      setIsLoading(true);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-slate-950 text-center p-10">
        Register Page
      </h1>
      <div className="mt-20">
        <form onSubmit={handleSubmit} className="w-[30%] mx-auto">
          <div className="mb-5">
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
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
            className="text-white bg-slate-950 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full justify-center py-2.5 text-center"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
          {error && (
            <p className="text-red-500 mt-2 text-center font-semibold">
              {error}
            </p>
          )}
        </form>
      </div>
      <p className="mt-5 text-center text-md font-semibold text-slate-800">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-blue-600 hover:text-blue-700 underline"
        >
          Sign In
        </Link>{" "}
        here
      </p>
    </div>
  );
};

export default RegisterViews;
