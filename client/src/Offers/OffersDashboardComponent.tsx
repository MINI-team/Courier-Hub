import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { IInquiry } from '../models/inquiry';
import { IOffer } from '../models/offer';
import OfferComponent from './OfferComponent';
import { Container, Grid, GridColumn, Item, ItemContent, ItemGroup, ItemHeader, Segment } from 'semantic-ui-react';

interface LocationState {
    inquiry: IInquiry;
}

export default function OffersDashboardComponent() {
    const location = useLocation<LocationState>();
    const inquiry: IInquiry = location.state?.inquiry;

    const [offers, setOffers] = useState<IOffer[]>([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get(`http://localhost:5010/offers?width=${inquiry.width}`);
                setOffers(response.data);
            } catch (error) {
                console.error('Error fetching offers:', error);
            }
        };

        fetchOffers();
    }, [inquiry.width]);

    return (
        <div>
            {offers.length > 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Container>
                        <Grid>
                            <GridColumn width='3'></GridColumn> {/* Left spacing column */}
                            <GridColumn width='10'>
                                <Segment>
                                    <ItemGroup divided>
                                        {offers.map(offer => (
                                            <Item key={offer.offer}>
                                                <ItemContent>
                                                    <ItemHeader>{offer.company}</ItemHeader>
                                                </ItemContent>
                                            </Item>
                                        ))}
                                    </ItemGroup>
                                </Segment>
                            </GridColumn>
                            <GridColumn width='3'></GridColumn> {/* Right spacing column */}
                        </Grid>
                    </Container>
                </div>
            ) : (
                <p>Waiting</p>
            )}
        </div>
    );
}
