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

export default function Home() {
    return <div className={styles.container}>create event</div>
}
