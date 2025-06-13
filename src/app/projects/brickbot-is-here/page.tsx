import ComingSoon from "../../components/coming-soon";
import LoadingScreen from "@/app/components/brickbot-loading";

export default function BrickBotIsHere() {
  return (
    <section>
      <LoadingScreen />
      <ComingSoon
        pageName="BrickBot Is Here"
        pageDescription="Public Interaction Project"
      />
    </section>
  );
}
