import { DEMO_LIST } from "@/constants";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col min-h-screen w-full max-w-6xl items-center justify-between gap-5 py-32 px-16 bg-white dark:bg-black sm:items-start  border">
        <h1 className="text-4xl text-center self-center ">
          React Bits - Demo{" "}
        </h1>
        <div className="flex-1 border w-full self-center">
          <div className="grid grid-cols-3 gap-5 ">
            {DEMO_LIST.map((demo, id) => (
              <div key={id} className="col-span-1 border-2">
                <h1>{demo.demo_name}</h1>
                <h1>{demo.demo_name}</h1>
                <Link href={demo.demo_path}>
                  <h1>Navigate to the {demo.demo_name}</h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
