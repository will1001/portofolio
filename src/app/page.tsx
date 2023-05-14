import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <Image
          className="absolute h-[100vh]"
          src="/radial_efect.png"
          alt=""
          fill
        />
        <Image
          className="absolute h-[100vh]"
          src="/curveline.png"
          alt=""
          fill
        />
        <div className="grid grid-cols-2 ">
          <div className="flex items-center justify-center ">
            <div className="text-4xl w-[420px] space-y-6 z-10">
              <span>Hai! </span>
              <span className="font-bold">Im Wili</span>
              <br />
              <span className="font-bold">Full Stack </span>
              <span>Developer </span>
              <br />
              <p className="text-sm">
                Full-stack developer. For the past 6 years, I have been working
                with many startups in Indonesia to develop great software.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end  relative">
            <Image
              className="h-[500px]"
              src="/circle.png"
              alt=""
              width="440"
              height="500"
            />
            <Image
              className="absolute left-10 h-[500px]"
              src="/wili.png"
              alt=""
              width="320"
              height="200"
            />
          </div>
        </div>
      </div>
    </>
  );
}
