import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { Form, useNotification, Button } from "web3uikit"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { ethers } from "ethers"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import nftFactoryAbi from "../constants/EventFactory.json"
import nftAbi from "../constants/EventContract.json"
import networkMapping from "../constants/networkMapping.json"
import { useEffect, useState } from "react"
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
    const eventFactoryAddress = chainId ? networkMapping[chainString].EventFactory[0] : null
    const { loading, error, data: recentEvents } = useQuery(GET_ACTIVE_EVENTS)

    console.log(recentEvents)

    return (
        <div className={styles.container}>
            <p>Recent Event</p>
            {recentEvents &&
                recentEvents.activeEvents.map((event) => {
                    const { id, creator, nft } = event
                    return eventFactoryAddress ? (
                        <div>
                            found active events.
                            <div>id: {id}</div>
                            <div>event address: {nft}</div>
                            <div>creator: {creator}</div>
                        </div>
                    ) : (
                        <div>Network error, please switch to a supported network. </div>
                    )
                })}
        </div>
    )
}
