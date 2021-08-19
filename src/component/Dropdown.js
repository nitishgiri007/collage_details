import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaTimes } from 'react-icons/fa'

const DropdownContainer = styled.div`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background: #cd853f;
    display:grid;
    align-items:center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    transform: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? '1' : '0')};
    top: ${({isOpen})=>(isOpen ? '0' : '-100%')};
    
`;

const Icon = styled.div`
    position:absolute;
    background: transparent;
    top: 1.2rem;
    right: 1.5rem;
    font-size:2rem;
    cursor: pointer;
    outline: none;
    
`;
const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;
const DropDownWrapper = styled.div`

`;
const DropDownMenu = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
`;
const DropDownLink = styled(Link)`
    display:flex;
    align-item:center;
    justify-content: center;
    color:#fff;
`;
const BtnWrap = styled.div`
    display:flex;
    justify-content:center;
`;

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <DropDownWrapper>
              <DropDownMenu>
                  {menuData.map((item, index) => (
                      <DropDownLink to={item.link} key={index}>
                          {item.title}
                      </DropDownLink>
                  ))}
              </DropDownMenu>
              <BtnWrap>
                  <Button primary="true" round="true" big="true" to="/contact">
                      Contact Us
                  </Button>
              </BtnWrap>
          </DropDownWrapper>
        </DropdownContainer>
        
    )
}

export default Dropdown;
