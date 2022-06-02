import React, { useState } from "react";
import { Box, Container, Grid, Text, Spinner } from "theme-ui";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { State } from "../../store";
import Button from "../Button";
import InputBox from "../InputBox";
import Labelbox from "../Label";
import ThemiUiText from "../Text";

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
        backgroundColor: "#0079C1",
        width: "75%",
        height: "45px",
    },
    textLogin: {
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        background: "#4FA521",
    },

    cardTitle: {
        fontSize: "25px",
        fontWeight: "bold",
        backgroundColor: "#0079C1",
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

const Login = (props: any) => {
    const router = useRouter();

    return (
        <Box>
            <Container p={4} pt={5} style={styles.loginContainer}>
                <Grid width={[2, null, 500]}>
                    <Box style={styles.boxHeader}>
                        <Box style={styles.cardTitle} sx={{ textAlign: "center" }} p={3}>
                            <ThemiUiText textName="Nueve Solutions" />
                        </Box>

                        <Labelbox name="Email" />

                        <InputBox
                            name={props.email}
                            type="email"
                            value={props.email}
                            onChange={(e: any) => props.handleEmail(e.target.value)}
                        />
                        <p>{props.emailError}</p>

                        <Labelbox name="Password" />
                        <InputBox
                            name={props.password}
                            type="password"
                            value={props.password}
                            onChange={(e: any) => props.handlePassword(e.target.value)}
                        />
                        <p>{props.passwordError}</p>

                        <Box sx={{ textAlign: "center" }}>
                            <Button
                                buttonName="Login"
                                buttonStyles={styles.textButton}
                                onClick={() => props.LoginButton()}
                                disabled={props.email === "" || props.password === ""}
                                sx={{
                                    opacity:
                                        props.email === "" || props.password === "" ? 0.2 : 1,
                                }}
                            />
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                            {props.loading ? <Spinner /> : null}
                        </Box>

                        <br />

                        <Box p={2} sx={{ textAlign: "center" }}>
                            <Text sx={{ fontWeight: "bold", textAlign: "center" }}>
                                Don&#x27;t have an account ? <a href="/register">Register</a>
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
    );
};
export default connect(
    (state: State) => ({
        details: state.userLogin,
    }),

    {}
)(Login);
