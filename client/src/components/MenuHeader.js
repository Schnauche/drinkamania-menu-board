import '../stylesheets/menuHeader.css';
//
function MenuHeader() {
    return (
        <div class='menuHeader'>
            <img id="logo" src={process.env.PUBLIC_URL + "/images/CANS_blueteal.png"} alt="image" />
        </div>
    );
}

export default MenuHeader;