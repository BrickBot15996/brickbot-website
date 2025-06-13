import { useRouter } from "next/navigation";

import Image from "next/image";

import Button from "../../components/brickbot-button";

export default function Banner() {
  const router = useRouter();

  return (
    <section className="relative w-full flex flex-col">
      <div className="relative flex h-[30rem] md:h-[35rem] lg:h-[45rem] w-full">
        <Image
          src="/banner.jpg"
          alt="BrickBot Group Photo"
          fill
          className="object-cover z-1 opacity-90 translate-x-[22.5%] select-none"
        />
        <div className="flex items-center mr-auto h-full w-full bg-[linear-gradient(70deg,_var(--default-dark)_30%,_transparent)] z-2">
          <div className="flex flex-col z-10  ml-[1.5rem] md:ml-[2rem] lg:ml-[3rem] xl:ml-[4rem] space-y-[2rem]">
            <p className="text-[var(--default-yellow)] font-extrabold text-[2.25rem]/[2.85rem] md:text-[2.75rem]/[3.35rem] lg:text-[3rem]/[3.6rem]">
              We build our future
              <br />
              Brick by Brick!
            </p>
            <Button
              text="BECOME A SPONSOR"
              arrow={true}
              accentColor="var(--default-yellow)"
              gradientColorLight="var(--yellow-gradient-light)"
              gradientColorDark="var(--yellow-gradient-dark)"
              action={() => router.push("/support-us")}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[0.15rem] md:[0.3rem] lg:[0.4rem] bg-[linear-gradient(90deg,_var(--default-dark)_10%,_var(--default-yellow)_35%,_var(--default-dark)_85%)] opacity-50" />
    </section>
  );
}
