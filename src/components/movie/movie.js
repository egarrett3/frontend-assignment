import React, { useState }from 'react';
import Modal from '../modal/modal';


const url = `https://image.tmdb.org/t/p/w300`

const Movie = ({title,image_url,date,description,votes,totalVotes}) => {
    const [toggle, setToggle] = useState(false);

    function toggleModal() {
        setToggle(!toggle);
    }

    return (
        <>
            <div className='movie' onClick={toggleModal}>
                <span className='rating'><span className='bubble-spacer'>{votes}</span></span>
                <img className='movie-image' src={url.concat(image_url)} alt={title}/>
                <div className='title-container'>{title}</div>
            </div>
            {toggle ? 
                <Modal 
                    date={date}
                    description={description}
                    votes={votes}
                    total={totalVotes}
                    img={url.concat(image_url)} 
                    title={title} 
                    toggle={toggleModal}
                /> 
                    : <></>
            }
        </>
    )
}

export default Movie;