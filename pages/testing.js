import { useState, useEffect } from "react"
import { useQuery, gql } from "@apollo/client"
import { useWeb3Contract, useMoralis } from "react-moralis"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import nftFactoryAbi from "../constants/EventFactory.json"
import nftAbi from "../constants/EventContract.json"
import { ethers } from "ethers"

// const GET_ACTIVE_ITEMS = gql`
//     {
//         activeItems(first: 5) {
//             id
//             buyer
//             seller
//             nftAddress
//             tokenId
//             price
//         }
//     }
// `

export default function Test() {
    const { isWeb3Enabled, account } = useMoralis()
    // const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS)
    // console.log(data)

    const nftAddress = "0xB30EEBB17D710E37933485883fd2ca7D75BCb022"

    const { runContractFunction: getMintFee } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "mintFee",
    })
    async function updateUI() {
        const response = await getMintFee()
        const { wei, _isBigNumber } = response
        console.log(ethers.utils.formatEther(response))
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    return <div>Developer playground</div>
}

//            <div>{mintFee}</div>
