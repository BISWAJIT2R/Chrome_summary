import { Route, Routes } from "react-router-dom";
import { AuthLayout, Home, HomeLayout, Login, SignIn } from "./helper";
// import { Button } from "@/components/ui/button"

const App = () => {
  return (
    <div className=" relative h-screen ">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign/up" element={<SignIn />} />
          <Route path="/" element={<Login />} />
          <Route index element={<Login />} />
        </Route>

        <Route element={<HomeLayout />}>
          <Route path="/auth/home" element={<Home />} />
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
