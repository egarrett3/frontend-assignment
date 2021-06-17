import React from 'react';
import Movie from './movie';

const Movielist = ({movie}) => {

    return (
        <>
            <div className='movies'>
                {movie.map((ele,idx) => {
                    return (
                        <Movie 
                            title={ele[0]} 
                            image_url={ele[1]} 
                            key={idx}
                            date={ele[3]}
                            description={ele[4]}
                            votes={ele[5]}
                            totalVotes={ele[6]}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Movielist;