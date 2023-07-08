import Dropdown from 'react-bootstrap/Dropdown';
import { MenuIcon, SearchIcon } from '../reusableComponents/svgIcons';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const SidebarConfig = [
    {
      name: "Tab One",
      path: "/"
    },
    {
      name: "Tab Two",
      path: "/tab-two"
    },
    {
      name: "Tab Three",
      path: "/tab-three"
    },
    {
      name: "Tab Four",
      path: "/tab-four"
    },
    {
      name: "Tab Five",
      path: "/tab-five"
    },
    {
      name: "Tab Six",
      path: "/tab-six"
    },
    {
      name: "PowerBI Report",
      path: "/poweBI-reports"
    },
  ]
  return (
    <div className="main-header">
      <div className='placeHolderPlaceOfHeader'></div>

      <nav className="navbar w-100 d-flex flex-wrap align-items-center justify-content-between navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand subtitle-text" href="#">ER Portal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {SidebarConfig.map((data, index) => (
                <li className="nav-item" key={index}>
                  <NavLink to={data.path} className={({isActive, isPending}) => isActive ? "nav-link active" : "nav-link" } aria-current="page">{data.name}</NavLink>
                </li>
              ))
              }
              {/* It is for nested dropdowns */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
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