import React, { useState, useEffect, useCallback } from "react";
import { Box, Button, Paragraph, Container, Spinner } from "theme-ui";
import theme from "../../theme";
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from "react-plaid-link";
import { useRouter } from "next/router";
import { useExternalAccount } from "../../modules/externalAccount/hooks";
import { useLogout } from "../../modules/login/hooks";
import { connect } from "react-redux";
import { State } from "../../store";
import ReactModal from "../React_modal";

export const styles = {
  textButton: {
    fontSize: "17px",
    fontWeight: 600,
    cursor: "pointer",
    color: `${theme.colors.buttonPrimaryBg}`,
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
  },
};
export interface NormalLinkProps {
  token?: any;
  env?: string;
  transactions?: boolean;
  getEnv?: any;
  handleHistory?: any;
  handleSuccess?: any;
  details?: any;
  externalAc?: any;
}

const NormalLink = (props: NormalLinkProps) => {
  const [link, setLink] = useState(false);
  const { token, transactions } = props;
  const [externalAccount, setExternalAccount] = useExternalAccount();
  const router = useRouter();
  const [logout, setLogout] = useLogout();
  const [loading, setLoading] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);

  console.log("propsaaaa", props.externalAc.message);

  console.log("externalAccount", externalAccount.message);

  const onSuccess = useCallback(async (public_token, metadata) => {
    console.log("MetaData", metadata);
    await setLink(true);
    await setExternalAccount(
      metadata.account_id,
      metadata.public_token,
      props?.details?.id
    );
  }, []);

  const onExit = useCallback(async () => {
    setLink(false);
  }, []);

  useEffect(() => {
    console.log("externalAccount", externalAccount);
    if (externalAccount?.account_number && link) {
      console.log("externalAccount externalAccount", externalAccount);
      handleAddExternalAccount();
    }
  }, [externalAccount]);

  async function handleAddExternalAccount() {
    if (externalAccount?.account_number) {
      console.log("Hello");

      props?.handleSuccess();
    } else {
      <ReactModal
        isOpenModal={isOpenModal}
        iscloseModal={() => setOpenModal(false)}
        message={externalAccount.message}
      />;
      console.log("Hello");
    }
  }

  const onEvent = useCallback(async (eventName, metadata) => {}, []);

  const config = {
    token,
    onSuccess,
    env: "sandbox",
    onExit,
    onEvent,
  };

  const { open, ready } = usePlaidLink(config);

  const logoutpage = () => {
    setLogout();
    router.push("/");
  };

  return (
    <Box>
      <Container p={4} bg="muted">
        {!link ? (
          <>
            <h2>Getting Started</h2>
            <ul>
              <li>
                Choose{" "}
                <span style={{ fontWeight: "bold" }}>Add External Account</span>{" "}
                below to begin
              </li>
              <li>
                Enter your financial institution’s login credentials to
                instantly link your external account
              </li>
              <li>
                OR enter your financial institution’s routing and account
                number, then in 1-2 business days choose{" "}
                <span style={{ fontWeight: "bold" }}>
                  Verify Micro-deposits
                </span>{" "}
                below
              </li>
            </ul>

            <Box pt={3} style={styles.textBox}>
              <Button
                color="primary"
                style={styles.textButton}
                onClick={() => {
                  open();
                  setLink(true);
                }}
              >
                Add External Account
              </Button>
            </Box>

            <Box pt={3} style={styles.textBox}>
              <Button
                color="primary"
                style={styles.textButton}
                onClick={() => {
                  router.push("/history");
                }}
              >
                View History
              </Button>
            </Box>
            <Box pt={3} style={styles.textBox}>
              <Button
                color="primary"
                style={styles.textButton}
                onClick={logoutpage}
              >
                Logout
              </Button>
            </Box>
          </>
        ) : (
          <Box>
            <Box sx={{ position: "absolute", top: "50%", left: "45%" }}>
              <Spinner />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default connect(
  (state: State) => ({
    details: state.userLogin,
    externalAc: state.externalAccount,
  }),

  {}
)(NormalLink);
