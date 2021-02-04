import '../stylesheets/menuBoard.css';
import MenuColumn from './MenuColumn';

function MenuBoard(props) {
    return (
        <div className="menuBoard">
            <div className="menuContent">
                {props.MenuData.ColumnData.map((v, i) => {
                    return <MenuColumn bordered={i != 0} ColumnData={v} />;
                })}
            </div>  
        </div>
    );
}

export default MenuBoard;