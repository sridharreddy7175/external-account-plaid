import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "react-modal";

export const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        maxHeight: "600px",
        width: "40%",
        height: "30%",
        zIndex: "10",
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 4px",
    },
    buttonChanges: {
        postion: "relative",
        top: "-50px",
        right: "-140px",
    },
};

export interface ModalProps {
    isOpenModal?: any;
    iscloseModal?: any
    message?: string
}

const ReactModal = (props: ModalProps) => {
    const closeModal = () => {
        props.iscloseModal()
    };

    return (
        <div>

            <Modal
                isOpen={props?.isOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} style={{ float: "right" }}>
                    X
                </button>
                <div>
                    <h4 style={{ textAlign: "center", paddingTop: "30px" }}>
                        <b>{props?.message}</b>
                    </h4>
                </div>
            </Modal>
        </div>
    );
};

export default ReactModal;
