import React from "react";
import LayoutView from "./layoutView";

let ErrorView = () =>{
  return (
    <LayoutView>
      <section>
        <div className="row">
          <div className="col-md-3">
            <div className="error">Failed to Load Data</div>
          </div>
        </div>
      </section>
    </LayoutView>
  );
};

export default ErrorView;