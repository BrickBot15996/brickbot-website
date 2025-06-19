import LoadingScreen from "@/app/components/brick-loading";
import ComingSoon from "../../components/coming-soon";

export default function Sparks() {
  return (
    <section>
      <LoadingScreen />
      <ComingSoon
        pageName="Sparks"
        pageDescription="FTC Connections Project"
      />
    </section>
  );
}
