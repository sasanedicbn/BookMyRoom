import { NavigateFunction } from "react-router-dom";

export type SupabaseResponse = {
    error: null | {
        message: string;
    };
}   
export type Booking = {
    id: string;
    status: string;
    created_at: string;
    totalPrice: number;
    checkInDate:string;
    checkOutDate:string;
    create_booking:string;
    finish_booking: string;
    Bedrooms: {
        id: string;
    };
    Guests: {
        fullName: string ;
        email: string;
    };
};
export type SortOption = 'date-desc' | 'date-asc' | 'amount-high' | 'amount-low';
export type FilterOption = 'all' | string;

export type Guest = {
    id: number;
    fullName: string;
    email: string;
    nationalID: string;
    created_at: string;
    country: string;
    nationality: string;
};

export type BookingDetails = {
    id: number;
    created_at: string;
    totalPrice: number;
    status: string;
    hasBreakfast: boolean;
    finish_booking: string;
    create_booking: string;
    guestId: number;
    isPaid: boolean;
    observations: string | null;
    cabinId: number;
    handler: (bookingId: string) => Promise<void>;
    Guests: Guest;
};
  
 export type BtnsMap = {
    [key: string]: {
      type: string;
      handler: (details: any, navigate: NavigateFunction) => void;
      content: string[];
    };
  };  
  
 export type User = {
    currentUser: string | null
 }

export type Room = {
    name: string;
    maxCapacity: string;
    regularPrice: string;
    discount: string;
    description: string;
    image: string;
    id:number;
}

export type RoomsState = {
    rooms: Room[];
    currentUser: User | null; 
    currentRoom: Room;
}