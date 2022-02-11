export interface Invoice {
    id: number;
    logo: string;
    title: string;
    date: Date;
    ref: number;
    localAddress: string;
    outgoingAddress: string;
    timeIn: number;
    timeOut: number;
    description: string;
    hours: number;
    rate: number;
    overtime: number;
    tax: number;
    subTotal: number;
    gross: number;

}