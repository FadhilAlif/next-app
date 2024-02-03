import Link from "next/link";

const RegisterViews = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>
        Have an account?{" "}
        <Link href="/auth/login" className="link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterViews;
