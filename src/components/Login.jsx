import { useContext } from "react";

//assets
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { DroneContext } from "../context/DroneContext";

function Login({ isLoggedIn }) {
  const {
    userData,
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleLogin,
    handleLogout,
  } = useContext(DroneContext);

  if (!userData) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to the Drone Management Interface
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <main
      className="w-full min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(to right, #85a4c8 0%, #c8d2de 100%)",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="w-full max-w-[648px] flex flex-col gap-6 p-6 sm:p-[60px] rounded-2xl border border-solid border-[#CECECE]"
        style={{
          background: "linear-gradient(180deg, #F7F7F7 0%, #F0F0F0 100%)",
        }}
      >
        <h1 className="font-barlow font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight text-center">
          Welcome to the <br />
          <span className="text-[#4534AC]">Drone</span>
          <br />
          <span className="text-[#4534AC]">Management Interface</span>!
        </h1>

        <div className="flex flex-col gap-4 sm:gap-[22px]">
          <div className="flex flex-col gap-4 sm:gap-6 relative">
            <input
              type="text"
              placeholder="Enter Your Username"
              className="w-full rounded-lg py-3 sm:py-4 px-3 bg-[#EBEBEB] animate-dissolve border-none outline-none caret-[#999999]"
              name="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                className="w-full rounded-lg py-3 sm:py-4 px-3 bg-[#EBEBEB] animate-dissolve border-none outline-none caret-[#999999]"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VscEyeClosed /> : <VscEye />}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`w-full rounded-lg border border-solid p-2 text-white ${
                username !== "" && password !== ""
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              style={{
                background:
                  "linear-gradient(to right, #2355a0 0%, #2355a0 100%)",
                boxShadow: "0px 12px 16px 0px #BABABA33 inset",
              }}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Login;
