const Header = () => {
    return (
        <div className="main-header">
            <div className='placeHolderPlaceOfHeader'></div>
            <nav className="navbar navbar-default">
                <div className="container-fluid flex-nowrap align-items-center">
                    <div className='header-menu-links hamburgerLink'>
                        <div className='subtitle-text'>Company</div>
                    </div>
                    <div className="header-menu-links pe-2">
                        <div className="header-menu-link d-flex align-items-center">
                            <div className='p-text pl-2 text-uppercase'>Sign In</div>
                            <div className='p-text pl-2 text-uppercase ms-4'>Sign Up</div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header