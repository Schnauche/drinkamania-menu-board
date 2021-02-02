import '../stylesheets/menuBoard.css';
import MenuColumn from './MenuColumn';

function MenuBoard(props) {
    console.log(props);
    return (
        <div className="menuBoard">
            <div className="menuContent">
                {props.MenuData.ColumnData.map((v, i) => {
                    console.log(v);
                    return <MenuColumn bordered={i % 2} ColumnData={v} />;
                })}
            </div>  
        </div>
    );
}

export default MenuBoard;