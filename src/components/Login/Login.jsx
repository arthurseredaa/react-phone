import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../redux/actions/login";

export const Login = ({ isLogin, isLoading }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitData = (data) => dispatch(userLogin(data));

  useEffect(() => {
    if (isLogin && !isLoading) {
      history.push("/");
    }
  }, [isLogin, isLoading, history]);

  return (
    <div className="flex justify-center align-middle h-full">
      <form
        className="w-60"
        onSubmit={handleSubmit(handleSubmitData)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="email"
          name="email"
          ref={register()}
        />
        <input
          className="bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="password"
          name="password"
          ref={register()}
        />
        <button
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};
