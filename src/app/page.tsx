// app/page.tsx
import { redirect } from "next/navigation";
import LoadingScreen from "./components/brick-loading";

export default function RootRedirect() {
  redirect("/home");
  return <LoadingScreen />;
}
