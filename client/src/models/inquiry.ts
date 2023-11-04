export interface IInquiry{
    width?: number;
    height?: number;
    weight?: number;
    date?: Date;
    sourceStreetName?: string;
    sourceStreetNumber?: string;
    sourceFlatNumber?: string;
    submitted?: boolean;
    offers?: number[];
    priority?: string;
    deliveredOnWeekend?: boolean;
}

export function getEmptyInquiry (){
    const inquiry = 
    {
        width: undefined,
        height: undefined,
    }
    return inquiry;
}