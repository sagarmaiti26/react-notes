import React from "react";
import AddIcon from '@mui/icons-material/Add';


function Header({ onAddClick }) {
  return (
    <header className="headerStyle">
      <div className="containerStyle">
        <h1>My-Notes</h1>
        <button type="button" onClick={onAddClick} className="buttonStyle">
          Add New Note <AddIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
