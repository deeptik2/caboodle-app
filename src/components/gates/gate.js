import React from 'react'

function Gate(props) {
    return <div>
        {
        props.isOpen == true ? "OPEN" : "CLOSED"
        }
    </div>
    }

export default Gate
