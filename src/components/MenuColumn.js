import '../stylesheets/menuColumn.css';
import MenuItem from './MenuItem.js';

function MenuColumn(props) {

    return (
        <div class={props.bordered ? "menuColumn bordered" : "menuColumn"}>
            <MenuItem />
        </div>
    )
}

export default MenuColumn;