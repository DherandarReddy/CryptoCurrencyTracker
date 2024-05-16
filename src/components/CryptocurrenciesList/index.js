import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptoCurrencyItem from '../CryptocurrencyItem/index'

class CryptoCurrencyList extends Component {
  state = {
    CryptoData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const UpdatedCryptoData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({CryptoData: UpdatedCryptoData, isLoading: false})
  }

  render() {
    const {CryptoData, isLoading} = this.state
    return (
      <div className="total">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="ccItemCont">
            <h1 className="cclName">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cclImg"
            />
            <div className="cclItemCont">
              <div className="cclHeadCont">
                <h1 className="cclhead">Coin Type</h1>
                <div className="cclSubHead">
                  <h1 className="cclhead">USD</h1>
                  <h1 className="cclhead">EURO</h1>
                </div>
              </div>
              <ul>
                {CryptoData.map(each => (
                  <li type="none" key={each.id}>
                    <CryptoCurrencyItem Details={each} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptoCurrencyList
