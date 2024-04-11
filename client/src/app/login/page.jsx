import axios from "axios";
import { CircleUserRound, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../../api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        // console.log("Login successful:", response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="relative flex flex-col items-center space-y-10 bg-[#1d2c4f] p-[3rem] pt-[1rem] rounded-xl">
        <div className="absolute top-[-1rem] bg-[#00f5e1] text-black p-2 uppercase w-[50%] text-center">
          SIGN IN
        </div>

        <CircleUserRound size={55} />

        <Form className="space-y-4" onSubmit={handleSubmit}>
          <Form.Group
            className="flex items-center gap-2 bg-[#4d5974]  p-2 rounded-lg w-[300px]"
            controlId="email"
          >
            <Form.Label>
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
            Login
          </Button>

          <Link to="/register">
            <p className="text-center text-[#00f5e1] mt-3 cursor-pointer">
              New User? Register
            </p>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
