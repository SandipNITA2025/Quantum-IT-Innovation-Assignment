import TableData from "../../components/Table";

const Home = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const logout = () => {
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      {userData && (
        <div className=" flex w-[80vw] items-center justify-between text-lg text-black py-6">
          <h1>Welcome, {userData?.user?.name}!</h1>
          <button
            className="w-fit text-[15px] bg-[#00f5e1] text-black p-1 px-2 uppercase rounded-lg"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      )}
      <TableData />
    </div>
  );
};

export default Home;
