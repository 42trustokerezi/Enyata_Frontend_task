import React, {useState} from "react";
import InputField from "../components/InputField/InputField";
import Button from "../components/Button/Button";
import Logo from "../assets/image 1.png"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate()

    const inputs = [
        {
            id:1,
            name: 'email',
            type: 'email',
            placeholder: '',
            label: 'Email Address',
            errorMessage: 'It should be a valid email address',
            required: true
        },
        {
            id:2,
            name: 'Password',
            type: 'password',
            placeholder: '',
            label: 'Password',
            errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();


        navigate('/dashboard')
    }

    const onChange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

  return (
    <div className="grid grid-cols-3 h-[100vh]">
      <div className="bg-[#031434] relative ">
        {/* left */}
        <img src={Logo} alt="starwars" className="absolute top-[50%] w-[70%] left-[15%] translate-y-[-50%]" />
      </div>
      <div className="col-span-2 relative">
        {/* right */}
        <form onSubmit={handleSubmit} className="w-[50%] m-auto border px-16 py-10 absolute left-0 right-0 top-16">
          <h2 className="pb-2 font-bold">Login</h2>
          <p className="pb-14 text-sm font-light">
            Kindly enter your details to log in
          </p>
          {/* input component */}
          {
            inputs.map((input)=>(
                
                <InputField
                    key={input.id}
                    {...input}
                    value={inputValue[input.name]}
                    onChange={onChange}
                />
            ))
          }
          

          {/* ......... */}

          {/* login button component */}

          <Button/>

          {/* ......... */}

          <p className="text-sm text-blue-400 text-center">
            Forgot your password?
          </p>

          <div className="w-[60%] mx-auto flex justify-between pt-28 text-xs">
            <p>Privacy Policy</p>
            <p>and</p>
            <p>Terms of Services</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
