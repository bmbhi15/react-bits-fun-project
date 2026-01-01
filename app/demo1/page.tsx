import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col min-h-screen w-full max-w-6xl items-center justify-between gap-5 py-32 px-16 bg-white dark:bg-black sm:items-start  border">
        <h1 className="text-4xl text-center self-center ">Demo 1</h1>
        <div className="flex-1 border w-full self-center"></div>
      </main>
    </div>
  );
};

export default page;
