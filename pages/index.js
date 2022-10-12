import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useMoralisQuery} from "react-moralis"
import { privateDecrypt } from 'crypto'

export default function Home() {
  const {data: listedNfts, isFetching: fetchingListedNfts}
 = useMoralisQuery(
  "ActiveItem",
  (query) => query.limit(10).descending("tokenId")
 )  
 console.log(listedNfts)

return (<div className={styles.contrainer}>
  {fetchingListedNfts ? (<div>Loading...</div>) : listedNfts.map(nft => {
    console.log(nft.attributes)
    const {price, nftAddress, tokenId, marketplaceAddress, seller} = nft.attributes
    return(
      <div>Price: {price}. nftAddress: {nftAddress}. TokenId: {tokenId}. Seller: {seller}</div>
    )
  })}

</div>)
}
 