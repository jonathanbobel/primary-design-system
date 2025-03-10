import React, { Component } from "react";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const code_dropmenu = `<div class="menu-container">
  <nav class="dropmenu level-one">
    <ul>
      <li>
        <a class="dropdown" href="">
          Dropmenu
          <svg class="icon-svg up">
            <use xlink:href="../img/icons.svg#up-arrow" />
          </svg>
        </a>
        <ul>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`;
const code_dropmenu_level_two = `<div class="menu-container">
  <nav class="dropmenu level-one level-two">
    <ul>
      <li>
        <a class="dropdown" href="">
          Dropmenu
          <svg class="icon-svg up">
            <use xlink:href="../img/icons.svg#up-arrow" />
          </svg>
        </a>
        <ul>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
          </li>
          <li>
            <a class="active" href="">
              List Item
              <svg class="icon-svg right">
                <use xlink:href="../img/icons.svg#right-arrow" />
              </svg>
            </a>
            <ul>
              <a class="list-item" href="">
                List Item
                <svg class="icon-svg primary-arrow">
                  <use xlink:href="../img/icons.svg#primary-arrow" />
                </svg>
              </a>
              <li>
                <a href="">
                  Sublist Item
                  <svg class="icon-svg right">
                    <use xlink:href="../img/icons.svg#right-arrow" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  Sublist Item
                  <svg class="icon-svg right">
                    <use xlink:href="../img/icons.svg#right-arrow" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  Sublist Item
                  <svg class="icon-svg right">
                    <use xlink:href="../img/icons.svg#right-arrow" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  Sublist Item
                  <svg class="icon-svg right">
                    <use xlink:href="../img/icons.svg#right-arrow" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  Sublist Item
                  <svg class="icon-svg right">
                    <use xlink:href="../img/icons.svg#right-arrow" />
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</div>`;

class Menus extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Menus</h1>
        <p>
          Menus provide a way for our users to make selections from a list of
          multiple options. Relevant content can be grouped together and items
          should be easily scannable.
        </p>
        <h3>Dropmenu</h3>
        <nav className="dropmenu">
          <ul>
            <li>
              <a className="dropdown mb-5" href={null}>
                Dropmenu
                <svg className="icon-svg down">
                  <use xlinkHref="../img/icons.svg#down-arrow" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <div className="menu-container">
          <nav className="dropmenu level-one">
            <ul>
              <li>
                <a className="dropdown" href={null}>
                  Dropmenu
                  <svg className="icon-svg up">
                    <use xlinkHref="../img/icons.svg#up-arrow" />
                  </svg>
                </a>
                <ul>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <CodeContainer text={code_dropmenu} />
        <div className="menu-container">
          <nav className="dropmenu level-one level-two">
            <ul>
              <li>
                <a className="dropdown" href={null}>
                  Dropmenu
                  <svg className="icon-svg up">
                    <use xlinkHref="../img/icons.svg#up-arrow" />
                  </svg>
                </a>
                <ul>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="active" href={null}>
                      List Item
                      <svg className="icon-svg right">
                        <use xlinkHref="../img/icons.svg#right-arrow" />
                      </svg>
                    </a>
                    <ul>
                      <a className="list-item" href={null}>
                        List Item
                        <svg className="icon-svg primary-arrow">
                          <use xlinkHref="../img/icons.svg#primary-arrow" />
                        </svg>
                      </a>
                      <li>
                        <a href={null}>
                          Sublist Item
                          <svg className="icon-svg right">
                            <use xlinkHref="../img/icons.svg#right-arrow" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={null}>
                          Sublist Item
                          <svg className="icon-svg right">
                            <use xlinkHref="../img/icons.svg#right-arrow" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={null}>
                          Sublist Item
                          <svg className="icon-svg right">
                            <use xlinkHref="../img/icons.svg#right-arrow" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={null}>
                          Sublist Item
                          <svg className="icon-svg right">
                            <use xlinkHref="../img/icons.svg#right-arrow" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={null}>
                          Sublist Item
                          <svg className="icon-svg right">
                            <use xlinkHref="../img/icons.svg#right-arrow" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <CodeContainer text={code_dropmenu_level_two} />
      </div>
    );
  }
}

export default Menus;
