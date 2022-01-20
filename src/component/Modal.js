import React from "react";
const Modal = (props) => {
    if(!props.show){
        return null
    }
    return (
        <div className="modal">
            <div className="modalContent">
                <div className="modalTop"><span>First Name:</span></div>
                <div><span>Last Name:</span></div>
                <div><span>Phone:</span></div>
                <div><span>Email:</span></div>
                <div><span>Query:</span></div>
                <div className="modalBottom">
                    <input type="submit" value="Submit"/>
                    <input value="Cancel" type="button"/>
                </div>  
            </div>      
        </div>
        
    );
}
 //https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
export default Modal;