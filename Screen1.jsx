import React,{useState} from 'react'

const Screen1 = () => {
    
    const [state, setState] = useState(initialState);

    return (
        <div className="App">
            <div className="header">
                Welcome  to
                <br></br>
                Portfolio
                <br></br><br></br>
          <div className='div' >
            <button>EXPLORE MORE</button>
            <div className='arrow'>↗</div>
          </div>
            </div>
        </div>
    )
}

export default Screen1
