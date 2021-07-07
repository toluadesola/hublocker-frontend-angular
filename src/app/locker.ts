export interface Locker{
    id: number;
    name: string;
    price: string;
    noOfSlot: number;
    location: Location;
}

interface Location{
    id: number;
    address: string;
    city: string;
    state: string;
}