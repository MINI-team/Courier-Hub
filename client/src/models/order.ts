export interface IOrder{
    width?: number;
    height?: number;
    weight?: number;
    date?: Date;
    
    sourceStreetName?: string;
    sourceStreetNumber?: string;
    sourceFlatNumber?: string;
    sourceZipCode?: string;
    sourceCity?: string;

    destinationStreetName?: string;
    destinationStreetNumber?: string;
    destinationFlatNumber?: string;
    destinationZipCode?: string;
    destinationCity?: string;

    submitted?: boolean;
    offers?: number[];
    priority?: string;
    deliveredOnWeekend?: boolean;

    firstName?: string;
    lastName?: string;
    email?: string;
    streetName?: string;
    streetNumber?: string;
    flatNumber?: string;
    zipCode?: string;
    city?: string;

    companyName?: string;
    price?: number;

    id?: number;
}