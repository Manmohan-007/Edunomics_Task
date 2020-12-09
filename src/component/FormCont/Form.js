import React, { useState } from 'react'
import TextField from "@material-ui/core/TextField";
import MaterialStyles from "./Styles";


export default function ModalComponent(props) {

    const [CardData, setCardData] = useState({})

    const onChangeHandler = (e) => {
        if (e.target.id == "title") {

            setCardData({ ...CardData, title: e.target.value })
        }

        else if (e.target.id == "description") {

            setCardData({ ...CardData, description: e.target.value })
        }


    }

    const Styles = MaterialStyles();
    return (
        <div>


            <div className={Styles.ModalOverlay}>
                <div className={Styles.FormWrapper}>

                    <TextField id="title" placeholder="title" variant="outlined" onChange={(e) => onChangeHandler(e)} size="small" />
                    <TextField id="description" placeholder="description" variant="outlined" onChange={(e) => onChangeHandler(e)} size="small" />


                    <button onClick={() => props.CardEditor(CardData)}>Update Card </button>
                </div>
            </div>

        </div>
    )
}
