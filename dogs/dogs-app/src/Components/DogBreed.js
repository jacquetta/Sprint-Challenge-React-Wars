import React from 'react';

function DogBreed(props){
    return (
        <div className='dogs'>
            <p>{props.dogBreed.message}</p>
        </div>
    )
}

export default DogBreed;