import React, { useState } from 'react'
import Board from "react-trello";
import FormContainer from "./FormCont/Form"
import MaterialStyles from "./Styles";
import CancelIcon from "@material-ui/icons/Cancel";
import Modal from 'react-modal';
export default function Trello() {
    const Styles = MaterialStyles();
    const [open, setOpen] = useState(false);
    const [CardData, setCardData] = useState({})
    const data = JSON.parse(localStorage.getItem("data"))
    const [initialData, setinitialData] = useState(data)
    const handleOpen = () => {

        setOpen(true);
    };



    const handleClose = () => {
        setOpen(false);
    };


    const CardEditor = (cardupdateddata) => {

        initialData.lanes.map(item => {
            if (item.id == CardData.laneId) {
                item.cards.map(item => {
                    if (item.id == CardData.cardid) {
                        item.title = cardupdateddata.title
                        item.description = cardupdateddata.description
                        handleClose();

                        setinitialData(initialData)
                        localStorage.setItem("data", JSON.stringify(initialData))
                    }
                })
            }
        })

    }

    const onCardClick = (cardid, metadata, laneId) => {
        handleOpen();
        setCardData({ ...CardData, "cardid": cardid, "metadata": "", "laneId": laneId })
    }
    return (
        <div>

            <Modal
                isOpen={open}
                onRequestClose={handleClose}
                className={Styles.ModalWrapper}
                overlayClassName={Styles.ModalWrapperOverlay}
                ariaHideApp={false}
            > <FormContainer CardEditor={CardEditor} />
                <div className={Styles.CancelBtn}>
                    <CancelIcon onClick={handleClose} />


                </div>
            </Modal>
            <h1 className={Styles.heading}>Basic karaban board</h1>
            <Board data={initialData} editable onCardClick={onCardClick} draggable editLaneTitle canAddLanes collapsibleLanes />



        </div>
    )
}
