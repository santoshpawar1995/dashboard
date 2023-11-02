import "../App.css";
import logo from "../image/logo.svg";
import { emailValidator, passwordValidator } from "../component/regxValidation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBInput, MDBIcon } from "mdb-react-ui-kit";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import img from "../image/imgleft.svg";
import copyrights from "../image/copyrights.svg";

function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const navigate = useNavigate("");
  
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
 
  const onSubmit = (e) => {
    e.preventDefault();
    setsuccessMessage("");
    if (!emailValidator(input.email))
      return seterrorMessage("please enter the vaild email id");
    console.log(input.password);
    if (!passwordValidator(input.password))
      return seterrorMessage("please enter the  valid passsword ");
    if (
      input.email !== "geethamsoft@gmail.com" ||
      input.password !== "geethamsoft@123"
    )
      return seterrorMessage("invalid email or  password ");
    navigate("/");

    // setsuccessMessage("successfully validated");
    console.log(input);
  };

  return (
    <>
      <div>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol className="liftsidecol">
              <div>
                <h3 style={{ marginTop: "50px", fontSize: "32px" }}>
                  Dream Focus
                </h3>
              </div>
              <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                <p>Never limit for dreams</p>
              </div>
              <div>
                <img className="leftside-image" src={img} />
              </div>

              <div style={{ marginBottom: "58px" }}>
                <p style={{ fontSize: "16px" }}>
                  Dreams focus is Artificial intelligence AI solution, which
                  connects people one to one in a globalized way to fulfil their
                  requirements and services
                </p>
              </div>
              <div style={{ marginBottom: "25px" }}>
                <span style={{ fontSize: "12px" }}>
                  Copy rights
                  <img src={copyrights} />
                  Dreams focus limited
                </span>
              </div>
            </MDBCol>
            <MDBCol>
              <div style={{marginTop:'200px'}}>
                <div>
                  <h3>Admin login</h3>
                </div>
                <div className="container-login">
                  <form className="form" onSubmit={onSubmit}>
                    {errorMessage.length > 0 && (
                      <div style={{ color: "red", fontSize: "14px" }}>
                        {errorMessage}
                      </div>
                    )}
                    {successMessage.length > 0 && (
                      <div style={{ color: "green", fontSize: "14px" }}>
                        {successMessage}
                      </div>
                    )}
                    <div >
                      <MDBInput
                        label="Email"
                        id="typeEmail"
                        icon="user-tie"
                        name="email"
                        size="lg"
                        type="email"
                        onChange={handleChange}
                      />
                    </div>
                    <br></br>
                    <div>
                      <MDBInput
                        label="Password"
                        id="typePassword"
                        type="password"
                        size="lg"
                        name="password"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <button className="loginbutton" type="submit" >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      {/* <div className="App-shadow">
        <img className="logo-image" src={logo} />
        <h2 style={{ color: "white", margin: "10px", fontFamily: "Poppins" }}>
          Dreams Focus
        </h2>
        <form className="form" onSubmit={onSubmit}>
          {errorMessage.length > 0 && (
            <div style={{ color: "red", fontSize: "14px" }}>{errorMessage}</div>
          )}
          {successMessage.length > 0 && (
            <div style={{ color: "green", fontSize: "14px" }}>
              {successMessage}
            </div>
          )}

          <div>
            <input
                className="input-flied"
                name="email"
                type="text"
                placeholder="User name"
                onChange={handleChange}
              />
            <MDBIcon fas icon="user-tie" />
            <MDBInput
              label="Email"
              id="typeEmail"
              icon="user-tie"
              name="email"
              size="lg"
              type="email"
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div>
            <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />

            <MDBInput
              label="Password"
              id="typePassword"
              type="password"
              size="lg"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="loginbutton" type="submit">
              Login
            </button>
          </div>
        </form>
      </div> */}
    </>
  );
}

export default Login;
