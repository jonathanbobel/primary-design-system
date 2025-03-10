import React, { Component } from "react";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";
import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';

const pagination = `<div class="pagination">
  <div class="pages">
    <button class="previous">
      <svg class="icon-svg left">
        <use xlinkHref="../img/icons.svg#left-arrow" />
      </svg>
    </button>
    <div class="pagelist">
      <a href="">1</a>
      <span className="ellipsis">...</span>
      <a href="">49</a>
      <span>50</span>
      <a href="">51</a>
      <span className="ellipsis">...</span>
      <a href="">100</a>
    </div>
    <button class="next">
      <svg class="icon-svg right">
        <use xlinkHref="../img/icons.svg#right-arrow" />
      </svg>
    </button>
  </div>
</div>`;

class Pages extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Pagination</h1>
        <h3>Pagination Structure</h3>
        <div class="w3-row mb-4 pagination-pill">
          <span>prev</span>
          <span>first</span>
          <span>...</span>
          <span>immediate low</span>
          <span>
            <b>selection</b>
          </span>
          <span>immediate high</span>
          <span>...</span>
          <span>last</span>
          <span>next</span>
        </div>
        <h3>Gap Notes</h3>
        <div class="w3-row mb-4">
          <div className="w3-col pagination-pill" style={{ width: "45px" }}>
            <span>...</span>
          </div>
          <div className="w3-rest">
            <p>
              This gap represents the numbers between the first/last and the
              immediate high/low. It is possible for this gap to be hidden if
              there are no pages between the immediate high/low or the selection
              and first/last
            </p>
            <p>This is not a clickable element</p>
          </div>
        </div>
        <h3>Pagination Examples</h3>
        <div class="pagination">
          <div class="pages">
            <button class="previous disabled">
              <svg class="icon-svg left">
                <use xlinkHref="../img/icons.svg#left-arrow" />
              </svg>
            </button>
            <div class="pagelist">
              <span>1</span>
              <a href="">2</a>
              <a href="">...</a>
              <a href="">13</a>
            </div>
            <button class="next">
              <svg class="icon-svg right">
                <use xlinkHref="../img/icons.svg#right-arrow" />
              </svg>
            </button>
          </div>
        </div>
        <div class="pagination">
          <div class="pages">
            <button class="previous">
              <svg class="icon-svg left">
                <use xlinkHref="../img/icons.svg#left-arrow" />
              </svg>
            </button>
            <div class="pagelist">
              <a href="">1</a>
              <span>2</span>
              <a href="">3</a>
              <span className="ellipsis">...</span>
              <a href="">100</a>
            </div>
            <button class="next">
              <svg class="icon-svg right">
                <use xlinkHref="../img/icons.svg#right-arrow" />
              </svg>
            </button>
          </div>
        </div>
        <div class="pagination">
          <div class="pages">
            <button class="previous">
              <svg class="icon-svg left">
                <use xlinkHref="../img/icons.svg#left-arrow" />
              </svg>
            </button>
            <div class="pagelist">
              <a href="">1</a>
              <a href="">2</a>
              <span>3</span>
              <a href="">4</a>
              <span className="ellipsis">...</span>
              <a href="">100</a>
            </div>
            <button class="next">
              <svg class="icon-svg right">
                <use xlinkHref="../img/icons.svg#right-arrow" />
              </svg>
            </button>
          </div>
        </div>
        <div class="pagination">
          <div class="pages">
            <button class="previous">
              <svg class="icon-svg left">
                <use xlinkHref="../img/icons.svg#left-arrow" />
              </svg>
            </button>
            <div class="pagelist">
              <a href="">1</a>
              <span className="ellipsis">...</span>
              <a href="">49</a>
              <span>50</span>
              <a href="">51</a>
              <span className="ellipsis">...</span>
              <a href="">100</a>
            </div>
            <button class="next">
              <svg class="icon-svg right">
                <use xlinkHref="../img/icons.svg#right-arrow" />
              </svg>
            </button>
          </div>
        </div>
        <div class="pagination">
          <div class="pages">
            <button class="previous">
              <svg class="icon-svg left">
                <use xlinkHref="../img/icons.svg#left-arrow" />
              </svg>
            </button>
            <div class="pagelist">
              <a href="">1</a>
              <span className="ellipsis">...</span>
              <a href="">97</a>
              <span>98</span>
              <a href="">99</a>
              <a href="">100</a>
            </div>
            <button class="next">
              <svg class="icon-svg right">
                <use xlinkHref="../img/icons.svg#right-arrow" />
              </svg>
            </button>
          </div>
        </div>
        <CodeContainer text={pagination} />
        <h3>Pagination Template - Product Listing</h3>
        <div class="pagination">
          <span class="showing">Showing 1-50 of 500</span>
        </div>
        <div className="dummy-grid">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div class="pagination bottom mb-4">
          <div className="results">
            <div className="select-container">
              <span>Results per page</span>
              <div class="select-container">
                <select id="select" name="select">
                  <option value="1">50</option>
                  <option value="2">100</option>
                  <option value="3">500</option>
                </select>
              </div>
            </div>
          </div>
          <div class="pages">
            <button class="previous disabled">
              <svg class="icon-svg left">
                <use xlinkHref="../img/icons.svg#left-arrow" />
              </svg>
            </button>
            <div class="pagelist">
              <span>1</span>
              <a href="">2</a>
              <a href="">3</a>
              <span className="ellipsis">...</span>
              <a href="">100</a>
            </div>
            <button class="next">
              <svg class="icon-svg right">
                <use xlinkHref="../img/icons.svg#right-arrow" />
              </svg>
            </button>
          </div>
        </div>
        <h3>Material Pagination</h3>
        <Pagination classes={"pagination"} count={5} />
        <h3>Material Table Pagination</h3>
        <TablePagination count={50} />
      </div>
    );
  }
}

export default Pages;
