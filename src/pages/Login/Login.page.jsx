import './Login.css';
import loginimg from '../../assets/images/loginimg1.png';
import logo from '../../assets/logos/logo.png';
import ButtonSpinner from '../../components/ButtonSpinner/ButtonSpinner';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();

  const onClickHandle = () => {
    console.log("navigate")
    navigate("/presentation");
  }

  return (
    <div className="grid grid-cols-2 h-screen fixed">
      <div className=''>
        <div className='relative'>
          <img className='' src={loginimg} alt="capture login" />
          <div className='absolute top-0 left-0 bg-[#299094]/20 h-full w-full'></div>
        </div>
      </div>
      <div className='items-center mt-10'>
        <div className='flex justify-center mb-4 ' >
          <img className='h-28 w-28' src={logo} alt="henddu logo" />
        </div>
        <h1 className='text-center text-4xl mb-2'>Welcome !!</h1>
        <div className='text-center'>
          <small >Please enter your credentials to log in</small>
        </div>
        <form className='text-sm mt-10 mx-32'>
          <label>Email / ID</label>
          <br />
          <InputText className='border rounded-md w-full p-2 mt-1' keyfilter="email" placeholder='user@gmail.com' />

          <br />
          <br />
          <label>Password</label>
          <br />
          <InputText className='border rounded-md w-full p-2 mt-1' type="password" />
          <p className='text-[#2478FF] mb-8'>forget password?</p>
          {/* <div className='w-full'> */}
          <ButtonSpinner fetching={false} stylebtn={"p-2 w-full text-center rounded-md bg-[#108286] first-letter:uppercase cursor-pointer text-white"} onclick={onClickHandle}>Login</ButtonSpinner>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
