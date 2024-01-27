import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { IInquiry } from '../models/inquiry';
import { IOffer } from '../models/offer';
import { Container, Grid, GridColumn, ItemGroup, Segment } from 'semantic-ui-react';
import OfferComponent from './OfferComponent';

interface LocationState {
    inquiry: IInquiry;
}

export default function OffersDashboardComponent() {
    const history = useHistory();
    const location = useLocation<LocationState>();
    const inquiry: IInquiry = location.state?.inquiry;

    const [offers, setOffers] = useState<IOffer[]>([]);

    const [cancelled, setCancelled] = useState<number>(0);

    useEffect(() => {
        const source = axios.CancelToken.source()
        const fetchOffers = async () => {
            try {
                const response = await axios.post(`http://localhost:5010/offers`, inquiry, {
                    cancelToken: source.token
                });
                setOffers(response.data);
            } catch (error) {
                setCancelled(1);
                if (axios.isCancel(error)) {
                    console.log('Request canceled: ', error.message);
                    
                }
                else {
                    console.error('Error fetching offers:', error);
                }
            }
        };

        fetchOffers();

        setTimeout(() => {
            source.cancel('Operation canceled due to timeout')
        }, 5000);

    }, [inquiry]);

    useEffect(() => {
        if (cancelled == 0)
            return;
        const timer = setTimeout(() => {
            history.push('/form')
        }, 2000);

        return () => clearTimeout(timer);
    }, [cancelled]);

    return (
        <div>
            {offers.length > 0 ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Container style={{ marginTop: '1em' }}>
                        <Grid>
                            <GridColumn width='3'></GridColumn>
                            <GridColumn width='10'>
                                <Segment>
                                    <ItemGroup divided>
                                        {offers.map(offer => (
                                            <OfferComponent offer={offer} />
                                        ))}
                                    </ItemGroup>
                                </Segment>
                            </GridColumn>
                            <GridColumn width='3'></GridColumn>
                        </Grid>
                    </Container>
                </div>
            ) : (

                cancelled == 1 ? (
                    <>
                        <p>No offers</p>
                        <p>Redirecting...</p>
                    </>
                ) : (
                    <p>Waiting</p>
                )

            )}
        </div>
    );
}
