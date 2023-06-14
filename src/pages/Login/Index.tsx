import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {};
  return (
    <div>
      <img
        src={require("../../images/login-bg.png")}
        className="w-full"
        alt="background"
      />
      <div className="w-[48%] m-auto bg-white absolute left-96 top-20">
        <div className="shadow">
          <img
            src={require("../../images/amazon-logo.png")}
            className="w-24 m-auto py-3"
          />
        </div>
        <div className="mx-32 mb-12">
          <div className="text-green-600 text-4xl mt-4 mb-6 text-center">
            Login
          </div>
          <img
            src={require("../../images/login-tree.png")}
            className="w-full"
            alt="background"
          />
          <div className="m-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-4">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  {...register("email")}
                  className={
                    errors.email
                      ? "border-red-500 placeholder-[#20B716] border-b-2 w-full"
                      : "placeholder-[#20B716] border-b-2 w-full text-lg"
                  }
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  {...register("password")}
                  className={
                    errors.password
                      ? "border-red-500 placeholder-[#20B716] border-b-2 w-full"
                      : "placeholder-[#20B716] border-b-2 w-full text-lg"
                  }
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#20b716] text-xl h-12 text-white px-4 py-2 rounded-full w-full"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-between mt-4 font-semibold">
            <button className="text-black">Forgot Password?</button>
            <button className="text-[#D9185F]">New User? Sign up</button>
          </div>
          <div className="text-center my-4 text-sm font-semibold">or</div>
          <div className="flex items-center bg-blue-500 px-1 py-1 rounded mb-2 cursor-pointer">
            <img src={require("../../images/google-icon.png")} className="" />
            <span className="text-white m-auto text-lg">
              Continue with Google
            </span>
          </div>
          <div className="flex items-center bg-blue-500 px-1 py-1 rounded cursor-pointer">
            <img src={require("../../images/facebook-icon.png")} className="" />
            <span className="text-white m-auto text-lg">
              Continue with Facebook
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("The email field is required"),
  password: Yup.string().required("The password field is required"),
});
