import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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

      {/* PARTICLES */}

      <Particles
        id="signup-particles"
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

            number: {
              value: 80,
              density: {
                enable: true,
              },
            },

            color: {
              value: "#ffffff",
            },

            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },

            move: {
              enable: true,
              speed: 2,
            },

            opacity: {
              value: 0.5,
            },

            size: {
              value: { min: 1, max: 5 },
            },

            shape: {
              type: "circle",
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

      {/* SIGNUP CARD */}

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