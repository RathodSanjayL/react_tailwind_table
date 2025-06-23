
import Compliance from "./components/Compliance";
import DashboardHeader from "./components/DashboardHeader";
import Header from "./components/Header";
import Negotiating from "./components/Negotiating";
import Presenting from "./components/Presenting";
import PrivateBanking from "./components/PrivateBanking";
import Prospecting from "./components/Prospecting";

function App() {
  return (
    <main className="mb-10">
      <Header />
      <PrivateBanking />
      <DashboardHeader />
      <Prospecting />
      <Presenting />
      <Negotiating />
      <Compliance />
    </main>
  );
}

export default App;
