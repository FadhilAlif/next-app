import LoginViews from "@/views/auth/login";
import Head from "next/head";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginViews />
    </>
  );
};

export default LoginPage;
