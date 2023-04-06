const Header = () => {
    return (
        <div className="main-header">
            <div className='placeHolderPlaceOfHeader'></div>
            <nav className="navbar navbar-default">
                <div className="container-fluid flex-nowrap align-items-center">
                    <div className='header-menu-links hamburgerLink'>
                        <div className='subtitle-text'>Company</div>
                    </div>
                    <div className="pe-2">
                        <div className="d-flex align-items-center">
                            <div className='p-text pl-2 text-uppercase'>
                                <button type="button" className="btn btn-secondary">Sign In</button>
                            </div>
                            <div className='p-text pl-2 text-uppercase ms-4'>
                                <button type="button" className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header