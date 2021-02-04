import '../stylesheets/menuItem.css';

function MenuItem(props) {
    return(
        <div className={"menuItem" + (props.Bordered ? " menuItemBordered" : "")}>
            <div className="menuItemContent">
                <div className="menuItemContentHeader">
                    <div className="menuItemContentHeaderLeft">
                        <span className="beerType"></span>
                        <span className="brewerName">{props.ItemData.MainName}</span>
                        <span className="beerName"> {props.ItemData.SubName}</span>
                    </div>
                    <div className="menuItemContentHeaderRight">
                        <span className="price">{props.ItemData.Price}</span>
                    </div>
                </div>
                <div className="menuItemContentBody">
                    <span className="beerType">{props.ItemData.MainDescription}</span>
                    <span className="beerDescription"> | {props.ItemData.SubDescription}</span>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;