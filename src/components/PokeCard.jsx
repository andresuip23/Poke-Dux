import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";




function PokeCard({name}) {
    return ( 
        <Card
            style={{
            }}
            title={name}
            cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt=""/>}
            extra={<StarOutlined/>}
       >
            <Meta description='Electric'/>
        </Card> 
     );
}

export default PokeCard;