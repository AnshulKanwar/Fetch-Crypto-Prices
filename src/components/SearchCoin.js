import { useState } from "react"
import styles from './SearchCoin.module.css'

const SearchCoin = ({getQuote: getPrice}) => {
  const [coin, setCoin] = useState('')

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" value={coin} onChange={(e) => setCoin(e.target.value)}/>
      <button className={styles.search} onClick={() => getPrice(coin)}>Search</button>
    </div>
  )
}

export default SearchCoin