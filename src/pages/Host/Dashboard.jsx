import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard goes here</h1>
      <div>
        <Outlet />
      </div>
      ;
    </>
  );
}
export default Dashboard;
