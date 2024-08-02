import { useContext } from "react";
import { Link } from "react-router-dom";
import { DroneContext } from "../context/DroneContext";

function DroneFleetOverview() {
  const { userData } = useContext(DroneContext);

  if (!userData || !userData.drones) {
    return (
      <div className="text-center text-2xl text-gray-600 mt-10">Loading...</div>
    );
  }

  return (
    <main
      className="min-h-screen p-4 sm:p-6 md:p-10"
      style={{
        background: "linear-gradient(to right, #85a4c8 0%, #c8d2de 100%)",
      }}
    >
      <div
        className="max-w-full sm:max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F7F7F7 0%, #F0F0F0 100%)",
        }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-barlow font-semibold text-center my-6 sm:my-10 text-[#4534AC]">
          Drone Fleet Overview
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-500">
            <thead>
              <tr className="bg-[#b9b0eb] text-[#000000]">
                <th className="py-3 px-4 border border-slate-600 text-center text-sm sm:text-base">
                  Drone ID
                </th>
                <th className="py-3 px-4 border border-slate-600 text-center text-sm sm:text-base">
                  Status
                </th>
                <th className="py-3 px-4 border border-slate-600 text-center text-sm sm:text-base">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.drones.map((drone, index) => (
                <tr
                  key={drone.id}
                  className="border-b border-gray-200 hover:bg-gray-100 text-center"
                >
                  <td
                    className={`py-3 px-4 border border-slate-700 text-sm sm:text-base ${
                      index === userData.drones.length - 1
                        ? "rounded-bl-2xl"
                        : ""
                    }`}
                  >
                    {drone.id}
                  </td>
                  <td className="py-3 px-4 border border-slate-700">
                    <span
                      className="rounded-full text-xs sm:text-sm font-semibold"
                      style={{
                        backgroundColor:
                          drone.status === "Available"
                            ? "#9AE6B4"
                            : drone.status === "In-flight"
                            ? "#90CDF4"
                            : drone.status === "Maintenance"
                            ? "#FAF089"
                            : "#E2E8F0",
                        color:
                          drone.status === "Available"
                            ? "#22543D"
                            : drone.status === "In-flight"
                            ? "#2A4365"
                            : drone.status === "Maintenance"
                            ? "#744210"
                            : "#2D3748",
                        paddingTop: "4px",
                        paddingBottom: "4px",
                        paddingLeft: "8px",
                        paddingRight: "8px",
                      }}
                    >
                      {drone.status}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 border border-slate-700 ${
                      index === userData.drones.length - 1
                        ? "rounded-br-2xl"
                        : ""
                    }`}
                  >
                    <Link
                      to={`/drone/${drone.id}`}
                      className="bg-white text-[#4534AC] hover:bg-[#4534AC] hover:text-white  font-bold py-1 px-2 sm:py-2 sm:px-4 rounded text-xs sm:text-sm  hidden sm:block w-fit m-auto shadow-lg "
                    >
                      View Details
                    </Link>

                    <Link
                      to={`/drone/${drone.id}`}
                      className="bg-white text-[#4534AC] hover:bg-[#4534AC] hover:text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded text-xs sm:text-sm  block sm:hidden w-fit m-auto shadow-lg "
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default DroneFleetOverview;
