import React, { Component } from "react";
import Button from "../../Atomic_Elements/Atoms/Button";
import Card from "../../Atomic_Elements/Molecules/Card";
import CodeContainer from "../../Atomic_Elements/Molecules/CodeContainer";

const carousel = `<div class="carousel">
  <div class="cards carousel-card">
    <h6 class="separator">Career Paths</h6>
    <h3>Our People</h3>
    <p>The foundation of our company is our people. Join us by bringing your experience and unique skills to contribute to our legacy.</p>
    <button label="Career Paths">Career Paths</button>
  </div>
  <div class="carousel-container">
    <div class="carousel-cards-container">
        <div>
          <div class="cards">
            <h6>Career Path</h6>
            <p class="date">Subhead</p>
            <h4>Manufacturing and Distribution</h4>
            <p>On these teams, you're creating the best paint on earth. We’re committed to excellence, safety and quality in everything we do.</p>
          </div>
        </div>
        <div>
          <div class="cards">
            <h6>Career Path</h6>
            <p class="date">Subhead</p>
            <h4>Manufacturing and Distribution</h4>
            <p>On these teams, you're creating the best paint on earth. We’re committed to excellence, safety and quality in everything we do.</p>
          </div>
        </div>
        <div>
          <div class="cards">
            <h6>Career Path</h6>
            <p class="date">Subhead</p>
            <h4>Manufacturing and Distribution</h4>
            <p>On these teams, you're creating the best paint on earth. We’re committed to excellence, safety and quality in everything we do.</p>
          </div>
        </div>
    </div>
    <div class="carousel-controls">
        <span>
          <svg class="icon-svg left-arrow disabled">
              <use xlink:href="../img/icons.svg#left-arrow"></use>
          </svg>
        </span>
        <span class="dot active"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <span>
          <svg class="icon-svg right-arrow">
              <use xlink:href="../img/icons.svg#right-arrow"></use>
          </svg>
        </span>
    </div>
  </div>
</div>`;
const carousel_nocard = `<div class="carousel">
  <div class="carousel-container">
    <div class="carousel-cards-container">
      <div>
        <div class="cards video-small">
          <h6>Video</h6>
          <p class="date">Subhead</p>
          <h4>Becoming tactically lean</h4>
          <div class="media-container">
            <a href="">
              <svg class="icon-svg play">
                <use xlink:href="../img/icons.svg#play"></use>
              </svg>
              <img src="../img/primary/video_sample.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="cards video-small">
          <h6>Video</h6>
          <p class="date">Subhead</p>
          <h4>Becoming tactically lean</h4>
          <div class="media-container">
            <a href="">
              <svg class="icon-svg play">
                <use xlink:href="../img/icons.svg#play"></use>
              </svg>
              <img src="../img/primary/video_sample.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="cards video-small">
          <h6>Video</h6>
          <p class="date">Subhead</p>
          <h4>Becoming tactically lean</h4>
          <div class="media-container">
            <a href="">
              <svg class="icon-svg play">
                <use xlink:href="../img/icons.svg#play"></use>
              </svg>
              <img src="../img/primary/video_sample.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="cards video-small">
          <h6>Video</h6>
          <p class="date">Subhead</p>
          <h4>Becoming tactically lean</h4>
          <div class="media-container">
            <a href="">
              <svg class="icon-svg play">
                <use xlink:href="../img/icons.svg#play"></use>
              </svg>
              <img src="../img/primary/video_sample.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <span>
        <svg class="icon-svg left-arrow disabled">
          <use xlink:href="../img/icons.svg#left-arrow"></use>
        </svg>
      </span>
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span>
        <svg class="icon-svg right-arrow">
          <use xlink:href="../img/icons.svg#right-arrow"></use>
        </svg>
      </span>
    </div>
    <button class="secondary" label="View video gallery">
      View video gallery
    </button>
  </div>
</div>`;
const quick_links = `<div class="carousel">
  <div class="cards carousel-card">
    <h6 class="separator">Career Paths</h4>
    <h2>Aspen Art Museum</h2>
    <p>
      Stay up-to-date with the lastest product releases, news and upcoming
      industry events. lastest product releases, news and upcoming industry
      events.
    </p>
    <button label="Career Paths">Career Paths</button>
  </div>
  <div class="carousel-container">
    <div class="carousel-cards-container">
      <div>
        <div class="cards img-small img-only">
          <div class="media-container">
            <a>
              <svg class="icon-svg play">
                <use xlink:href="../img/icons.svg#play"></use>
              </svg>
              <img src="../img/primary/MediaTile-Image.jpg" alt="" />
            </a>
            <span class="caption">Image Caption</span>
          </div>
        </div>
      </div>
      <div>
        <div class="cards img-small img-only">
          <div class="media-container">
            <a>
              <svg class="icon-svg play">
                <use xlink:href="../img/icons.svg#play"></use>
              </svg>
              <img src="../img/primary/MediaTile-Image-2.jpg" alt="" />
            </a>
            <span class="caption">Image Caption</span>
          </div>
        </div>
      </div>
      <div>
        <div class="cards img-small img-only">
          <div class="media-container">
            <a>
              <svg class="icon-svg play">
                <use xlink:href="../img/icons.svg#play"></use>
              </svg>
              <img src="../img/primary/MediaTile-Image-3.jpg" alt="" />
            </a>
            <span class="caption">Image Caption</span>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <span>
        <svg class="icon-svg left-arrow disabled">
          <use xlink:href="../img/icons.svg#left-arrow"></use>
        </svg>
      </span>
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span>
        <svg class="icon-svg right-arrow">
          <use xlink:href="../img/icons.svg#right-arrow"></use>
        </svg>
      </span>
    </div>
  </div>
</div>`;

class Carousel extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Carousels</h1>
        <p>
          Carousels are comprised of multiple Media Card components that allow
          users to browse a collection of related content.{" "}
        </p>
        <h3>Carousel With Card</h3>
        <div className="carousel">
          <div className="cards carousel-card">
            <h6 className="separator">Career Paths</h6>
            <h2>Our People</h2>
            <p>
              The foundation of our company is our people. Join us by bringing
              your experience and unique skills to contribute to our legacy.
            </p>
            <Button label={"Career Paths"} title={"Career Paths"} />
          </div>
          <div className="carousel-container">
            <div className="carousel-cards-container">
              <Card
                className={"cards"}
                date={"Subhead"}
                subject={"Career Path"}
                h4={"Manufacturing and Distribution"}
                paragraph={
                  "On these teams, you're creating the best paint on earth. We’re committed to excellence, safety and quality in everything we do."
                }
              />
              <Card
                className={"cards"}
                date={"Subhead"}
                subject={"Career Path"}
                h4={"Manufacturing and Distribution"}
                paragraph={
                  "On these teams, you're creating the best paint on earth. We’re committed to excellence, safety and quality in everything we do."
                }
              />
              <Card
                className={"cards"}
                date={"Subhead"}
                subject={"Career Path"}
                h4={"Manufacturing and Distribution"}
                paragraph={
                  "On these teams, you're creating the best paint on earth. We’re committed to excellence, safety and quality in everything we do."
                }
              />
            </div>
            <div className="carousel-controls">
              <span>
                <svg className="icon-svg left-arrow disabled">
                  <use xlinkHref="../img/icons.svg#left-arrow" />
                </svg>
              </span>
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span>
                <svg className="icon-svg right-arrow">
                  <use xlinkHref="../img/icons.svg#right-arrow" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <CodeContainer text={carousel} />
        <h3>Carousel With Related Video</h3>
        <div className="carousel">
          <div className="carousel-container">
            <div className="carousel-cards-container">
              <Card
                className={"cards video-small"}
                subject={"Video"}
                date={"Subhead"}
                h4={"Becoming tactically lean"}
                imgalt={""}
                imgsrc={"../img/primary/video_sample.jpg"}
                href={""}
              />
              <Card
                className={"cards video-small"}
                subject={"Video"}
                h6={"Video"}
                date={"Subhead"}
                h4={"Becoming tactically lean"}
                imgalt={""}
                imgsrc={"../img/primary/video_sample.jpg"}
                href={""}
              />
              <Card
                className={"cards video-small"}
                subject={"Video"}
                h6={"Video"}
                date={"Subhead"}
                h4={"Becoming tactically lean"}
                imgalt={""}
                imgsrc={"../img/primary/video_sample.jpg"}
                href={""}
              />
              <Card
                className={"cards video-small"}
                subject={"Video"}
                h6={"Video"}
                date={"Subhead"}
                h4={"Becoming tactically lean"}
                imgalt={""}
                imgsrc={"../img/primary/video_sample.jpg"}
                href={""}
              />
            </div>
            <div className="carousel-controls">
              <span>
                <svg className="icon-svg left-arrow disabled">
                  <use xlinkHref="../img/icons.svg#left-arrow" />
                </svg>
              </span>
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span>
                <svg className="icon-svg right-arrow">
                  <use xlinkHref="../img/icons.svg#right-arrow" />
                </svg>
              </span>
            </div>
            <Button
              className={"secondary"}
              label={"View video gallery"}
              title={"View video gallery"}
            />
          </div>
        </div>
        <CodeContainer text={carousel_nocard} />
        <h3>Quick Links</h3>
        <div className="carousel">
          <div className="cards carousel-card">
            <h6 className="separator">Career Paths</h6>
            <h3>Aspen Art Museum</h3>
            <p>
              Stay up-to-date with the lastest product releases, news and
              upcoming industry events. lastest product releases, news and
              upcoming industry events.
            </p>
            <Button label={"Career Paths"} title={"Career Paths"} />
          </div>
          <div className="carousel-container">
            <div className="carousel-cards-container">
              <Card
                className={"cards img-small img-only"}
                imgsrc={"../img/primary/MediaTile-Image.jpg"}
                imgalt={""}
                caption={"Image Caption"}
              />{" "}
              <Card
                className={"cards img-small img-only"}
                imgsrc={"../img/primary/MediaTile-Image-2.jpg"}
                imgalt={""}
                caption={"Image Caption"}
              />{" "}
              <Card
                className={"cards img-small img-only"}
                imgsrc={"../img/primary/MediaTile-Image-3.jpg"}
                imgalt={""}
                caption={"Image Caption"}
              />
            </div>
            <div className="carousel-controls">
              <span>
                <svg className="icon-svg left-arrow disabled">
                  <use xlinkHref="../img/icons.svg#left-arrow" />
                </svg>
              </span>
              <span className="dot active" />
              <span className="dot" />
              <span className="dot" />
              <span>
                <svg className="icon-svg right-arrow">
                  <use xlinkHref="../img/icons.svg#right-arrow" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <CodeContainer text={quick_links} />
      </div>
    );
  }
}

export default Carousel;
