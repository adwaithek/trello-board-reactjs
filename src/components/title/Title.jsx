import { MoreVert } from '@mui/icons-material';
import React, { useContext, useState } from 'react'
import './title.scss'
import ClickOutHandler from 'react-onclickout';
import StoreApi from '../../utils/StoreApi';





function Title({title,listId}) {


    const [open,setOpen]=useState(false);
    const [openOptions,setOpenOptions]=useState(false)
    const [newTitle,setNewTitle]=useState(title);
const {updateListTitle,deleteList}=useContext(StoreApi)


    const handleOnBlur=()=>{
        updateListTitle(newTitle,listId);
        setOpen((prev)=>!prev);
    }
 
 
 
 
 
 
 
 
    return (
  <>
  
    {open?(

        <div>
            <input type="text" className='input-title'
            value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} onBlur={handleOnBlur} onKeyPress={(e)=>{
                if(e.key==="Enter"){
                    handleOnBlur()
                }
                return
            }} />
        </div>
        
    ):(
        <div className='editable-title-container'>
            <h2 onClick={()=>setOpen(prev=>!prev)}    className="editable-title" >{title}</h2>
            <button className='list-button' onClick={()=>setOpenOptions(prev=>!prev)}><MoreVert/></button>
{
    openOptions && (
        <ClickOutHandler onClickOut={(e)=>{
            setOpenOptions((prev)=>!prev)  }}>
      <ul className="menu-card">
        <li onClick={()=>{ setOpenOptions((curr)=>!curr);  deleteList(listId) }}  >Delete List</li>
        <li onClick={()=>{ setOpenOptions((curr)=>!curr) ; setOpen((prev)=>!prev) }} >Edit Card Title</li>
            
      
      </ul>

        </ClickOutHandler>
    )
}
        </div>
    )
  }
  </>
  )
}

export default Title