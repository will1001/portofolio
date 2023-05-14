import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <img className="absolute h-[100vh]" src="./radial_efect.png" alt="" />
        <img className="absolute h-[100vh]" src="./curveline.png" alt="" />
        <div className="grid grid-cols-2 ">
          <div className="flex items-center justify-center ">
            <div className="text-4xl w-[420px] space-y-6 z-10">
              <span>Hai! </span>
              <span className="font-bold">I'm Wili</span>
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
          <div className="flex flex-col items-center justify-center  relative">
            <img className="h-[500px]" src="./circle.png" alt="" />
            <img
              className="absolute left-45 h-[500px]"
              src="./wili.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
