import Image from "next/image";

const Custom404 = () => {
  return (
    <div className="bg-white w-full h-screen flex flex-col items-center justify-center gap-4">
      {/* <Image src="/NotFound.png" className="w-1/3" /> */}
      <Image
        src="/NotFound.png"
        alt="404"
        width={600}
        height={600}
        className="w-1/3"
      />
      <h1 className="text-4xl text-slate-900 font-bold  ">
        404 | Page Not Found
      </h1>
    </div>
  );
};

export default Custom404;
