import React from "react";

import LayoutView from "./layoutView";

let LoadingView = ({complete}) =>{
  let loading = (<div className="loading">
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
  </div>);
  if(complete){
    return (
      <LayoutView>
        <section>
          <div className="row">
            <div className="col-md-3">
              {loading}
            </div>
          </div>
        </section>
      </LayoutView>
    );
  }
  return loading;
};

export default LoadingView;
