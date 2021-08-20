import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/Footer";
import Arrivals from "../components/Arrivals";
import Newsletter from "../components/Newsletter";
import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import Script from "next/script";

import Sale from "../components/Sale";
const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>VESTE</title>
                <meta name="description" content="VESTE" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Head>
            <Navigation />
            <Intro />
            <Arrivals />
            <Newsletter />
            <Sale />
            <Footer />

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossOrigin="anonymous"
            ></Script>
        </div>
    );
};

export default Home;
