import { CircleUserRound, Mail, Lock, User, Calendar } from "lucide-react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "./../../api/index";

const Register = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const naviagte = useNavigate();

  const handleFocus = () => {
    const dateInput = document.getElementById("dob-input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("placeholder", "");
  };

  const handleBlur = () => {
    const dateInput = document.getElementById("dob-input");
    dateInput.setAttribute("type", "text");
    dateInput.setAttribute("placeholder", "Enter date of birth");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/register`, {
        name,
        dob,
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Registration successful:", response);
        naviagte("/login");
      }
    } catch (error) {
      console.log("Registration failed:", error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center space-y-10 bg-[#1d2c4f] p-[3rem] pt-[1rem] rounded-xl">
        <div className="absolute top-[-1rem] bg-[#00f5e1] text-black p-2 uppercase w-[50%] text-center">
          SIGN UP
        </div>

        <CircleUserRound size={55} />
        <Form className="space-y-4" onSubmit={handleSubmit}>
          <Form.Group
            className="flex items-center gap-2 bg-[#4d5974]  p-2 rounded-lg w-[300px]"
            controlId="name"
          >
            <Form.Label>
              <User size={17} />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-transparent outline-none w-full"
            />
          </Form.Group>
          <Form.Group
            className="flex items-center gap-2 bg-[#4d5974]  p-2 rounded-lg w-[300px]"
            controlId="dob"
          >
            <Form.Label>
              <Calendar size={16} />
            </Form.Label>
            <Form.Control
              id="dob-input"
              type="text"
              placeholder="Enter date of birth"
              value={dob}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => setDob(e.target.value)}
              required
              className="bg-transparent outline-none w-full"
            />
          </Form.Group>
          <Form.Group
            className="flex items-center gap-2 bg-[#4d5974]  p-2 rounded-lg w-[300px]"
            controlId="email"
          >
            <Form.Label>
              {" "}
              <Mail size={16} />
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent outline-none w-full"
            />
          </Form.Group>
          <Form.Group
            className="flex items-center gap-2 bg-[#4d5974]  p-2 rounded-lg w-[300px]"
            controlId="password"
          >
            <Form.Label>
              <Lock size={16} />
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent outline-none w-full"
            />
          </Form.Group>
          <Button
            className="w-full bg-[#00f5e1] text-black p-2 uppercase rounded-lg"
            variant="primary"
            type="submit"
          >
            Register
          </Button>

          <Link to="/login">
            <p className="text-center text-[#00f5e1] mt-3 cursor-pointer">
              Already User? Login
            </p>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
