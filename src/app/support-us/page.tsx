import ComingSoon from "../components/coming-soon";
import LoadingScreen from "../components/brickbot-loading";

export default function SupportUs() {
  return (
    <section>
      <LoadingScreen />
      <ComingSoon
        pageName="Support Us"
        pageDescription="BrickBot Team's Sponsor Partnerships"
      />
    </section>
  );
}
