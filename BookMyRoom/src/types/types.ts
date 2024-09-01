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
    Bedrooms: {
        id: string;
    };
    Guests: {
        fullName: string ;
        email: string;
    }[];
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
type ButtonConfig = {
    type: string;
    handler: (bookingId: string) => Promise<void>;
    content: string[];
  };
  
 export type BtnsMap = {
    [key: string]: ButtonConfig;
  };
  
 export type FormProps = {
    register: (name: string, options?: any) => { onChange: () => void; onBlur: () => void; ref: React.Ref<any> };
    handleSubmit: (callback: (data: any) => void) => (event: React.FormEvent) => void;
    onSubmit: (data: any) => void;
    errors: {
      [key: string]: {
        message: string;
      };
    };
    isEditSeason: boolean;
    isValid: boolean;
    closeEditModal: () => void;
  }
  
export type User = {
    firstName: string;
    lastName: string;
    email: string;
}

export type Room = {
    name: string;
    maxCapacity: string;
    regularPrice: string;
    discount: string;
    description: string;
    image: string;
}

export type RoomsState = {
    rooms: Room[];
    currentUser: User | null; 
    currentRoom: Room;
}