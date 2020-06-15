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


/*   const fetchingData = async () => {
    const counts = Math.floor((Math.random() * 200) + 1)
    setIdCount(counts)
    if(advice === null || advice ===""){
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();
      setAdvice(data)
      console.log(data)
      console.log(`I'm in if now`)
    }else{
      const res = await fetch(`https://api.adviceslip.com/advice/${idCount}`);
      const data = await res.text();
      const sheh = JSON.parse(JSON.stringify(data))
     setAdvice(sheh)
     console.log(sheh)
    }


  } */


/*
lass App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
console.log(advice)
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">

          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>

      </div>
    );
  }
} */
