import { useState, useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";

function Login() {

  const navigate = useNavigate();



  const [formData, setFormData] = useState({

    email: "",

    password: "",

  });



  // PARTICLES INIT

  const particlesInit = useCallback(async (main) => {

    await loadFull(main);

  }, []);



  // HANDLE INPUT

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };



  // HANDLE LOGIN

  const handleLogin = async () => {

    try {

      const res = await axios.post(

        "https://quiz-app-oq7l.onrender.com/api/auth/login",

        formData

      );



      alert(res.data.message);



      localStorage.setItem(

        "user",

        JSON.stringify(res.data.user)

      );



      navigate("/quiz");



    } catch (error) {

      alert(

        error.response?.data?.message ||

        "Server Error"

      );

    }

  };



  return (

    <div className="login-container">



      {/* PARTICLES BACKGROUND */}

      <Particles

        id="tsparticles"

        init={particlesInit}

        options={{

          fullScreen: {

            enable: false,

          },



          background: {

            color: {

              value: "#e8f2fc",

            },

          },



          fpsLimit: 120,



          interactivity: {

            events: {

              onClick: {

                enable: true,

                mode: "push",

              },



              onHover: {

                enable: true,

                mode: "repulse",

              },



              resize: {

                enable: true,

              },

            },



            modes: {

              push: {

                quantity: 4,

              },



              repulse: {

                distance: 100,

                duration: 0.4,

              },

            },

          },



          particles: {

            color: {

              value: "#64748b",

            },



            links: {

              color: "#64748b",

              distance: 150,

              enable: true,

              opacity: 0.3,

              width: 1,

            },



            move: {

              direction: "none",

              enable: true,

              outModes: {

                default: "bounce",

              },

              random: false,

              speed: 2,

              straight: false,

            },



            number: {

              density: {

                enable: true,

                area: 800,

              },

              value: 80,

            },



            opacity: {

              value: 0.5,

            },



            shape: {

              type: "circle",

            },



            size: {

              value: { min: 1, max: 5 },

            },

          },



          detectRetina: true,

        }}

      />



      {/* LOGIN BOX */}

      <div className="login-box">

        <h1>Login</h1>



        <input

          type="email"

          name="email"

          placeholder="Enter Email"

          onChange={handleChange}

        />



        <input

          type="password"

          name="password"

          placeholder="Enter Password"

          onChange={handleChange}

        />



        <button onClick={handleLogin}>

          Login

        </button>



        <p>

          Don't have an account?

          <Link to="/signup"> Sign Up</Link>

        </p>

      </div>

    </div>

  );

}



export default Login;