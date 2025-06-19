import LoadingScreen from "../components/brick-loading";
import ComingSoon from "../components/coming-soon";

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
