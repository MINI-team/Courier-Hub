import { IInquiry } from "./inquiry";

export interface IOrder{
    id?: number;
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

    price?: number;

    status: number;
}

export interface IOrderDisplay{
    id?: number;
    inquiry?: IInquiry;
    companyName?: string;
    price?: number;
}