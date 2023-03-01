import { gql } from "@apollo/client"

// See more example queries on https://thegraph.com/explorer/subgraph/protofire/maker-protocol
export const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: { buyer: "0x000000000000000000000000000000000000dead" }) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`

export const GET_ACTIVE_EVENTS = gql`
    {
        activeEvents(first: 5) {
            id
            creator
            nft
        }
    }
`

export const GET_BOUGHT_ITEMS = gql`
    {
        itemBoughts(first: 5) {
            id
            buyer
            nftAddress
            tokenId
            price
        }
    }
`

export const GET_CANCELED_ITEMS = gql`
    {
        itemCanceleds(first: 5) {
            id
            seller
            nftAddress
            tokenId
        }
    }
`

export const GET_LISTED_ITEMS = gql`
    {
        itemListeds(first: 5) {
            id
            seller
            nftAddress
            tokenId
            price
        }
    }
`

export const GET_CREATED_EVENTS = gql`
    {
        contractCreateds(first: 5) {
            id
            creator
            nft
        }
    }
`
export const GET_DISABLED_EVENTS = gql`
    {
        contractDisableds(first: 5) {
            id
            caller
            nft
        }
    }
`
export const GET_OWNERSHIP_TRANSFERRED_ITEMS = gql`
    {
        ownershipTransferreds(first: 5) {
            id
            previousOwner
            newOwner
        }
    }
`
