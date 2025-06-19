import LoadingScreen from "@/app/components/brick-loading";
import ComingSoon from "../../components/coming-soon";

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
