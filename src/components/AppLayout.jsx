import FlightRecord from "../FlightRecord";
import Footer from "../Footer";
import Hero from "../Hero";
import LaunchSequence from "../LaunchSequence";
import MissionLog from "../MissionLog";
import Navbar from "../NavBar";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionLog />
      <FlightRecord />
      <LaunchSequence />
      <Footer />
    </>
  );
};

export default AppLayout;
