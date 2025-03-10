import React, { Component } from "react";
import IconGrid from "./IconGrid";

const account = `<svg className="icon-svg account">
  <use xlinkHref="./img/icons.svg#account" />
</svg>`;
const down = `<svg className="icon-svg down">
  <use xlinkHref="./img/icons.svg#down-arrow" />
</svg>`;
const dropdown = `<svg className="icon-svg dropdown">
  <use xlinkHref="./img/icons.svg#dropdown" />
</svg>`;
const left = `<svg className="icon-svg left">
  <use xlinkHref="./img/icons.svg#left-arrow" />
</svg>`;
const right = `<svg className="icon-svg right">
  <use xlinkHref="./img/icons.svg#right-arrow" />
</svg>`;
const up = `<svg className="icon-svg up">
  <use xlinkHref="./img/icons.svg#up-arrow" />
</svg>`;
const close = `<svg className="icon-svg close-x">
  <use xlinkHref="./img/icons.svg#close" />
</svg>`;
const expand = `<svg className="icon-svg expand">
  <use xlinkHref="./img/icons.svg#expand" />
</svg>`;
const collapse = `<svg className="icon-svg collapse-minus">
  <use xlinkHref="./img/icons.svg#collapse" />
</svg>`;
const check = `<svg className="icon-svg check">
  <use xlinkHref="./img/icons.svg#check" />
</svg>`;
const clipboard = `<svg className="icon-svg clipboard">
  <use xlinkHref="./img/icons.svg#clipboard" />
</svg>`;
const cart = `<svg className="icon-svg cart">
  <use xlinkHref="./img/icons.svg#cart" />
</svg>
`;
const contact = `<svg className="icon-svg contact">
  <use xlinkHref="./img/icons.svg#contact" />
</svg>`;
const dlete = `<svg className="icon-svg delete">
  <use xlinkHref="./img/icons.svg#delete" />
</svg>`;
const division = `<svg className="icon-svg division">
  <use xlinkHref="./img/icons.svg#division" />
</svg>`;
const download = `<svg className="icon-svg download">
  <use xlinkHref="./img/icons.svg#download" />
</svg>`;
const eventCalendar = `<svg className="icon-svg event-calendar">
  <use xlinkHref="./img/icons.svg#event-calendar" />
</svg>`;
const exLink = `<svg className="icon-svg ex-link">
  <use xlinkHref="./img/icons.svg#ex-link" />
</svg>`;
const filter = `<svg className="icon-svg filter">
  <use xlinkHref="./img/icons.svg#filter" />
</svg>`;
const greenguard = `<svg className="icon-svg greenguard">
  <use xlinkHref="./img/icons.svg#greenguard" />
</svg>`;
const location = `<svg className="icon-svg location">
  <use xlinkHref="./img/icons.svg#location" />
</svg>`;
const menu = `<svg className="icon-svg menu">
  <use xlinkHref="./img/icons.svg#menu" />
</svg>`;
const menuClose = `<svg className="icon-svg menu-close">
  <use xlinkHref="./img/icons.svg#menu-close" />
</svg>`;
const play = `<svg className="icon-svg play">
  <use xlinkHref="./img/icons.svg#play" />
</svg>`;
const primaryArrow = `<svg className="icon-svg primary-arrow">
  <use xlinkHref="./img/icons.svg#primary-arrow" />
</svg>`;
const quoteEnd = `'<svg className="icon-svg quote-end">
  <use xlinkHref="./img/icons.svg#quote-end" />
</svg>`;
const quoteStart = `<svg className="icon-svg quote-start">
  <use xlinkHref="./img/icons.svg#quote-start" />
</svg>`;
const search = `<svg className="icon-svg search">
  <use xlinkHref="./img/icons.svg#search" />
</svg>`;
const email = `<svg className="icon-svg email">
  <use xlinkHref="./img/icons.svg#email" />
</svg>`;
const swatchBook = `<svg className="icon-svg swatch-book">
  <use xlinkHref="./img/icons.svg#swatch-book" />
</svg>`;
const houzz = `<svg className="icon-svg houzz">
  <use xlinkHref="./img/icons.svg#houzz" />
</svg>`;
const instagram = `<svg className="icon-svg instagram">
  <use xlinkHref="./img/icons.svg#instagram" />
</svg>`;
const linkedIn = `<svg className="icon-svg LinkedIn">
  <use xlinkHref="./img/icons.svg#linkedin" />
</svg>`;
const pinterest = `<svg className="icon-svg pinterest">
  <use xlinkHref="./img/icons.svg#pinterest" />
</svg>`;
const twitter = `<svg className="icon-svg twitter">
  <use xlinkHref="./img/icons.svg#twitter" />
</svg>`;
const youtube = `<svg className="icon-svg youtube">
  <use xlinkHref="./img/icons.svg#youtube" />
</svg>`;
const facebook = `<svg className="icon-svg facebook">
  <use xlinkHref="./img/icons.svg#facebook" />
</svg>`;
const information = `<svg className="icon-svg information">
  <use xlinkHref="./img/icons.svg#information" />
</svg>`;

class Icons extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Iconography</h1>
        <p>
          Icons are used to help visually communicate different messages to our
          users, reducing cognitive load and allowing for faster comprehension.
          The Primary Design System has curated the following SVG icons to
          convey a variety of ideas, objects, and actions to be used as
          necessary.
        </p>
        <p>
          Usage: Primary Design System relies on an SVG image map for the usage
          of SVGs across the application. Copy the individual SVG HTML from the
          code below. If you have the icons.svg file included in your
          application's image folder (/img), copy and paste the specific HTML
          you would like to use per SVG Icon. You can change the size and fill
          in the local CSS file as needed.
        </p>
        <h3>SVG Icons</h3>
        <IconGrid />
      </div>
    );
  }
}

export default Icons;
