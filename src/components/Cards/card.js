import React from 'react';

import coffee_grading from "../../assets/images/coffe_grading.jpg";
import coffe4 from "../../assets/images/coffe4.jpg";
import coffe3 from "../../assets/images/coffe3.jpg";
import brewing from "../../assets/images/brewing.jpg";

const cards = ()=>{
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <section className="card mb-3">
          <div className="card-header">
            <h5 className="card-title h4">Cultivation</h5>
          </div>
            <img src={coffe4} className="card-img-top img-fluid mb-2" alt="Cultivation"/>
          <div className="card-body">
            <div className="card-text">
              <p>
                Coffee cultivation and trade began on the Arabian
                Peninsula. By the 15th century, coffee was being grown in
                the Yemeni district of Arabia and by the 16th century it
                was known in Persia, Egypt, Syria, and Turkey.
              </p>
              <p>
                The traditional method of planting coffee is to place 20
                seeds in each hole at the beginning of the rainy season.
                This method loses about 50% of the seeds' potential, as
                about half fail to sprout. A more effective method of
                growing coffee, used in Brazil, is to raise seedlings in
                nurseries that are then planted outside at six to twelve
                months.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </section>
      </div>
      <div className="col-sm-6">
        <section className="card mb-3">
          <div className="card-header">
            <h5 className="card-title h4">Legend</h5>
          </div>
            <img src={coffe3} className="card-img-top img-fluid mb-2" alt="Legend"/>
          <div className="card-body">
            <div className="card-text">
              <p>
                Coffee grown worldwide can trace its heritage back
                centuries to the ancient coffee forests on the Ethiopian
                plateau. There, legend says the goat herder Kaldi first
                discovered the potential of these beloved beans. The story
                goes that that Kaldi discovered coffee after he noticed
                that after eating the berries from a certain tree, his
                goats became so energetic that they did not want to sleep
                at night.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </section>
      </div>
      <div className="col-sm-6">
        <section className="card mb-3">
          <div className="card-header">
            <h5 className="card-title h4">Brewing</h5>
          </div>
            <img src={brewing} className="card-img-top img-fluid mb-2" alt="Brewing"/>
          <div className="card-body">
            <div className="card-text">
              <p>
                Coffee may be brewed by several methods. It may be boiled,
                steeped, or pressurized. Brewing coffee by boiling was the
                earliest method, and Turkish coffee is an example of this
                method.[99] It is prepared by grinding or pounding the
                seeds to a fine powder, then adding it to water and
                bringing it to the boil for no more than an instant in a
                pot called a cezve or, in Greek, a bríki. This produces a
                strong coffee with a layer of foam on the surface and
                sediment (which is not meant for drinking) settling at the
                bottom of the cup
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </section>
      </div>
      <div className="col-sm-6">
        <section className="card mb-3">
          <div className="card-header">
            <h5 className="card-title h4">Beans grading</h5>
          </div>
            <img src={coffee_grading} className="card-img-top img-fluid mb-2" alt="Beans grading"/>
          <div className="card-body">
            <div className="card-text">
              <p>
                Depending on the color of the roasted beans as perceived
                by the human eye, they will be labeled as light, medium
                light, medium, medium dark, dark, or very dark. A more
                accurate method of discerning the degree of roast involves
                measuring the reflected light from roasted seeds
                illuminated with a light source in the near-infrared
                spectrum. This elaborate light meter uses a process known
                as spectroscopy to return a number that consistently
                indicates the roasted coffee's relative degree of roast or
                flavor development.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  );
}

export default cards;