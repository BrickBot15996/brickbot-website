import ComingSoon from "../components/coming-soon";
import LoadingScreen from "../components/brickbot-loading";

export default function Projects() {
  return (
    <section>
      <LoadingScreen />
      <ComingSoon
        pageName="Projects"
        pageDescription="BrickBot Team's Projects"
      />
    </section>
  );
}
