import '../stylesheets/menuColumn.css';
import MenuGroup from './MenuGroup.js';

function MenuColumn(props) {
    return (
        <div className={props.bordered ? "menuColumn bordered" : "menuColumn"}>
            {props.ColumnData.map(v => {
                return <MenuGroup GroupData={v} />;
            })}
        </div>
    )
}

export default MenuColumn;