import { useState } from "react";
import { MAIN_CLOTHES_BLOCK_MENU } from "../block-menu";

const BlockMenu = (props) => {

    const [menuOpacity, setOpacity] = useState(0);

    const cbBlockMenuClick = (ev) => {
        const target = ev.target;
        let value = null;
        if (target.getAttribute('particular-name')) {
            value = target.getAttribute('particular-name');
            props.filterMenu(value);
            setOpacity(target.id);
        }
    }

    const blockMenu = MAIN_CLOTHES_BLOCK_MENU.map((item, index)=>{
        return (
                <div key={index} >
                    <span 
                        particular-name={item.particularName} id={index} 
                        className={menuOpacity==index ? 'No-opacity' : 'Opacity'} 
                    >
                        {item.name}
                    </span>
                </div>
        )
    })

    return (
        <div className='Womens-Links' onClick={cbBlockMenuClick}>
            {blockMenu}
        </div>
    )
}

export default BlockMenu;