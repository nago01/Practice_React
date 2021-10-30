import React from 'react'

function Navbar({mylist,fliteritem}) {
    
    return (
        <nav className="navbar">
               <div className="btn-group">
          {mylist.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => fliteritem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
        </nav>
    )
}

export default Navbar
