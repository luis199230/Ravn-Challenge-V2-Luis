import React from "react";

let LayoutView = (props) => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <span className="navbar-brand"> Ravn Star Wars Registry</span>
        </nav>
      </header>
      <main className="container-fluid">
        {props.children}
      </main>
    </div>
  );
};

export default LayoutView;