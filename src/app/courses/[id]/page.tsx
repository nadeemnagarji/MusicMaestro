import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen py-12 pt-36  flex flex-col items-center">
      <h1 className=" text-center md:text-7xl capitalize ">
        Still in development
      </h1>
      <div className="mt-4 mx-auto">
        <Link href="/">
          <Button
            borderRadius="1.75rem"
            className="bg-white  dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Go to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
