import { useContext } from "react";
import { DroneContext } from "../context/DroneContext";

function DroneFleetOverview() {
  const { userData } = useContext(DroneContext);

  if (!userData || !userData.drones) {
    return <div>Loading...</div>;
  }

  return (
    <main
      className="min-h-screen p-6 sm:p-10"
      style={{
        background: "linear-gradient(to right, #85a4c8 0%, #c8d2de 100%)",
      }}
    >
      <div
        className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F7F7F7 0%, #F0F0F0 100%)",
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-barlow font-semibold text-center my-10 text-[#4534AC]">
          Drone Fleet Overview
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-500">
            <thead>
              <tr className="bg-[#b9b0eb] text-[#000000]  ">
                <th className="py-3 px-4  border border-slate-600 text-center">
                  Drone ID
                </th>
                <th className="py-3 px-4  border border-slate-600 text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.drones.map((drone) => (
                <tr
                  key={drone.id}
                  className="border-b border-gray-200 hover:bg-gray-100 text-center cursor-pointer "
                >
                  <td className="py-3 px-4 border border-slate-700 ">
                    {drone.id}
                  </td>
                  <td className="py-3 px-4 border border-slate-700 ">
                    <span
                      className=" rounded-full text-xs font-semibold"
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
                        paddingTop: "7px",
                        paddingBottom: "7px",
                        paddingLeft: "9px",
                        paddingRight: "9px",
                        borderRadius: "6px",
                      }}
                    >
                      {drone.status}
                    </span>
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
