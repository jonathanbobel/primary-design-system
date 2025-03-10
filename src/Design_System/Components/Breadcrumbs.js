import React, { Component } from "react";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const code_breadcrumb = `<nav aria-label="Breadcrumb" class="breadcrumb">
  <ul>
    <li>
      <a href="/breadcrumbs">Home</a>
    </li>
    <li>
      <a href="/breadcrumbs">Level Two</a>
    </li>
    <li>
      <a href="/breadcrumbs">Level Three</a>
    </li>
    <li aria-current="page">You are Here</li>
  </ul>
</nav>`;

class Breadcrumbs extends Component {
  state = {
    copied: false,
  };

  onClick = (index) => {
    console.log(`clicked`); // eslint-disable-line
  };

  render() {
    return (
      <div>
        <h1 className="title">Breadcrumbs</h1>
        <p className="mb-3">
          We use breadcrumbs to guide our users, giving them context of where
          they are within the website structure. This ensures our users can
          navigate seamlessly between page levels and reduces the number of
          actions required to get to a higher-level page.
        </p>
        <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
          <ul>
            <li>
              <a href="/breadcrumbs">Home</a>
            </li>
            <li>
              <a href="/breadcrumbs">Level Two</a>
            </li>
            <li>
              <a href="/breadcrumbs">Level Three</a>
            </li>
            <li aria-current="page">You are Here</li>
          </ul>
        </nav>
        <CodeContainer text={code_breadcrumb} />{" "}
      </div>
    );
  }
}

export default Breadcrumbs;
