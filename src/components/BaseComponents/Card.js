import React from "react";

const Card = (title, sideColor, plantCount, faIcon, cardKey) => {
  return (
    <div className="col-xl-2 col-md-6 mb-4" key={cardKey}>
      <div className={`card border-left-${sideColor} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${sideColor} text-uppercase mb-1`}
              >
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {plantCount}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas fa-${faIcon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
