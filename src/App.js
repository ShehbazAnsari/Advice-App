import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'




const App = () => {
  const [advice, setAdvice] = useState('')
  useEffect(() => {
    fetchingData();
  }, [])

  const fetchingData = async () => {
    const res = await axios.get(`https://api.adviceslip.com/advice`);
    const { advice } = res.data.slip;
    setAdvice(advice)
    M.toast({ html: 'Wait For 5 Secs' })
  }

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col m6 s12 offset-m3">
          <div class="card-panel hoverable white center-align animated slideInDown">
          <h4 className="">{advice}</h4>
          <a href="#" className="btn waves-effect brown lighten-1 white-text circle animated bounceInUp" onClick={fetchingData}><i className="material-icons right">navigate_next</i>
          GIVE ME ADVICE!!</a>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
