import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import Particles from "react-tsparticles";

import { loadSlim } from "tsparticles-slim";



function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  // PARTICLES INIT

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };



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
            enable: true,
            zIndex: -1,
          },

          background: {
            color: {
              value: "#0f172a",
            },
          },

          fpsLimit: 120,

          particles: {

            color: {
              value: "#ffffff",
            },

            links: {
              color: "#ffffff",
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
              speed: 2,
            },

            number: {
              density: {
                enable: true,
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

          interactivity: {

            events: {

              onHover: {
                enable: true,
                mode: "repulse",
              },

              onClick: {
                enable: true,
                mode: "push",
              },
            },

            modes: {

              repulse: {
                distance: 100,
              },

              push: {
                quantity: 4,
              },
            },
          },

          detectRetina: true,
        }}

      />



      {/* LOGIN CARD */}

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