import { Clear } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import StoreApi from '../../utils/StoreApi'
import './inputcard.scss'



function InputCard({setOpen,listId,type}) {

const [title,setTitle]=useState("")
const {addMoreCard,addMoreList}=useContext(StoreApi)



const hanldeSubmit=()=>{
    if(type==="card"){
        addMoreCard(title,listId)
    }
    else{
        addMoreList(title);
    }
    setOpen(false);
    setTitle("")
}

  return (
    <div className='input-card'>
        <div className="input-card-container">
            <textarea value={title} className='input-text' placeholder={type==="card"?"Enter a title of this card..":"Enter list title"} autoFocus  onChange={(e)=>setTitle(e.target.value)} />

        </div>
        <div className="confirm">
            <button className="button-confirm" onClick={hanldeSubmit }>
                {type==="card"? "Add Card" : "Add List"}
            </button>
            <button className="button-cancel"  onClick={() => {
            setTitle("");
            setOpen(false);
          }}>
                <Clear/>
            </button>
        </div>
    </div>
  )
}

export default InputCard