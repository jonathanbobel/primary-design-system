import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import icons from "../../img/icons.svg";

class CopyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      copied: false,
    };
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    const timer = setTimeout(() => {
      this.setState({ copied: false });
    }, 3000);
    return () => clearTimeout(timer);
  }

  render() {
    return (
      <CopyToClipboard
        text={this.props.text}
        onCopy={() => this.setState({ copied: true })}
      >
        <button
          onClick={this.resetState}
          title={this.props.title}
          className={this.state.copied ? "copied" : null}
        >
          {this.state.copied ? (
            <div>
              <span>Copied</span>
              <svg className="icon-svg check">
                <use xlinkHref={`${icons}#check`} />
              </svg>
            </div>
          ) : (
            <div>
              <span>Click to Copy</span>
              <svg className="icon-svg clipboard">
                <use xlinkHref={`${icons}#clipboard`} />
              </svg>
            </div>
          )}
        </button>
      </CopyToClipboard>
    );
  }
}

export default CopyButton;
