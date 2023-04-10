import Dropdown from 'react-bootstrap/Dropdown';
import { MenuIcon, SearchIcon } from '../reusableComponents/svgIcons';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div className="main-header">
      <div className='placeHolderPlaceOfHeader'></div>
      <nav className="navbar navbar-default">
        <div className="container-fluid flex-nowrap align-items-center">
          <div className='header-menu-links hamburgerLink'>
            {/* <div className="subtitle-text">Employees referral portal</div> */}
            <div className="subtitle-text">ER Portal</div>
          </div>
          <div className="pe-2">
            <div className='d-flex alin-items-center'>
              <div>
                <div className="d-flex align-items-center">
                  <div>
                    <div className="headerSearch mobHideHS">
                      <InputGroup>
                        <Form.Control
                          type='search'
                          placeholder="Search"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                          <SearchIcon />
                        </Button>
                      </InputGroup>
                    </div>
                  </div>
                  <div className='mobileTopMenu ps-3'>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        <MenuIcon />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.ItemText><button type="button" className="btn btn-secondary w-100">Sign In</button></Dropdown.ItemText>
                        <Dropdown.ItemText><button type="button" className="btn btn-primary w-100">Sign Up</button></Dropdown.ItemText>
                        <Dropdown.Divider />
                        <Dropdown.ItemText>
                          <div className="headerSearch">
                            <InputGroup>
                              <Form.Control
                                type='search'
                                placeholder="Search"
                              />
                              <Button variant="outline-secondary" id="button-addon2">
                                <SearchIcon />
                              </Button>
                            </InputGroup>
                          </div>
                        </Dropdown.ItemText>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center ms-4 desktopTopButtons">
                  <div className='p-text pl-2 text-uppercase'>
                    <button type="button" className="btn btn-secondary">Sign In</button>
                  </div>
                  <div className='p-text pl-2 text-uppercase ms-4'>
                    <button type="button" className="btn btn-primary">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header