import React from 'react';
import "./header.styles.scss";

const Header = ()=>{
    return(<div className='header'>
        <div className='header__box header__box--fixed'><div className='internal'>
                <div style={{margin:"2.4rem"}}>Bitcoin</div>
            </div></div>
        <div className='header__box header__box--fixed'>
            <div className='internal'>
                <div style={{margin:".5rem", color: "grey"}}>Last Price</div>
                <div style={{color:"green", margin:".2rem"}}>23,935.32 USDC</div>
            </div>
        </div>
        <div className='header__box header__box--fixed'><div className='internal'>
                <div style={{margin:".5rem", color: "grey"}}>24th Change</div>
                <div style={{color:"green", margin:".2rem"}}>+0.00%</div>
            </div></div>
            <div className='header__box header__box--fixed'><div className='internal'>
                <div style={{margin:".5rem", color: "grey"}}>24th Low</div>
                <div style={{ margin:".2rem"}}>23,935.32 SDC</div>
            </div></div>
            <div className='header__box header__box--fixed'><div className='internal'>
                <div style={{margin:".5rem", color: "grey"}}>24th Low</div>
                <div style={{ margin:".2rem"}}>23,935.32 SDC</div>
            </div></div>
        <div className='header__box header__box--fixed'>Icons</div>
    </div>)
}

export default Header;