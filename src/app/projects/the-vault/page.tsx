import ComingSoon from "../../components/coming-soon";
import { theVault } from "../projects-data";

export default function TheVault() {
  return (
    <section>
      <ComingSoon
        pageName={theVault.name}
        pageDescription={theVault.subtitle}
        textColor={theVault.textColor}
        gradientColor={theVault.gradientColor}
      />
    </section>
  );
}
