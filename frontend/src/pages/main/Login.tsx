import { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import { useLoginMutation } from "@/redux/features/user/authApi";
import { verifyToken } from "@/utils/verifyToken";
import { TUser, userLoggedIn } from "@/redux/features/user/authSlice";
import { TResponse } from "@/interface/globalInterface";

export default function Login() {
  window.scrollTo(0, 0);
  const { loggedUser } = useAppSelector((store) => store.auth);
  const [login, { isLoading, isError }] = useLoginMutation();
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (loggedUser && !isError) {
      navigate(from, { replace: true });
    }
  }, [loggedUser, isError, from, navigate]);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const phone = form.phone.value;
    const password = form.password.value;

    const loginInfo = {
      phone,
      password,
    };

    const res = (await login(loginInfo)) as TResponse;

    if (res?.data?.success) {
      const user = verifyToken(res?.data?.data?.accessToken) as TUser;

      dispatch(userLoggedIn({ user, token: res?.data?.data?.accessToken }));
      toast.success("Login successful");
      setError("");
    }
    if (res?.error) {
      setError(res?.error?.data?.message);
      console.log(res);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] w-full">
      <div className="border rounded-xl p-6">
        <div className="text-center">
          <h2 className="text-lg font-medium">Welcome Back</h2>
          <p className="text-[13px] text-neutral-content">
            Enter your phone and password to login
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-6 w-[90%] sm:w-[350px]">
          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Phone"
              required
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="********"
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 text-base-100 bg-primary font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="border-t border-neutral/20 mt-6 pt-4 text-center ">
          <p className="text-[13px] text-neutral/70">
            No have any account?
            <Link
              to="/register"
              className="text-blue-500  pl-2 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
