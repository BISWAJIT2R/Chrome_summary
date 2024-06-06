import { Link } from "react-router-dom";

const PageLinkText = () => {
  return (
    <p className="mt-4 text-small-regular text-light-2  text-center ">
      Do you have an account?{" "}
      <Link
        to="/"
        className="text-small-semibold ml-1 text-primary-600 "
      >
        sign-in
      </Link>{" "}
    </p>
  );
};

export default PageLinkText;
