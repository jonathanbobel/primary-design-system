import React, { Component } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "./Atomic_Elements/Molecules/ScrollToTop";
import Home from "./Design_System/Main/Home";
import Release from "./Design_System/Main/Release";
import Overview from "./Design_System/Main/Overview";
import SideNavigation from "./Design_System/Main/SideNavigation";
import Branding from "./Design_System/Foundations/Branding";
import Colors from "./Design_System/Foundations/Colors";
import Color_Poc from "./Design_System/Foundations/Color_Poc";
import Typography from "./Design_System/Foundations/Typography";
import Icons from "./Design_System/Foundations/Icons";
import Grid from "./Design_System/Foundations/Grid";
import Buttons from "./Design_System/Components/Buttons";
import Breadcrumbs from "./Design_System/Components/Breadcrumbs";
import Accordions from "./Design_System/Components/Accordions";
import TabPanel from "./Design_System/Components/TabPanel";
import Tables from "./Design_System/Components/Tables";
import Pages from "./Design_System/Components/Pages";
import Menus from "./Design_System/Components/Menus";
import Filters from "./Design_System/Components/Filters";
import Navigation from "./Design_System/Components/Navigation";
import Forms from "./Design_System/Components/Forms";
import Carousel from "./Design_System/Components/Carousel";
import Tooltips from "./Design_System/Components/ToolTips";

class Main extends Component {
  render() {
    return (
      <Router basename="/">
        <ScrollToTop>
          <div className="wrapper">
            <div id="sidebar">
              <SideNavigation />
            </div>
            <div id="content" className="content">
              <div className="w3-container">
                <div className="w3-row">
                  <div className="w3-col l10">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/branding" element={<Branding />} />
                      <Route path="/release" element={<Release />} />
                      <Route path="/overview" element={<Overview />} />
                      <Route path="/buttons" element={<Buttons />} />
                      <Route path="/tooltips" element={<Tooltips />} />
                      <Route path="/colors" element={<Colors />} />
                      <Route path="/color_poc" element={<Color_Poc />} />
                      <Route path="/grid" element={<Grid />} />
                      <Route path="/icons" element={<Icons />} />
                      <Route path="/sidenavigation" element={<SideNavigation />} />
                      <Route path="/typography" element={<Typography />} />
                      <Route path="/breadcrumbs" element={<Breadcrumbs />} />
                      <Route path="/accordions" element={<Accordions />} />
                      <Route path="/tabs" element={<TabPanel />} />
                      <Route path="/menus" element={<Menus />} />
                      <Route path="/filters" element={<Filters />} />
                      <Route path="/tables" element={<Tables />} />
                      <Route path="/pages" element={<Pages />} />
                      <Route path="/navigation" element={<Navigation />} />
                      <Route path="/forms" element={<Forms />} />
                      <Route path="/carousel" element={<Carousel />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Main;
