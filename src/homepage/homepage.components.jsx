import React from "react";
import "./homepage.styles.scss";

import Graph from "./components/graph/graph.component";
import Stats from "./components/stats/stats.components";
import OrderFirst from "./components/orderfirst/orderfirst.component";

const HomePage = ()=>{
    return(
        <div className="homepage">
            <div className="graph-and-stats">
                <div className="graph">
                    <Graph />
                </div>
                <div className="stats">
                    <Stats />
                </div>
            </div>
            <div className="order">
                <div className="order-first">
                    <OrderFirst />
                </div>
                <div className="order-second">
                    order2
                </div>
            </div>
            <div className="buy-sell">buysell</div>
        </div>
    )
}

export default HomePage;