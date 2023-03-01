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
    return <div className={styles.container}>my event</div>
}
