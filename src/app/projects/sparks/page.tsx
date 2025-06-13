import ComingSoon from "../../components/coming-soon";
import LoadingScreen from "@/app/components/brickbot-loading";

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
