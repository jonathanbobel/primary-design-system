import icons from "../../img/icons.svg";
import CopyButton from "../../Atomic_Elements/Atoms/CopyButton";

const iconList = [
    { name: "account", label: "Account" },
    { name: "down-arrow", label: "Caret - Down" },
    { name: "dropdown", label: "Caret - Dropdown" },
    { name: "left-arrow", label: "Caret - Left" },
    { name: "right-arrow", label: "Caret - Right" },
    { name: "up-arrow", label: "Caret - Up" },
    { name: "close", label: "Close" },
    { name: "expand", label: "Expand" },
    { name: "collapse", label: "Collapse" },
    { name: "check", label: "Check" },
    { name: "clipboard", label: "Clipboard" },
    { name: "cart", label: "Cart" },
    { name: "contact", label: "Contact" },
    { name: "delete", label: "Delete" },
    { name: "division", label: "Division" },
    { name: "download", label: "Download" },
    { name: "event-calendar", label: "Event Calendar" },
    { name: "ex-link", label: "External Link" },
    { name: "filter", label: "Filter" },
    { name: "greenguard", label: "Greenguard" },
    { name: "location", label: "Location" },
    { name: "menu", label: "Menu" },
    { name: "menu-close", label: "Menu - Close" },
    { name: "play", label: "Play" },
    { name: "primary-arrow", label: "Primary Arrow" },
    { name: "quote-end", label: "Quote End" },
    { name: "quote-start", label: "Quote Start" },
    { name: "search", label: "Search" },
    { name: "information", label: "Information" },
    { name: "email", label: "Email" },
    { name: "swatch-book", label: "Swatch Book" },
    { name: "houzz", label: "Houzz" },
    { name: "instagram", label: "Instagram" },
    { name: "linkedin", label: "LinkedIn" },
    { name: "pinterest", label: "Pinterest" },
    { name: "twitter", label: "Twitter" },
    { name: "youtube", label: "YouTube" },
    { name: "facebook", label: "Facebook" },
  ];

  const IconGrid = () => {
    return (
      <div className="icon-grid">
        {iconList.map((icon) => (
          <div className="icon-container" key={icon.name}>
            <div className="svg-container">
              <svg className={`icon-svg ${icon.name}`}>
                <use xlinkHref={`${icons}#${icon.name}`} />
              </svg>
              <CopyButton text={`<svg class="icon-svg ${icon.name}"><use xlink:href='${icons}#${icon.name}' /></svg>`} />
            </div>
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default IconGrid;