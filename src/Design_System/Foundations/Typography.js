import React, { Component } from "react";

class Typography extends Component {
  render() {
    return (
      <div className="typography">
        <h1 className="title">Typography</h1>
        <p>
          Consistent typography styles unify all digital products by
          Sherwin-Williams. Our primary digital typeface is Open Sans by
          Google–a crisp, readable typeface that is available in a variety of
          weights to create emphasis and visual interest on screen.
        </p>
        <h3>Font Family</h3>
        <p>Open Sans</p>
        <div className="font-container">
          <p style={{ textTransform: "uppercase" }}>
            abcdefghijklmnopqrstuvwxwz
          </p>
          <p>abcdefghijklmnopqrstuvwxwz</p>
          <p>123456789</p>
        </div>
        <button>Download Font Family</button>
        <h3>Font Weights</h3>
        <div className="font-weight-grid">
          <div>
            <p style={{ fontWeight: 300 }}>Aa</p>
            <p>Light</p>
          </div>
          <div>
            <p>aA</p>
            <p>Regular</p>
          </div>
          <div>
            <p style={{ fontStyle: "italic" }}>Aa</p>
            <p>Italic</p>
          </div>
          <div>
            <p style={{ fontWeight: 600 }}>Aa</p>
            <p>Semibold</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, fontStyle: "italic" }}>Aa</p>
            <p>Semibold Italic</p>
          </div>
          <div>
            <p style={{ fontWeight: 700 }}>Aa</p>
            <p>Bold</p>
          </div>
          <div>
            <p style={{ fontWeight: 900 }}>Aa</p>
            <p>Extrabold</p>
          </div>
        </div>
        <h3>Text Styles - Desktop</h3>
        <div className="text-styles">
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h1</strong>
              </p>
              <p>44px / 56px</p>
            </div>
            <div className="w3-col l10 m12">
              <h1>The quick brown fox jumps over the lazy dog</h1>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h2</strong>
              </p>
              <p>36px / 48px</p>
            </div>
            <div className="w3-col l10 m12">
              <h2>The quick brown fox jumps over the lazy dog</h2>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h3</strong>
              </p>
              <p>28px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <h3>The quick brown fox jumps over the lazy dog</h3>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h4</strong>
              </p>
              <p>24px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <h4>The quick brown fox jumps over the lazy dog</h4>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h5</strong>
              </p>
              <p>18px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <h5>The quick brown fox jumps over the lazy dog</h5>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h6</strong>
              </p>
              <p>16px / 16px</p>
            </div>
            <div className="w3-col l10 m12">
              <h6>The quick brown fox jumps over the lazy dog</h6>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Body Intro</strong>
              </p>
              <p>22px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="body-intro">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Body Copy</strong>
              </p>
              <p>16px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Filter Title</strong>
              </p>
              <p>14px / 18px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="filter-title">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Chart & Table Copy</strong>
              </p>
              <p>24px / 18px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="table-copy">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p className="error-text">Error Text</p>
              <p>16px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="error-text">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Caption Text</strong>
              </p>
              <p>12px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="caption">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row last">
            <div className="w3-col l2 m12">
              <p>
                <strong>CTA & Text Links</strong>
              </p>
              <p>16px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <a className="link" href="/">
                The quick brown fox jumps over the lazy dog
              </a>
            </div>
          </div>
        </div>
        <h3>Text Styles - Tablet</h3>
        <div className="text-styles tablet">
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h1</strong>
              </p>
              <p>38px / 48px</p>
            </div>
            <div className="w3-col l10 m12">
              <h1>The quick brown fox jumps over the lazy dog</h1>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h2</strong>
              </p>
              <p>28px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <h2>The quick brown fox jumps over the lazy dog</h2>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h3</strong>
              </p>
              <p>24px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <h3>The quick brown fox jumps over the lazy dog</h3>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h4</strong>
              </p>
              <p>20px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <h4>The quick brown fox jumps over the lazy dog</h4>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h5</strong>
              </p>
              <p>16px / 20px</p>
            </div>
            <div className="w3-col l10 m12">
              <h5>The quick brown fox jumps over the lazy dog</h5>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h6</strong>
              </p>
              <p>14px / 16px</p>
            </div>
            <div className="w3-col l10 m12">
              <h6>The quick brown fox jumps over the lazy dog</h6>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Body Intro</strong>
              </p>
              <p>22px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="body-intro">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Body Copy</strong>
              </p>
              <p>16px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Filter Title</strong>
              </p>
              <p>14px / 18px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="filter-title">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Chart & Table Copy</strong>
              </p>
              <p>24px / 18px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="table-copy">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p className="error-text">Error Text</p>
              <p>16px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="error-text">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Caption Text</strong>
              </p>
              <p>12px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="caption">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row last">
            <div className="w3-col l2 m12">
              <p>
                <strong>CTA & Text Links</strong>
              </p>
              <p>14px / 16px</p>
            </div>
            <div className="w3-col l10 m12">
              <a className="link" href="/">
                The quick brown fox jumps over the lazy dog
              </a>
            </div>
          </div>
        </div>
        <h3>Text Styles - Mobile</h3>
        <div className="text-styles mobile">
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h1</strong>
              </p>
              <p>28px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <h1>The quick brown fox jumps over the lazy dog</h1>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h2</strong>
              </p>
              <p>24px / 32px</p>
            </div>
            <div className="w3-col l10 m12">
              <h2>The quick brown fox jumps over the lazy dog</h2>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h3</strong>
              </p>
              <p>20px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <h3>The quick brown fox jumps over the lazy dog</h3>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h4</strong>
              </p>
              <p>18px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <h4>The quick brown fox jumps over the lazy dog</h4>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h5</strong>
              </p>
              <p>14px / 21px</p>
            </div>
            <div className="w3-col l10 m12">
              <h5>The quick brown fox jumps over the lazy dog</h5>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>h6</strong>
              </p>
              <p>12px / 16px</p>
            </div>
            <div className="w3-col l10 m12">
              <h6>The quick brown fox jumps over the lazy dog</h6>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Body Intro</strong>
              </p>
              <p>16px / 24px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="body-intro">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Body Copy</strong>
              </p>
              <p>12px / 20px</p>
            </div>
            <div className="w3-col l10 m12">
              <p>The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Filter Title</strong>
              </p>
              <p>12px / 20px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="filter-title">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Error Text</strong>
              </p>
              <p>12px / 20px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="table-copy">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p className="error-text">Error Text</p>
              <p>12px / 20px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="error-text">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row">
            <div className="w3-col l2 m12">
              <p>
                <strong>Caption Text</strong>
              </p>
              <p>10px / 16px</p>
            </div>
            <div className="w3-col l10 m12">
              <p className="caption">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
          <div className="w3-row last">
            <div className="w3-col l2 m12">
              <p>
                <strong>CTA & Text Links</strong>
              </p>
              <p>12px / 23px</p>
            </div>
            <div className="w3-col l10 m12">
              <a className="link" href="/">
                The quick brown fox jumps over the lazy dog
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Typography;
