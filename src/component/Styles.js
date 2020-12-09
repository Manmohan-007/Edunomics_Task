import { makeStyles } from "@material-ui/core/styles";

const MaterialStyles =

    makeStyles(theme => ({

        ModalWrapperOverlay: {
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            zIndex: "130",


        },
        ModalWrapper: {
            width: "42%",
            height: "62%",
            margin: "132px auto",
            outline: "none",
            boxShadow: "2px 2px 29px black",
            borderRadius: "27px",
            backgroundColor: "white",
            "& ::-webkit-scrollbar": {
                width: "5px"
            },


            "& ::-webkit-scrollbar-track": {
                borderRadius: "4px",
                background: "whitesmoke"
            },


            "& ::-webkit-scrollbar-thumb": {
                background: "#005ECC",
                borderRadius: "10px"
            }


        },

        CancelBtn: {
            position: "fixed",
            top: "150px",
            right: "30%",
            cursor: "pointer"
        },


    }));


export default MaterialStyles; 