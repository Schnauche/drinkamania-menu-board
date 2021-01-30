import '../stylesheets/menuBoard.css';
import MenuColumn from './MenuColumn';

function MenuBoard(props) {

    return (
        <div className="menuBoard">
            {[...Array(props.columns).keys()].map((v, i) => {
                return <MenuColumn bordered={i % 2} />;
            })}
        </div>
    );
}

export default MenuBoard;