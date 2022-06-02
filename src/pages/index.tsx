import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { Box } from "theme-ui";
import Login from "../components/Login";
import { useLogin } from "../modules/login/hooks";
import { State } from "../store";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import ReactModal from "../components/React_modal";

const Home: NextPage = (props: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const [userLogin, setUserLogin] = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    async function handle() {
      if (props?.details?.success && props?.details?.email !== "") {
        await setLoading(false);
        router.push("/homePage");
      } else if (props?.details?.email === "") {
        await setLoading(false);
      } else if (props?.details?.message === "user doesn't exists") {
        await setOpenModal(true);
        await setLoading(false);
      } else if (props?.details?.message === "Password Wrong") {
        await setOpenModal(true);
        await setLoading(false);
      }
    }
    handle();
  }, [props]);

  console.log("Props", props?.details?.message);

  const validate = () => {
    if (!email) {
      setEmailError("Email Cannot Be Empty");
    }
    if (!password) {
      setPasswordError("Password Cannot Be Empty");
    }
  };

  const LoginButton = async () => {
    setLoading(true);

    validate();

    await setUserLogin(email, password);

    setEmail("");
    setPassword("");
  };
  return (
    <Box>
      <Login
        loading={loading}
        LoginButton={() => LoginButton()}
        handleEmail={(e: any) => setEmail(e)}
        handlePassword={(e: any) => setPassword(e)}
        email={email}
        password={password}
        emailError={emailError}
        passwordError={passwordError}
      />
      <ReactModal
        isOpenModal={isOpenModal}
        iscloseModal={() => setOpenModal(false)}
        message={props?.details?.message}
      />
    </Box>
  );
};
export default connect(
  (state: State) => ({
    details: state.userLogin,
  }),

  {}
)(Home);
