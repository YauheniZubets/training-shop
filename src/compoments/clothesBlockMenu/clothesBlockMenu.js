import { useState } from "react";
import { MAIN_CLOTHES_BLOCK_MENU } from "../block-menu";

const BlockMenu = (props) => {
    console.log('props: ', props);

    const [menuOpacity, setOpacity] = useState(0);

    const cbBlockMenuClick = (ev) => {
        const target = ev.target;
        let value = target.value;
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
                        className={menuOpacity===index ? 'No-opacity' : 'Opacity'} 
                        data-test-id={`clothes-${props.gender}-${item.particularName}`}
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