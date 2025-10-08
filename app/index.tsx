import { useAuthContext } from "@/contexts/auth.context";
import { Redirect } from "expo-router";

export default function Index() {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) return <Redirect href="/login" />;
  else return <Redirect href="/dashboard" />;
}
