import '../stylesheets/menuHeader.css';
//
function MenuHeader() {
    return (
        <div className='menuHeader'>
            <div className = 'menuHeaderContent'>
                <img id="logo" src={process.env.PUBLIC_URL + "/images/CANS_blueteal.png"} alt="image" />
            </div>
        </div>
    );
}

export default MenuHeader;