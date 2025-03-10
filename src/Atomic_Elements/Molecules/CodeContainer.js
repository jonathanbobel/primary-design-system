import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyButton from "../../Atomic_Elements/Atoms/CopyButton";

class CodeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showMore = this.showMore.bind(this);
  }

  showMore(e) {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  }

  showButton() {
    let containers = document.querySelectorAll(".code-container--code pre");
    let codeContainers = document.querySelectorAll(".code-container--code");
    const showButton = document.querySelectorAll(".show-more");

    for (var i = 0, len = containers.length; i < len; i++) {
      if (containers[i].offsetHeight < containers[i].scrollHeight) {
        showButton[i].style.display = "flex";
      } else {
        codeContainers[i].classList.add("no-show");
      }
    }
  }

  componentDidMount() {
    this.showButton();
  }

  render() {
    return (
      <div>
        <div className="code-container">
          <header>
            <ul>
              <li className="language">HTML</li>
            </ul>
            <ul className="utility">
              <li className="show-code">
                <CopyButton text={this.props.text} />
              </li>
              <li className="show-more">
                <button onClick={this.showMore}>
                  {this.state.show ? "Show Less" : "Show More"}
                </button>
              </li>
            </ul>
          </header>
          <div
            className={
              this.state.show
                ? "code-container--code more"
                : "code-container--code"
            }
          >
            <SyntaxHighlighter language="html" style={vs2015} wrapLines={true}>
              {this.props.text}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}

export default CodeContainer;
