import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

import coffe1 from "../../assets/images/coffe1.jpg";
import coffe2 from "../../assets/images/coffe2.jpg";
import coffe3 from "../../assets/images/coffe3.jpg";

class Karousel extends Component {
    render() {
        return (
            <Carousel showArrows={true}>
              <div>
                <img src={coffe1} />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src={coffe2} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={coffe3} />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          );
    }

}

export default Karousel;
