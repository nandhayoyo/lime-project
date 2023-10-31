import Hero from "./component/Hero";
import FraudSection from "./component/FraudSection";
import SupplySection from "./component/SupplySection";
import FaQ from "./component/FaQ";
import DashboardSection from "./component/DashboardSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Toaster />

      <Hero />
      <FraudSection />
      <SupplySection />
      <FaQ />
      <DashboardSection />
    </div>
  );
}
