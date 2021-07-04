import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/money.svg');
require('icons/tag.svg');
require('icons/statistics.svg')


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display:flex;
    > li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.3333%;
      padding: 4px 0;
      text-align:center;
      > .icon{
        width: 22px;
        height: 22px;
      }
    }
  }
`


const Nav = ()=>{
    return (
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#tag"/>
                    </svg>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money"/>
                    </svg>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#statistics"/>
                    </svg>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}



export default Nav;