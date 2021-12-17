import React, {useState} from 'react';

const Card = (props) => {
    const paragraphItems = [];
    const isType1 =  props.type === 1 ? true : false;

    props.detail.forEach(elem =>{
        paragraphItems.push(
            <p className="paragraph">{elem}</p>
        )
    })

    return(
        <div>
            {isType1 ? (
                <div className="card__item">
                    <div className='cards__item__link'>
                        <div className='cards__item__info'>
                            <a style={{textDecoration: "none", color: "blue"}} href={props.url}>{props.name}</a>
                            {paragraphItems}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card__item">
                    <div className='cards__item__link'>
                        <div className='cards__item__info'>
                            <p style={{fontWeight: "bold"}}>{props.name}</p>
                            {paragraphItems}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;