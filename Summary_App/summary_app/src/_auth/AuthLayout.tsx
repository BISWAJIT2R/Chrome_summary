import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="relative h-full">
      <section className="flex  flex-1 justify-center items-center flex-col py-10">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
