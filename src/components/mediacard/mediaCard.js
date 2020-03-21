import React from 'react'
import './styles.css'

function MediaCard(mediaParams) {
    return <div>
        <h2>{mediaParams.title}</h2>
        <p>{mediaParams.body}</p>
        <img src={mediaParams.imageUrl}/>
    </div> 
}

export default MediaCard
