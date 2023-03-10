import styles from "../styles/Home.module.css"
import Head from "next/head"
import { useMoralisQuery, useMoralis } from "react-moralis"
import TicketBox from "../components/TicketBox"
import networkMapping from "../constants/networkMapping.json"
import {
    GET_ACTIVE_ITEMS,
    GET_ACTIVE_EVENTS,
    GET_BOUGHT_ITEMS,
    GET_CANCELED_ITEMS,
    GET_LISTED_ITEMS,
    GET_CREATED_EVENTS,
    GET_DISABLED_EVENTS,
    GET_OWNERSHIP_TRANSFERRED_ITEMS,
} from "../constants/subgraphQueries"
import { useQuery } from "@apollo/client"

export default function Home() {
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const marketplaceAddress = chainId ? networkMapping[chainString].NftMarketplace[0] : null
    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS)

    console.log(loading, error, listedNfts)

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">P2P Market Listing</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled && chainId ? (
                    loading || !listedNfts ? (
                        <div>Loading...</div>
                    ) : (
                        listedNfts.activeItems.map((nft) => {
                            const { price, nftAddress, tokenId, seller } = nft
                            return marketplaceAddress ? (
                                <TicketBox
                                    price={price}
                                    nftAddress={nftAddress}
                                    tokenId={tokenId}
                                    marketplaceAddress={marketplaceAddress}
                                    seller={seller}
                                    key={`${nftAddress}${tokenId}`}
                                />
                            ) : (
                                <div>Network error, please switch to a supported network. </div>
                            )
                        })
                    )
                ) : (
                    <div>Web3 Currently Not Enabled</div>
                )}
            </div>
        </div>
    )
}
