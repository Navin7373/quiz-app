import { useState, useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";

function Signup() {

  const navigate = useNavigate();



  const [formData, setFormData] = useState({

    username: "",

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



  // HANDLE SIGNUP

  const handleSignup = async () => {

    try {

      const res = await axios.post(

        "https://quiz-app-oq7l.onrender.com/api/auth/signup",

        formData

      );



      alert(res.data.message);



      navigate("/");



    } catch (error) {

      alert(

        error.response?.data?.message ||

        "Server Error"

      );

    }

  };



  return (

    <div className="signup-container">



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



      {/* SIGNUP BOX */}

      <div className="signup-box">

        <h1>Create Account</h1>



        <input

          type="text"

          name="username"

          placeholder="Enter Username"

          onChange={handleChange}

        />



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



        <button onClick={handleSignup}>

          Sign Up

        </button>



        <p>

          Already have an account?

          <Link to="/"> Login</Link>

        </p>

      </div>

    </div>

  );

}



export default Signup;