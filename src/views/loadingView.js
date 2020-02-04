import React from "react";

import LayoutView from "./layoutView";

let LoadingView = () =>{
  return (
    <LayoutView>
      <section>
        <div className="row">
          <div className="col-md-3">
            <div className="loading">
              <div className="ml-loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              Loading
            </div>
          </div>
        </div>
      </section>
    </LayoutView>
  );
};

export default LoadingView;
