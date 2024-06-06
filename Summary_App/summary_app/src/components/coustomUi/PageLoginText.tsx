import { Link } from "react-router-dom";

const PageLoginText = () => {
  return (
    <p className="mt-4 text-small-regular text-light-2  text-center ">
      Do you have an account?{" "}
      <Link to="/sign/up" className="text-small-semibold ml-1 text-primary-600 ">
        sign-up
      </Link>{" "}
    </p>
  );
};

export default PageLoginText;
