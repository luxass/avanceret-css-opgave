import styles from "./Sale.module.scss";
import Image from "next/image";
import winter from "../public/img7.jpg";
import accessories from "../public/img6.jpg";

export default function Sale() {
    return (
        <section className="bg-dark py-5 font">
            <div className="container">
                <div className="row align-items-center justify-content-center g-lg-5">
                    <div className="col-xl-6 col-lg-6 col-12 position-relative pb-lg-0 pb-2">
                        <Image
                            src={accessories}
                            alt="Accessories"
                            layout="responsive"
                        />
                        <p
                            className={`${styles.n_center} text-center text-white fs-1 text-uppercase`}
                        >
                            <span className="opacity-75 fs-4">
                                swoon-worthy
                            </span>
                            <br />
                            <span className="opacity-100 fs-1">
                                accessories
                            </span>
                        </p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-12 position-relative pb-lg-0 pb-2">
                        <Image src={winter} alt="Winter" layout="responsive" />
                        <p
                            className={`${styles.n_center} text-center text-white fs-1 text-uppercase`}
                        >
                            <span className="opacity-75 fs-4">
                                winter sale
                            </span>
                            <br />
                            <span className="opacity-100 fs-1">
                                now 30% off
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
