import {Component} from 'react'
import './index.css'
import CryptoCurrencyList from '../CryptocurrenciesList'

class CryptoCurrencyTracker extends Component {
  render() {
    return (
      <div className="ccTrackerCont">
        <CryptoCurrencyList />
      </div>
    )
  }
}

export default CryptoCurrencyTracker
