import '../stylesheets/menuItem.css';

function MenuItem(props) {
    console.log(props);
    return(
        <div className="menuItem">
            <div className="menuItemContent">
                <div className="menuItemHeader">
                    <div className="menuItemHeaderLeft">
                        <span className="beerType"></span>
                        <span className="brewerName">{props.ItemData.BeerInfo.BrewerName}</span>
                        <span className="beerName"> {props.ItemData.BeerInfo.BeerName}</span>
                    </div>
                    <div className="menuItemHeaderRight">
                        <span className="price">{props.ItemData.Price}</span>
                    </div>
                </div>
                <div className="menuItemBody">
                    <span className="beerType">{props.ItemData.BeerInfo.BeerType}</span>
                    <span className="beerDescription"> | {props.ItemData.BeerInfo.Description}</span>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;