import '../stylesheets/menuBoard.css';
import MenuColumn from './MenuColumn';

function MenuBoard(props) {

    return (
        <div className="menuBoard">
            <div className="menuContent">
                {[...Array(props.columns).keys()].map((v, i) => {
                    return <MenuColumn bordered={i % 2} />;
                })}
            </div>
        </div>
    );
}

export default MenuBoard;