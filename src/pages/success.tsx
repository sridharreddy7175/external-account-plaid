import React from "react";
import { Box } from "theme-ui";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { State } from "../store";

export const styles = {
  textButtonAccount: {
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    background: "#156FE5",
  },
  textButtonBacktohome: {
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    background: "#DFDFDF",
    color: "black",
  },
  alignStyles: {
    display: "flex",
  },
  headingStyles: {
    fontSize: " 20px",
    letterSpacing: "0.5px",
  },
  fontStyles: {
    fontWeight: "bold",
  },
};

export interface SuccessProps {
  info?: InfoProps;
}

export interface InfoProps {
  account_type?: string;
  account_number?: string;
}

const Success = (props: SuccessProps) => {
  const router = useRouter();

  console.log("sucees", props);

  const handleBackToHome = () => {
    router.push("/homePage");
  };

  function capitalizeFirstLetter(string: any) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  }
  return (
    <Box>
      <Box
        style={{
          ...styles.alignStyles,
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box>
          <p style={{ ...styles.headingStyles, fontWeight: "bold" }}>
            Success! Your new external account is added
          </p>
        </Box>

        <Box>
          <p>
            Account Type:
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {capitalizeFirstLetter(props?.info?.account_type)}
            </span>
          </p>
          <p>
            Account Number:
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {props?.info?.account_number}
            </span>
          </p>
        </Box>
        <Box pt={3} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            buttonName="Back to Home"
            buttonStyles={styles.textButtonBacktohome}
            onClick={handleBackToHome}
            sx={{ marginRight: "10px" }}
          />

          <Button
            buttonName="Add another account"
            buttonStyles={styles.textButtonAccount}
            onClick={handleBackToHome}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default connect(
  (state: State) => ({
    info: state.externalAccount,
  }),

  {}
)(Success);
