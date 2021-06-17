import React from 'react'

const months = {
    1:'January',
    2:'February',
    3:'March',
    4:'April',
    5:'May',
    6:'June',
    7:'July',
    8:'August',
    9:'September',
    10:'October',
    11:'November',
    12:'December',
}

const Modal = ({ img,title,toggle,date,description,votes,total }) => {

    function getDate() {

        const [year,month,day] = date.split('-');
        const mnth = month.split('')[0] === '0' ? month.split('')[1] : month;
        const newMonth = months[mnth];

        return (
            <span>
                {newMonth}{" "}{day}{', '}{year}
            </span>
        )
    }

    return (
        <div className='bg-modal'>
            <div className='modal-container'>
                <div className='modal-header'>
                    <span className='movie-title'>{title}</span>
                    <div className='box'> 
                        <div 
                            className='close-modal'
                            onClick={toggle}
                        >X</div>
                    </div>
                </div>
                <div className='modal-frame'>
                    <img className='movie-modal-image' src={img} alt={title} />
                    <div className='movie-description'>
    <div className='release-date'><span className='bold-text'>Release Date:</span> {getDate()}</div>
                        <span className='description'>{description}</span>
                        <span>{votes} / 10 <span>({total} total votes)</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Modal;