import { Button, GridColumn, Item, ItemContent, ItemHeader, ItemMeta } from "semantic-ui-react"
import { IOffer } from "../models/offer"
import { useHistory } from "react-router-dom"

interface Props {
    offer: IOffer
}

export default function OfferComponent({ offer }: Props) {
    const history = useHistory()

    const onSubmitHandle = () => {
        console.log('wybieram')
        console.log(offer)
        history.push('/selected', {offer: offer})
    }

    return (
        <Item key={offer.offer}>
            <ItemContent>
                <ItemHeader>{offer.details}</ItemHeader>
                <ItemMeta>
                    <div>{offer.price}</div>
                </ItemMeta>
                <Item.Description>
                    <div>{offer.company}</div>
                    <Button floated='right' content="View" onClick={onSubmitHandle}/>
                </Item.Description>
            </ItemContent>
        </Item>
    )
}