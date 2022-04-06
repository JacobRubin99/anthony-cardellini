import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";

import bg1 from "../../images/bg-1.png";
import "./ParallaxExample.css";

export class ParallaxExample extends Component {
  render() {
    return (
      <header>
        <Parallax speed={-10} className="parallax">
          {/* navbar */}
        </Parallax>
        {/* <ParallaxBanner
              className="banner"
              layers={[
                {
                  image: bg1,
                  translateY: [0, 50],
                  shouldAlwaysCompleteAnimation: true,
                  expanded: false,
                },
              ]}
            /> */}
        <div className="next">
          Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling. Tip: Try to remove the
          background-attachment property to remove the scrolling effect.
        </div>
      </header>
    );
  }
}
