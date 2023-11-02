import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>GROUPE</MDBNavbarBrand>
        <MDBNavbarBrand href='#'>OFFRES</MDBNavbarBrand> 
        <MDBNavbarBrand href='#'>RÉFÉRENCES</MDBNavbarBrand>
        <MDBNavbarBrand href='#'>TECHNOLOGIES</MDBNavbarBrand>
        <MDBNavbarBrand href='#'>LIVRES BLANCS</MDBNavbarBrand>
        <MDBNavbarBrand href='#'>INNOVATIONS</MDBNavbarBrand>
        <MDBNavbarBrand href='#'></MDBNavbarBrand>
        
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          </MDBNavbarNav>

          <button>Nous rejoindre</button>
          <button>Contact</button>
          
          

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}