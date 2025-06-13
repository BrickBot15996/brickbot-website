import ComingSoon from "../components/coming-soon";
import LoadingScreen from "../components/brickbot-loading";

export default function OurTeam() {
  return (
    <section>
      <LoadingScreen />
      <ComingSoon
        pageName="Our Team"
        pageDescription="BrickBot Team's Presentation"
      />
    </section>
  );
}
