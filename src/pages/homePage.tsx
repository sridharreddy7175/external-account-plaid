import React, { useState, useEffect } from "react";
import Link from "../components/Link";
import { useLinkToken } from "../modules/link/hooks";
import { connect } from "react-redux";
import { State } from "../store";
import { useRouter } from "next/router";
import Success from "./success";

const HomePage = (props: any) => {
    const [linkToken, fetchLinkToken] = useLinkToken();
    const router = useRouter();

    console.log("props1222", props?.details);

    useEffect(() => {
        fetchLinkToken();
    }, []);

    useEffect(() => {
        // async function handle() {
        //     if (props?.details?.message === undefined) {
        //         router.push("/");
        //     }

        // }
        // handle();
    }, [props]);

    return (
        <div>
            <Link token={linkToken} handleSuccess={() => { console.log("success"); router.push('/success') }}
            />
        </div>
    );
};

export default connect(
    (state: State) => ({
        details: state.userLogin,
    }),

    {}
)(HomePage);
