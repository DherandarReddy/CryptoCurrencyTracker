import './index.css'

const CryptoCurrencyItem = props => {
  const {Details} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = Details
  return (
    <div className="cclEachItem">
      <div className="cclImgHead">
        <div>
          <img src={currencyLogo} alt={currencyName} className="eachImg" />
        </div>
        <p className="eachName">{currencyName}</p>
      </div>
      <div className="cclSubHead">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptoCurrencyItem
