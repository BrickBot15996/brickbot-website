import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div
      lang="en"
      className="overflow-x-hidden flex flex-col"
    >
      <Navbar></Navbar>
      <main>
        <FrontImage></FrontImage>
      </main>

      <footer></footer>
    </div>
  );
}

function FrontImage() {
  return (
    <div className="relative h-[702px] w-full flex flex-col">
      <div>
        <div className="flex flex-col items-center justify-center absolute w-full h-[700px] bg-[linear-gradient(70deg,_#000000_30%,_transparent)] z-10">
          <div className="absolute left-[25px] z-20 text-[#ffd100] text-[3vw] font-extrabold px-4">
            <p className="mt-[-10px] mb-[-10px]">We build our future</p>
            <p className="mt-[-10px] mb-[-10px]">Brick by Brick!</p>
            <Link href="/support-us">
              <button className="cursor-pointer flex items-center justify-center h-[3vw] w-[15vw] max-w-full bg-[linear-gradient(180deg,_#7D6800_0%,_#413400_50%)] text-[#ffd100] font-extrabold text-[1.25vw] rounded-[1.5vw] hover:opacity-75 border-2 border-[#ffd100] mt-[1vw]">
                BECOME A SPONSOR
              </button>
            </Link>
          </div>
        </div>
        <Image
          src="/random.jpg"
          alt="random"
          height={1280}
          width={1920}
          className="w-[1920px] h-[700px] object-cover z-[-1] opacity-50 ml-auto mr-[-150px]"
        />
      </div>
      <div className="w-full h-[2px] bg-[linear-gradient(90deg,_#000000_10%,_#ffd100_35%,_#000000_85%)] z-10 opacity-50"></div>
    </div>
  );
}
