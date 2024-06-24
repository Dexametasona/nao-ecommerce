import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { UserService } from "../../services/userService";
import { useAppDispatch } from "../../hooks/authHooks";
import { login } from "../../contexts/authSlice";
import { User } from "../../interfaces/user";

export default function Regist() {
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

  const userSchema = object({
    username: string()
      .min(5, "Minimo 5 caracteres.")
      .required("Campo requerido."),
    email: string().email().required("Campo requerido."),
    password: string()
      .required("Campo requerido.")
      .matches(
        passwordRegex,
        "Mínimo 1 mayúscula, minúscula, número y entre 8 a 32 caracteres."
      ),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const FormikRegist = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      try {
        const response = await UserService.register(values);
        if (response.status >= 200 && response.status < 300) {
          console.log("Nuevo usuario registrado.", response.data);
          dispatch(login(response.data as User));
          navigate("/app");
          return;
        }
        console.log("ocurrio un error.");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <>
      <form
        onSubmit={FormikRegist.handleSubmit}
        className="flex w-full flex-col p-2 text-4xl text-stone-800"
      >
        <h1 className="text-center text-stone-950 mb-8">Registrarse</h1>
        <label className="input bg-transparent input-bordered mt-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            id="username"
            name="username"
            onChange={FormikRegist.handleChange}
            onBlur={FormikRegist.handleBlur}
            value={FormikRegist.values.username}
            type="text"
            className="grow"
            placeholder="Username"
          />
        </label>
        {FormikRegist.touched.username && FormikRegist.errors.username ? (
          <div className="text-sm pl-6 text-red-700">
            {FormikRegist.errors.username}
          </div>
        ) : null}
        <label className="input  bg-transparent input-bordered mt-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            id="email"
            name="email"
            onChange={FormikRegist.handleChange}
            onBlur={FormikRegist.handleBlur}
            value={FormikRegist.values.email}
            type="text"
            className="grow"
            placeholder="Email"
          />
        </label>
        {FormikRegist.touched.email && FormikRegist.errors.email ? (
          <div className="text-sm pl-6 text-red-700">
            {FormikRegist.errors.email}
          </div>
        ) : null}
        <label className="input  bg-transparent input-bordered mt-4 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            id="password"
            name="password"
            onChange={FormikRegist.handleChange}
            onBlur={FormikRegist.handleBlur}
            value={FormikRegist.values.password}
            type="password"
            className="grow"
            placeholder="********"
          />
        </label>
        {FormikRegist.touched.password && FormikRegist.errors.password ? (
          <div className="text-sm pl-6 text-red-700">
            {FormikRegist.errors.password}
          </div>
        ) : null}
        <button type="submit" className="btn w-full mt-4">
          Crear cuenta
        </button>
        <Link
          to={`../login`}
          className="btn w-full mt-4 bg-transparent text-stone-950 hover:text-slate-200"
        >
          Ya tienes cuenta?
        </Link>
      </form>
    </>
  );
}
