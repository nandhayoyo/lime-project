import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import FraudSection from "./component/FraudSection";
import SupplySection from "./component/SupplySection";

export default function Home() {
  return (
    <div>
      <Hero />
      <FraudSection />
      <SupplySection />
    </div>
  );
}
