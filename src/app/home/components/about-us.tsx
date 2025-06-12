import Carousel from "../../components/generic-carousel";

export default function AboutUs() {
  return (
    <section className="flex flex-col h-auto w-full space-y-[0.5rem]">
      <h1 className="text-[var(--default-yellow)] font-extrabold text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]">
        About Us
      </h1>
      <p className="text-[1.25rem]/[1.85rem] md:text-[1.5rem]/[2.1rem] xl:text-[1.75rem]/[2.35rem] font-medium text-[var(--default-text)] w-[100%] lg:w-[90%] xl:w-[85%] 2xl:w-[75%] mb-[2.5rem] md:mb-[3rem] lg:mb-[3.5rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        temporibus molestiae omnis saepe dolorem, dignissimos nobis dolorum
        velit explicabo exercitationem nulla eaque, asperiores eligendi sequi
        molestias quae optio ipsum. Ipsam.
      </p>
      <Carousel
        content={[
          {
            imageSrc: "/random.jpg",
            alt: "Random Brickbot",
            aspectRatio: "16/9",
            description: "BrickBot at FTC Championship 2028 in Las Vegas",
          },
          {
            imageSrc: "/random.jpg",
            alt: "Random Brickbot",
            aspectRatio: "16/9",
            description: "BrickBot at FTC Championship 2028 in Las Vegas",
          },
          {
            imageSrc: "/random.jpg",
            alt: "Random Brickbot",
            aspectRatio: "16/9",
            description: "BrickBot at FTC Championship 2028 in Las Vegas",
          },
          {
            imageSrc: "/random.jpg",
            alt: "Random Brickbot",
            aspectRatio: "16/9",
            description: "BrickBot at FTC Championship 2028 in Las Vegas",
          },
          {
            imageSrc: "/random.jpg",
            alt: "Random Brickbot",
            aspectRatio: "16/9",
            description: "BrickBot at FTC Championship 2028 in Las Vegas",
          },
        ]}
        buttonAccentColor="var(--default-yellow)"
        buttonGradientLight="var(--yellow-gradient-light)"
        buttonGradientDark="var(--yellow-gradient-dark)"
        buttonLitUpLight="var(--lit-up-yellow-gradient-light)"
        buttonLitUpDark="var(--lit-up-yellow-gradient-dark)"
      />
    </section>
  );
}
