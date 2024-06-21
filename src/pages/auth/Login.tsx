import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { UserService } from "../../services/userService";
import { useAppDispatch } from "../../hooks/authHooks";
import { login } from "../../contexts/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userSchema = object({
    email: string()
    .email("Email inválido.")
    .required("Campo requerido."),
    password: string()
      .required("Campo requerido.")
  });
  const FormikLogin = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema:userSchema,
    onSubmit: async (values)=>{
      try {
        const user = await UserService.login(values)
        if(user){
          dispatch(login(user))
          navigate("/app")
          return;
        }
        console.log("credenciales incorrectas")
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <>
      <form onSubmit={FormikLogin.handleSubmit} className="flex w-full flex-col gap-y-4 p-2 text-4xl text-stone-800" >
        <h1 className="text-center text-stone-950 mb-8">Inicia sesión</h1>
        <label className="input  bg-transparent input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input id="email" name="email" 
          onChange={FormikLogin.handleChange}
          onBlur={FormikLogin.handleBlur} 
          value={FormikLogin.values.email} type="text" className="grow" placeholder="Email" />
          {FormikLogin.touched.email && FormikLogin.errors.email ? (
          <div className="text-xs pl-6 text-red-700">{FormikLogin.errors.email}</div>
        ) : null}
        </label>
        <label className="input  bg-transparent input-bordered flex items-center gap-2">
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
          <input id="password" name="password" 
          onChange={FormikLogin.handleChange}
          onBlur={FormikLogin.handleBlur} 
          value={FormikLogin.values.password} type="password" className="grow" placeholder="********" />
          {FormikLogin.touched.password && FormikLogin.errors.password ? (
          <div className="text-xs pl-6 text-red-700">{FormikLogin.errors.password}</div>
        ) : null}
        </label>
        <button type="submit" className="btn w-full">Login</button>
        <Link to={`../regist`} className="btn w-full bg-transparent text-stone-950 hover:text-slate-200">Crear cuenta</Link>
      </form>
    </>
  );
}
