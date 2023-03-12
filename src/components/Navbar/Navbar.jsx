import { Bookmark } from '@mui/icons-material'
import React from 'react'
import './navbar.scss'
function Navbar() {
  return (
 <nav>
    <div className="container">
        <div>
           <Bookmark/>
            <h1>Trello Board Clone</h1>
           
        </div>
    </div>
 </nav>
    )
}

export default Navbar