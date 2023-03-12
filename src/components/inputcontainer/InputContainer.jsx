import { Collapse } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import InputCard from '../inputcard/InputCard'
import './inputcontainer.scss'





function InputContainer({listId,type}) {
    const [open,setOpen]=useState(false)
  return (
    <div className="input-container">
          <Collapse in={open}>
         <InputCard setOpen={setOpen} listId={listId} type={type} />
     </Collapse>
        <Collapse in={!open}>
            <div className="input-content">

            <button onClick={() => setOpen(!open)}>
                    {type==="card"?"+ Add Card":"Add List"}
                </button>
            </div>
        </Collapse>
    </div>
  )
}

export default InputContainer



