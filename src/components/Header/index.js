import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='md'>
      <Container>
        <Link to='/' className='navbar-brand'>
          台灣好好
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' />
          <Nav>
            <Link to='/taiwan-tours' className='nav-link'>
              找景點
            </Link>
            <Link to='/taiwan-activities' className='nav-link'>
              找活動
            </Link>
            <Link to='/taiwan-restaurants' className='nav-link'>
              找美食
            </Link>
            <Link to='/taiwan-hotels' className='nav-link'>
              找住宿
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
