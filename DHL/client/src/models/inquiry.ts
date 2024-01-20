export interface IInquiry{
    id: number;

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
}

export function getEmptyInquiry (){
    const inquiry = 
    {
        id: -1,
        width: undefined,
        height: undefined,
    }
    return inquiry;
}