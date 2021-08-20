import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import Image from "next/image";
export default function Intro() {
    return (
        <>
            <section className="bg-lighter-pink font">
                <div className="container">
                    <div className="row align-items-center justify-content-center bg-light-pink g-0">
                        <div className="col-lg-6 bg-none">
                            <Image src={img1} alt="Women" layout="responsive" />
                        </div>
                        <div className="col-lg-6 text-dark text-center mt-5 mb-5">
                            <h5 className="text-uppercase fs-1 mb-2 mt-0">
                                Sultry &amp; smart
                            </h5>
                            <p className="text-uppercase opacity-75 fs-4">
                                Hot spring looks
                            </p>
                            <hr className="w-25 border-5 opacity-100 me-auto ms-auto" />
                            <p className="opacity-75 fs-4">Shop Women</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-lighter-mint font">
                <div className="container">
                    <div className="row align-items-center justify-content-center bg-mint g-0 flex-lg-row-reverse">
                        <div className="col-lg-6 bg-none">
                            <Image src={img2} alt="Men" layout="responsive" />
                        </div>
                        <div className="col-lg-6 text-white text-center mt-5 mb-5">
                            <h5 className="text-uppercase fs-1 mb-2 mt-0">
                                elegant &amp; slick
                            </h5>
                            <p className="text-uppercase opacity-75 fs-4">
                                get ready for summer
                            </p>
                            <hr className="w-25 border-5 opacity-100 me-auto ms-auto" />
                            <p className="opacity-75 fs-4">Shop Men</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
