import React from 'react'
import './graph.styles.scss';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";


const Graph = ()=>{
    return(
        <div className='graph-container'>
            {/* <div style={{ height: 500 }}>
                <TradingViewWidget
                symbol="NASDAQ:AAPL"
                theme={Themes.DARK}
                locale="es"
                autosize
                />
            </div> */}
            <AdvancedRealTimeChart theme="dark" className="mygraph"></AdvancedRealTimeChart>
        </div>
    )
}

export default Graph;