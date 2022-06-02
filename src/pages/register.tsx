import React, { useState } from "react";
import { Box, Container, Label, Input, Grid, Text, Spinner } from "theme-ui";
import axios from "axios";
import { useRouter } from "next/router";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import Labelbox from "../components/Label";
import ThemiUiText from "../components/Text";
import { toast } from "react-toastify";

export const styles = {
  loginContainer: {
    justifyContent: "center",
    display: "flex",
  },
  boxHeader: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "10px",
  },
  textButton: {
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    background: "#156FE5",
    width: "75%",
    height: "45px",
  },
  textRegister: {
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    background: "#4FA521",
  },

  cardTitle: {
    fontSize: "25px",
    fontWeight: "bold",
    backgroundColor: "#0079C1",
    width: "100%",
    color: "white",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
    fontFamily: "Sans-serif	",
  },

  cardBottom: {
    fontSize: "25px",
    fontWeight: "bold",
    backgroundColor: "#0079C1",
    width: "100%",
    color: "white",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    fontFamily: "Sans-serif	",
  },
};

const Register = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fnError, setFnError] = useState("");
  const [lnError, setLnError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = () => {
    if (!firstName) {
      setFnError("FirstName can not be empty");
    }
    if (!lastName) {
      setLnError("LastName can not be empty");
    }
    if (!email) {
      setEmailError("Email can not be empty");
    }
    if (!password) {
      setPasswordError("Password can not be empty");
    }
  };

  const submit = (e: any) => {
    e.preventDefault();
    var body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    validate();

    axios
      .post("http://localhost:8080/user_registration", body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })

      .then((res: any) => {
        console.log("res", res);
        if (res?.data?.success === true) {
          toast.success("Register successfully,please Login!");
          //   router.push("/");
        }
      })
      .catch((err: any) => {
        console.log("err", err.response);
        alert("Please enter the all details");
      });
  };

  return (
    <div>
      <Box>
        <Container p={4} style={styles.loginContainer}>
          <Grid width={[2, null, 500]}>
            <Box style={styles.boxHeader}>
              <Box style={styles.cardTitle} sx={{ textAlign: "center" }} p={3}>
                <ThemiUiText textName="Register" padding={5} />
              </Box>

              <Labelbox name="First Name" />

              <InputBox
                name={firstName}
                type="text"
                value={firstName}
                onChange={(e: any) => setFirstName(e.target.value)}
              />

              <Labelbox name="Last Name" />

              <InputBox
                name={lastName}
                value={lastName}
                type="text"
                onChange={(e: any) => setLastName(e.target.value)}
              />

              <Labelbox name="Email" />

              <InputBox
                name={email}
                value={email}
                type="email"
                onChange={(e: any) => setEmail(e.target.value)}
              />

              <Labelbox name="Password" />

              <InputBox
                name={password}
                value={password}
                type="password"
                onChange={(e: any) => setPassword(e.target.value)}
              />

              <Box sx={{ textAlign: "center" }}>
                <Button
                  buttonName="Register"
                  buttonStyles={styles.textButton}
                  onClick={submit}
                  disabled={
                    firstName === "" ||
                    lastName === "" ||
                    email === "" ||
                    password === ""
                  }
                  sx={{
                    opacity:
                      firstName === "" ||
                      lastName === "" ||
                      email === "" ||
                      password === ""
                        ? 0.2
                        : 1,
                  }}
                />
              </Box>

              <br />

              <Box sx={{ textAlign: "center" }} p={2}>
                <Text sx={{ fontWeight: "bold", textAlign: "center" }}>
                  Have an account ? <a href="/">Login</a>
                </Text>
              </Box>
              <Box
                style={styles.cardBottom}
                sx={{ textAlign: "center" }}
                p={1}
              ></Box>
            </Box>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Register;
