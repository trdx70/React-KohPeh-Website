import React from "react";

//import variety1 from "../../../assets/images/var1.jpg";
import variety2 from "../../../assets/images/var2.jpg";
import variety6 from "../../../assets/images/var6.jpg";
import variety5 from "../../../assets/images/var5.jpg";

const product = props => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <div
            id="coffeCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 img-fluid"
                  src={variety2}
                  alt="First slide"
                />
                <div className="carousel-caption d-none d-md-block mb-5">
                  <h1 className="text-left">Traditional American</h1>
                  <p className="h4 text-left">
                    "These are varieties that originate from Typica or Bourbon
                    parentage (Typica and Bourbon are two distint varieties
                    within the Arabica species"
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 img-fluid"
                  src={variety6}
                  alt="Second slide"
                />
                <div className="carousel-caption d-none d-md-block mb-5">
                  <h1 className="text-left">Ethiopian landrace</h1>
                  <p className="h4 text-left">
                    "These are varieties that evolved in the forest of Ethiopia,
                    where <span className="font-italic">C. arabica</span>{" "}
                    originated, through a process of human-led domestication.
                    They are generally associated with very high cup quality,
                    but are susceptible to major coffee diseases"
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 img-fluid"
                  src={variety5}
                  alt="Third slide"
                />
                <div className="carousel-caption d-none d-md-block mb-5">
                  <h1 className="text-left">Introgressed(Catimor/Sarchimor)</h1>
                  <p className="h4 text-left">
                    "Introgressed varieties are those possess some genetic
                    traits from another species - in this case,{" "}
                    <span className="font-italic">C. canephora</span> or
                    Robusta. ("Introgressed" means bought over")
                  </p>
                </div>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#coffeCarousel"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#coffeCarousel"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="d-sm-none">
          <section>
            <h4>Traditional American</h4>
            <p>
              "These are varieties that originate from Typica or Bourbon
              parentage (Typica and Bourbon are two distint varieties within the
              Arabica species"
            </p>
          </section>

          <section>
            <h4>Ethiopian landrace</h4>
            <p>
              "These are varieties that evolved in the forest of Ethiopia, where {" "}
              <span className="font-italic">C. arabica</span> originated,
              through a process of human-led domestication. They are generally
              associated with very high cup quality, but are susceptible to
              major coffee diseases"
            </p>
          </section>

          <section>
            <h4>Introgressed(Catimor/Sarchimor)</h4>
            <p>
              "Introgressed varieties are those possess some genetic traits from
              another species - in this case, <span className="font-italic">C. canephora</span> or Robusta.("Introgressed" means bought over")
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default product;
