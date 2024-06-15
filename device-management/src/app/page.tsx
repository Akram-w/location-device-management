import { useAuth } from "@/hooks/useAuth";
import Login from "./login/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  const auth = useAuth();
    return(
      auth ? (
        <Dashboard/>
      ):(
        <Login/>
      )
    )
}
