import React from "react";

const Pill = props => {
  return (
      <div>
        <a className="pill" href={null}>
            <span>{props.title}</span>
            <svg className="icon-svg close-x">
                <use xlinkHref="../img/icons.svg#close" />
            </svg>
        </a>
    </div>
  );
};

export default Pill;
