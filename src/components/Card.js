import React from 'react';

function Card (props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.openSpots === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {badgeText && <div className='card-b'>{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className='card-img'  alt=''/>
            <div className='card-inf'>
                <img src=''  alt='' className="card-st"/>
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount})</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='card-t'>{props.title}</p>
            <p className='card-p'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;