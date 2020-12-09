import { makeStyles } from "@material-ui/core/styles";

const MaterialStyles =

    makeStyles(theme => ({

        ModalOverlay: {
            padding: "45px 50px",
            height: "100%",
        },

        FormWrapper: {
            height: "100%", overflowY: "auto",
            textAlign: "center",
            "& .MuiTextField-root": {
                marginTop: "10px",
                display: 'block'
            }
        },


    }));


export default MaterialStyles; 