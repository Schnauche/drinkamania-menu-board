import '../stylesheets/menuColumn.css';
import MenuItem from './MenuItem.js';

function MenuColumn(props) {
    console.log(props);
    return (
        <div className={props.bordered ? "menuColumn bordered" : "menuColumn"}>
            {props.ColumnData.map(v => {
                return <MenuItem ItemData={v} />;
            })}
        </div>
    )
}

export default MenuColumn;