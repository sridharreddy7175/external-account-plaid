import React, { useState } from "react";
import { Box, Grid, Container } from "theme-ui";
import theme from "../theme";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { useBalInfo } from "../modules/balanceInfo/hooks";
import { connect } from "react-redux";
import { State } from "../store";

export const styles = {
    textButton: {
        fontSize: "17px",
        fontWeight: 600,
        cursor: "pointer",
        color: `${theme.colors.buttonPrimaryBg}`,
    },
};

const History = (props: any) => {
    const router = useRouter();
    const [balInfo, setBalInfo] = useBalInfo();
    const [balance, setBalance] = useState(true);

    console.log("props123", props?.info?.account_id);

    const transactions = [
        {
            Date: "11/29/2021",
            Status: "Verification Pending",
            Refid: "XXXXXXXX4773fe",
        },
        {
            Date: "11/29/2021",
            Status: "Verification Pending",
            Refid: "XXXXXXXX4773fe",
        },
        {
            Date: "11/29/2021",
            Status: "Verification Pending",
            Refid: "XXXXXXXX4773fe",
        },
    ];

    const BalInfoButton = async () => {
        // setBalInfo(
        //     balance
        // )
        // setBalInfo(
        //     balance,
        //     props?.info?.account_id,
        // )
    };

    return (
        <Box className="pad(5)" style={{ height: "600px" }}>
            <Box p={4} bg="muted">
                <div>
                    <Grid gap={4} columns={[1, null, 3]}>
                        {transactions.map((transaction, index) => {
                            return (
                                <Box
                                    pb={4}
                                    style={{
                                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                                        borderTop: "3px solid #3A193F",
                                        textAlign: "center",
                                    }}
                                    key={index}
                                >
                                    <h4>
                                        Date : <b> {transaction.Date}</b>
                                    </h4>
                                    <p>
                                        Ref Id : <b> {transaction.Refid}</b>
                                    </p>
                                    <p>
                                        Status : <b> {transaction.Status}</b>
                                    </p>
                                    <Button
                                        buttonName="Verify Micro Deposits"
                                        buttonStyles={styles.textButton}
                                    />
                                </Box>
                            );
                        })}
                    </Grid>
                </div>
                <Box pt={5} style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        buttonName="Add External Account"
                        buttonStyles={styles.textButton}
                        onClick={() => {
                            router.push("/homePage");
                        }}
                    />
                </Box>
                <Box pt={2} style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        buttonName="Balance Info"
                        buttonStyles={styles.textButton}
                        onClick={BalInfoButton}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default connect(
    (state: State) => ({
        details: state.userLogin,
        info: state.externalAccount,
    }),

    {}
)(History);
