import ComingSoon from "../../components/coming-soon";
import LoadingScreen from "@/app/components/brickbot-loading";

export default function TheVault() {
  return (
    <section>
      <LoadingScreen />
      <ComingSoon
        pageName="The Vault"
        pageDescription="Portfolio Library Project"
      />
    </section>
  );
}
