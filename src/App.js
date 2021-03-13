import React, { Component } from 'react'
import Header from './components/Home/Header'
import Banner from './components/Home/Banner'
import Statistics from './components/Home/Statistics'
import Services from './components/Home/Services'
class App extends Component {
    render () {
        return(
           <div>
                <Header />
                <Banner />
                <Statistics />
                <Services />
           </div>
        );
    }
}

export default App;