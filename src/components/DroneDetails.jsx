import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DroneContext } from "../context/DroneContext";

function DroneDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userData } = useContext(DroneContext);

  const drone = userData.drones.find((drone) => drone.id === id);

  if (!drone) {
    return (
      <div className="text-center text-2xl text-red-500 mt-10">
        Drone not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-[#85a4c8] to-[#c8d2de]">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        <div className="bg-[#4534AC] text-white p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-white text-[#4534AC] hover:bg-gray-200 font-bold py-2 px-4 rounded transition duration-300 text-sm sm:text-base flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back
            </button>
            <h1 className="text-2xl sm:text-3xl font-barlow font-semibold">
              Drone: {drone.id}
            </h1>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <DetailCard title="Status" value={drone.status} />
            <DetailCard
              title="Total Flight Hours"
              value={`${drone.flight_hours} hours`}
            />
            <DetailCard
              title="Battery Status"
              value={`${drone.battery_status}`}
            />
            <DetailCard
              title="Last Known Location"
              value={`${drone.last_known_location[0]}, ${drone.last_known_location[1]}`}
            />
            <DetailCard
              title="Current Mission"
              value={drone.current_mission}
              colSpan="sm:col-span-2"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#4534AC]">
            Maintenance Logs
          </h2>
          <div className="bg-gray-100 rounded-lg p-4">
            {drone.maintenance_logs.map((log, index) => (
              <div
                key={index}
                className="mb-4 last:mb-0 bg-white p-4 rounded-lg shadow"
              >
                <p className="font-semibold text-[#4534AC]">{log.date}</p>
                <p className="text-gray-700">{log.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Technician: {log.technician}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function DetailCard({ title, value, colSpan = "" }) {
  return (
    <div className={`bg-gray-100 p-4 rounded-lg ${colSpan}`}>
      <h3 className="text-sm font-semibold text-gray-500 mb-1">{title}</h3>
      <p className="text-lg text-[#4534AC]">{value}</p>
    </div>
  );
}

export default DroneDetails;
