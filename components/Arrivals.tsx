import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";
import Image from "next/image";

export default function Arrivals() {
    return (
        <section className="pt-5">
            <div className="container">
                <h2 className="text-uppercase text-center font d-block col-12 mb-5">
                    new arrivals
                </h2>
                <div className="row align-items-center justify-content-center g-3">
                    <div className="col-xl-4 col-lg-6 col-12">
                        <Image
                            src={img3}
                            alt="plated skirt"
                            layout="responsive"
                            
                        />
                        <div className="card-body text-center text-dark text-uppercase bg-footer-gray font">
                            <h4>plated skirt</h4>
                            <p className="mb-0">$49.00</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-12">
                        <Image
                            src={img4}
                            alt="slim fit chinos"
                            layout="responsive"
                        />
                        <div className="card-body text-center text-dark text-uppercase bg-footer-gray font">
                            <h4>slim fit chinos</h4>
                            <p className="mb-0">$45.00</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-12">
                        <Image
                            src={img5}
                            alt="printed chiffon dress"
                            layout="responsive"
                        />
                        <div className="card-body text-center text-dark text-uppercase bg-footer-gray font">
                            <h4>printed chiffon dress</h4>
                            <p className="mb-0">$120.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
