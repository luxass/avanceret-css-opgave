import styles from "./Newsletter.module.scss";

export default function Newsletter() {
    return (
        <section className="pt-5 pb-5 mb-5">
            <div className="container">
                <div className="col-12 mt-5 mb-5 text-center font">
                    <h2 className="text-uppercase">get on the list</h2>
                    <p>
                        and be the first to shop new arrivals and exclusive
                        promotions
                    </p>
                </div>
                <div className="row justify-content-center">
                    <form className="col-xl-3">
                        <input
                            type="email"
                            className="form-control rounded-0 font"
                            placeholder="Enter your email here"
                        />
                        <button
                            type="submit"
                            className={`btn btn-mint rounded-0 mt-2 font fs-6 text-white ${styles.news_button}`}
                        >
                            Subscribe now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
