import MenuItem from './MenuItem';
import '../stylesheets/menuGroup.css';

function MenuGroup(props) {
    const maxIndex = props.GroupData.GroupItems.length - 1;

    return (
        <div className='menuGroup'>
            <div className="menuItemCategory">
                <h1>{props.GroupData.GroupName}</h1>
            </div>
            {props.GroupData.GroupItems.map((v, i) => {
                return <MenuItem ItemData={v} Bordered={i !== maxIndex}/>
            })}
        </div>
    )
}

export default MenuGroup;