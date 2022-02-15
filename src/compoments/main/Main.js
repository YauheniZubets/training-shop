import React from "react";
import Header from "../header/Header";
import Support from "../support/Support";
import Womens from "../womens/Womens";
import Men from "../men/Men";
import SmallBanner from "../smallBanner/SmallBanner";
import BigBanner from "../bigBanner/BigBanner";
import Blog from "../Blog/Blog";

import './Main.css';

class Main extends React.PureComponent {

    render () {
        return (
        <>
            <Header />
            <Support />
            <Womens />
            <Men />
            <SmallBanner />
            <BigBanner />
            <Blog />
        </>
            
        )
    }
}

export default Main;