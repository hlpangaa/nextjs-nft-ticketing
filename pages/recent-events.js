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
import EventBox from "../components/EventBox"

export default function Home() {
    const { chainId, isWeb3Enabled } = useMoralis()
    const chainString = chainId ? parseInt(chainId).toString() : null
    const eventFactoryAddress = chainId ? networkMapping[chainString].EventFactory[0] : null
    const { loading, error, data: recentEvents } = useQuery(GET_ACTIVE_EVENTS)
    const [imageURI, setImageURI] = useState("")
    const [tokenName, setTokenName] = useState("")
    const [tokenDescription, setTokenDescription] = useState("")
    const [showModal, setShowModal] = useState(false)
    const hideModal = () => setShowModal(false)
    const dispatch = useNotification()

    return (
        <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">Recent Event</h1>
            <div className="flex flex-wrap">
                {isWeb3Enabled && chainId ? (
                    loading || !recentEvents ? (
                        <div>Loading...</div>
                    ) : (
                        recentEvents.activeEvents.map((event) => {
                            const { creator, nft } = event
                            return eventFactoryAddress ? (
                                <EventBox
                                    creator={creator}
                                    nftAddress={nft}
                                    eventFactoryAddress={eventFactoryAddress}
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
