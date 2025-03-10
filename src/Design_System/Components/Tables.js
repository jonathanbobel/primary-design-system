import React, { Component } from "react";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const table = `<table>
  <thead>
    <tr>
      <th scope="col">
        <button class="sort">
          Product Title
          <svg class="icon-svg filter">
            <use xlink:href="img/icons.svg#filter"></use>
          </svg>
        </button>
      </th>
      <th scope="col">Industry Type</th>
      <th scope="col">Data Sheets</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Acrylicoat</td>
      <td>Protective and Marine</td>
      <td class="svg">
        <a href="">
          <span>EPS</span>
          <svg class="icon-svg download">
            <use xlink:href="../img/icons.svg#download" />
          </svg>
        </a>
      </td>
    </tr>
    <tr>
      <td>Acrylicoat Hi-Impact</td>
      <td>General Industrial</td>
      <td class="svg">
        <a href="">
          <span>PDS</span>
          <svg class="icon-svg download">
            <use xlink:href="../img/icons.svg#download" />
          </svg>
        </a>
      </td>
    </tr>
    <tr>
      <td>Chrome Hazard Free Epoxy Primer</td>
      <td>Protective and Marine</td>
      <td class="svg">
        <a href="">
          <span>SDS</span>
          <svg class="icon-svg download">
            <use xlink:href="../img/icons.svg#download" />
          </svg>
        </a>
      </td>
    </tr>
    <tr>
      <td>JetFlex Interior Composite Filler</td>
      <td>AeroSpace Coatings</td>
      <td class="svg">
        <a href="">
          <span>EPS</span>
          <svg class="icon-svg download">
            <use xlink:href="../img/icons.svg#download" />
          </svg>
        </a>
      </td>
    </tr>
    <tr>
      <td>
        Military Aerospace MIL-PRF-85285, Type IV, Curing Agent Military
        Aeros
      </td>
      <td>AeroSpace Coatings</td>
      <td class="svg">
        <a href="">
          <span>EPS</span>
          <svg class="icon-svg download">
            <use xlink:href="../img/icons.svg#download" />
          </svg>
        </a>
      </td>
    </tr>
    <tr>
      <td>Phoenix Colorant</td>
      <td>Protective and Marine</td>
      <td class="svg">
        <a href="">
          <span>PDS</span>
          <svg class="icon-svg download">
            <use xlink:href="../img/icons.svg#download" />
          </svg>
        </a>
      </td>
    </tr>
    <tr>
      <td>SKYscapes® General Aviation CLEARCOAT</td>
      <td>General Aviation</td>
      <td class="svg">
        <a href="">
          <span>EPS</span>
          <svg class="icon-svg download">
            <use xlink:href="../img/icons.svg#download" />
          </svg>
        </a>
      </td>
    </tr>
  </tbody>
</table>`;

class Tables extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Tables</h1>
        <p>
          Tables are used to organize data in a way that allows users to easily
          scan, compare and sort the information.
        </p>
        <table>
          <thead>
            <tr>
              <th scope="col">
                <button className="sort">
                  Product Title
                  <svg className="icon-svg filter">
                    <use xlinkHref="img/icons.svg#filter"></use>
                  </svg>
                </button>
              </th>
              <th scope="col">Industry Type</th>
              <th scope="col">Data Sheets</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Acrylicoat</td>
              <td>Protective and Marine</td>
              <td className="svg">
                <a href={null}>
                  <span>EPS</span>
                  <svg className="icon-svg download">
                    <use xlinkHref="../img/icons.svg#download" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>Acrylicoat Hi-Impact</td>
              <td>General Industrial</td>
              <td className="svg">
                <a href={null}>
                  <span>PDS</span>
                  <svg className="icon-svg download">
                    <use xlinkHref="../img/icons.svg#download" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>Chrome Hazard Free Epoxy Primer</td>
              <td>Protective and Marine</td>
              <td className="svg">
                <a href={null}>
                  <span>SDS</span>
                  <svg className="icon-svg download">
                    <use xlinkHref="../img/icons.svg#download" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>JetFlex Interior Composite Filler</td>
              <td>AeroSpace Coatings</td>
              <td className="svg">
                <a href={null}>
                  <span>EPS</span>
                  <svg className="icon-svg download">
                    <use xlinkHref="../img/icons.svg#download" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                Military Aerospace MIL-PRF-85285, Type IV, Curing Agent Military
                Aeros
              </td>
              <td>AeroSpace Coatings</td>
              <td className="svg">
                <a href={null}>
                  <span>EPS</span>
                  <svg className="icon-svg download">
                    <use xlinkHref="../img/icons.svg#download" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>Phoenix Colorant</td>
              <td>Protective and Marine</td>
              <td className="svg">
                <a href={null}>
                  <span>PDS</span>
                  <svg className="icon-svg download">
                    <use xlinkHref="../img/icons.svg#download" />
                  </svg>
                </a>
              </td>
            </tr>
            <tr>
              <td>SKYscapes® General Aviation CLEARCOAT</td>
              <td>General Aviation</td>
              <td className="svg">
                <a href={null}>
                  <span>EPS</span>
                  <svg className="icon-svg download">
                    <use xlinkHref="../img/icons.svg#download" />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <CodeContainer text={table} />
      </div>
    );
  }
}

export default Tables;
