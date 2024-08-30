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
        fullName: string;
        email: string;
    }[];
};
export type SortOption = 'date-desc' | 'date-asc' | 'amount-high' | 'amount-low';
export type FilterOption = 'all' | string;