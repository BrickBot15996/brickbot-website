import ComingSoon from "../components/coming-soon";
import LoadingScreen from "../components/brickbot-loading";

export default function blog() {
  return (
    <section>
      <LoadingScreen />
      <ComingSoon
        pageName="BrickLog"
        pageDescription="BrickBot Team's Official Blog"
      />
    </section>
  );
}
