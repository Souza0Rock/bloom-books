import React from 'react';
import styled from "styled-components"

const SidebarFavorites: React.FC = () => {

 const OpacitySidebar = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
    height: 100%;
    position: fixed;
    z-index: 10000;
    background-color: rgba(0,0,0,0.4);

    @media (max-width: 768px) {
        margin-top: -60px;
    }
`

 const Sidebar = styled.div`
    position: absolute;
    right: 0;
    width: 400px;
    min-height: 100vh;
    height: 100%;
    background-color: #fff;
    border-top: 6px solid #0B1A8E;

    @media (max-width: 600px) {
        width: 85%;
    }
`

  return(
    <OpacitySidebar>
      <Sidebar>
        
      </Sidebar>
    </OpacitySidebar>
  );
}

export default SidebarFavorites;