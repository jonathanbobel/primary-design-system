import React, { Component } from "react";
import Button from "../../Atomic_Elements/Atoms/Button";

class Card extends Component {
  render() {
    const {
      className,
      subject,
      date,
      h2,
      h4,
      paragraph,
      imgsrc,
      imgalt,
      // vwidth,
      // vheight,
      // poster,
      // srcmp4,
      title,
      label,
      href,
      caption,
      onClick,
    } = this.props;

    return (
      <div>
        <div className={className}>
          {subject ? <h6>{subject}</h6> : ""}
          {date ? <p className="date">{date}</p> : ""}
          {h2 ? <h2>{h2}</h2> : ""}
          {h4 ? <h4>{h4}</h4> : ""}
          {paragraph ? <p>{paragraph}</p> : ""}
          <div className="media-container">
            <a href={href}>
              <svg className="icon-svg play">
                <use xlinkHref="../img/icons.svg#play" />
              </svg>
              <img src={imgsrc} alt={imgalt} />
              {/*<video width={vwidth} height={vheight} controls poster={poster}>
                <source src={srcmp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>*/}
            </a>
            <span className="caption">{caption}</span>
          </div>
          <Button title={title} label={label} onClick={onClick} />
        </div>
      </div>
    );
  }
}

export default Card;
