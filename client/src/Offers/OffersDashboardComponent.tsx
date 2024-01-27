import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { IInquiry } from '../models/inquiry';
import { IOffer } from '../models/offer';
import { Button, Container, Grid, GridColumn, Item, ItemContent, ItemGroup, ItemHeader, ItemMeta, Segment } from 'semantic-ui-react';
import OfferComponent from './OfferComponent';

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
                const response = await axios.post(`http://localhost:5010/offers`, inquiry);
                setOffers(response.data);
            } catch (error) {
                console.error('Error fetching offers:', error);
            }
        };

        fetchOffers();
    }, [inquiry]);

    return (
        <div>
            {offers.length > 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Container style={{marginTop: '1em'}}>
                        <Grid>
                            <GridColumn width='3'></GridColumn>
                            <GridColumn width='10'>
                                <Segment>
                                    <ItemGroup divided>
                                        {offers.map(offer => (
                                           <OfferComponent offer={offer}/>
                                        ))}
                                    </ItemGroup>
                                </Segment>
                            </GridColumn>
                            <GridColumn width='3'></GridColumn>
                        </Grid>
                    </Container>
                </div>
            ) : (
                <p>Waiting</p>
            )}
        </div>
    );
}
