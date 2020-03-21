import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MediaCard from './components/mediacard/mediaCard.js'
import Gate from './components/gates/gate.js'

function Hi(params) {
    return <div>
        <strong>
            Hello {params.name}!
            </strong>
            <ul className='listy'>
                <li>Tomato</li>
                <li>potato</li>
                <li>{params.green.awesome}</li>
            </ul>
        <div>{sum(30,10)}</div>
        <div>{multy(3, 31)}</div>
        </div>
}

const sum = (a, b) => a + b

const multy = (a, b) => a * b


 ReactDOM.render(<Hi name="Dave" green={{"awesome": "yessy"}}/>, document.querySelector('#root'))
 ReactDOM.render(<MediaCard title="Fresh Apple" body={<p><strong>This fruit is strong text.</strong>This is an Apple which keeps you healthy</p>}
  imageUrl="http://www.eatbydate.com/wp-content/uploads/Apple1.jpg"/>, document.querySelector('#root'))

ReactDOM.render(<Gate isOpen= {false}/>, document.querySelector('#root'))
