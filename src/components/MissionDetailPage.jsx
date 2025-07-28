import { useParams, Link } from "react-router-dom";

import MissionLogDetail from "../components/MissionLogDetail";
import missionData from "../mission_data/mission_data";

const MissionLogDetailPage = () => {
  const { id } = useParams();
  const project = missionData.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
        <p className="text-xl font-[rajdhani]">Mission not found 🛸</p>
      </div>
    );
  }

  return <MissionLogDetail project={project} />;
};

export default MissionLogDetailPage;
