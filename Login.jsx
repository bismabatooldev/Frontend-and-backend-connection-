import { Link } from "react-router-dom"
import "../Style/Login.css"
import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        axios.post('http://localhost:1946/login', {
          email: data.email,
          password:  data.password
        })
        .then(response => {
          console.log(response.data)
          navigate('/')
        })
        .catch(error => {
          console.log('Error:', error);
        });
      };


  return (
    <div  className="pre">
<div className="login-card">
  <div className="card-header">
    <div className="log">Login</div>
  </div>
  <form>
    <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input required name="username" id="username" type="text" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input required name="password" id="password" type="password" />
    </div>
    <Link to={'/'}><div className="form-group">
      <input defaultValue="Login" type="submit" />
    </div></Link>
  </form>
</div>



   

    </div>
  )
}

export default Login
