import LoadingScreen from "@/app/components/brick-loading";
import ComingSoon from "../../components/coming-soon";

export default function BrickBotIsHere() {
  return (
    <section>
      <LoadingScreen />
      <ComingSoon
        pageName="Checkpoint"
        pageDescription="Public Interaction Project"
      />
    </section>
  );
}
