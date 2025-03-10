import React, { Component } from "react";
import Tabs from "../../Atomic_Elements/Molecules/Tabs";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const tabs = `<div className="tabbed">
  <ul>
    <li>
      <a href="#section1">Section 1</a>
    </li>
    <li>
      <a href="#section2">Section 2</a>
    </li>
    <li>
      <a href="#section3">Section 3</a>
    </li>
    <li>
      <a href="#section4">Section 4</a>
    </li>
  </ul>
  <section id="section1">
    <h2>Section 1</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
      euismod, tortor nec pharetra ultricies, ante erat imperdiet velit,
      nec laoreet enim lacus a velit. <a href={null}>Nam luctus</a>,
      enim in interdum condimentum, nisl diam iaculis lorem, vel
      volutpat mi leo sit amet lectus. Praesent non odio bibendum magna
      bibendum accumsan.
    </p>
  </section>
  <section id="section2">
    <h2>Section 2</h2>
    <p>
      Nullam at diam nec arcu suscipit auctor non a erat. Sed et magna
      semper, eleifend magna non, facilisis nisl. Proin et est et lorem
      dictum finibus ut nec turpis. Aenean nisi tortor, euismod a mauris
      a, mattis scelerisque tortor. Sed dolor risus, varius a nibh id,
      condimentum lacinia est. In lacinia cursus odio a aliquam.
      Curabitur tortor magna, laoreet ut rhoncus at, sodales consequat
      tellus.
    </p>
  </section>
  <section id="section3">
    <h2>Section 3</h2>
    <p>
      Phasellus ac tristique orci. Nulla maximus{" "}
      <a href={null}>justo nec dignissim consequat</a>. Sed vehicula
      diam sit amet mi efficitur vehicula in in nisl. Aliquam erat
      volutpat. Suspendisse lorem turpis, accumsan consequat consectetur
      gravida, <a href={null}>pellentesque ac ante</a>. Aliquam in
      commodo ligula, sit amet mollis neque. Vestibulum at facilisis
      massa.
    </p>
  </section>
  <section id="section4">
    <h2>Section 4</h2>
    <p>
      Nam luctus, enim in interdum condimentum, nisl diam iaculis lorem,
      vel volutpat mi leo sit amet lectus. Praesent non odio bibendum
      magna bibendum accumsan. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Nam euismod, tortor nec pharetra ultricies, ante
      erat imperdiet velit, nec laoreet enim lacus a velit.
    </p>
  </section>
</div>`;

class TabPanels extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./js/tabs.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <h1 className="title">Tabs</h1>
        <p>Tabs</p>
        <Tabs />
        <CodeContainer text={tabs} />
      </div>
    );
  }
}

export default TabPanels;
