import { add } from "date-fns";

export function currentDate(numberDays) {
  const date = add(new Date(), { days: numberDays });
  console.log(`trenutni datum ${numberDays} :`, date.toISOString()); 
  return date.toISOString(); 
}

export const bookings = [
  {
    id: 39,
    cabinId: 8,
    guestId:6,
    status: "checked-out",
    create_booking: currentDate(5),  
    finish_booking: currentDate(8),  
    hasBreakfast: false,
    isPaid: null,
    totalPrice: 2600,
    observations: null,
    created_at: currentDate(-5),  
  },
  {
    id: 38,
    cabinId: 8,
    guestId:4,
    status: "unconfirmed",
    create_booking: currentDate(0),  
    finish_booking: currentDate(2), 
    hasBreakfast: true,
    isPaid: true,
    totalPrice: 1200,
    observations: null,
    created_at: currentDate(-1),  
  },
  {
    id: 37,
    cabinId: 11,
    guestId:5,
    status: "checked-in",
    create_booking: currentDate(-5),  
    finish_booking: currentDate(1),  
    hasBreakfast: true,
    isPaid: false,
    totalPrice: 3000,
    observations: null,
    created_at: currentDate(-5),  
  },
  {
    id: 36,
    cabinId: 14,
    guestId:1,
    status: "unconfirmed",
    create_booking: currentDate(-5),  
    finish_booking: currentDate(1),  
    hasBreakfast: false,
    isPaid: null,
    totalPrice: 2000,
    observations: null,
    created_at: currentDate(-5), 
  },
  {
    id: 35,
    cabinId: 14,
    guestId:2,
    status: "checked-out",
    create_booking: currentDate(-5), 
    finish_booking: currentDate(0), 
    hasBreakfast: true,
    isPaid: false,
    totalPrice: 1500,
    observations: null,
    created_at: currentDate(-5),  
  },
  {
    id: 34,
    cabinId: 7,
    guestId:3,
    status: "checked-in",
    create_booking: currentDate(-5),  
    finish_booking: currentDate(-2),  
    hasBreakfast: false,
    isPaid: null,
    totalPrice: 2200,
    observations: null,
    created_at: currentDate(-5), 
  },
  {
    id: 5,
    cabinId: 7,
    guestId:8,
    status: "checked-out",
    create_booking: currentDate(-20),  
    finish_booking: currentDate(-12),  
    hasBreakfast: true,
    isPaid: true,
    totalPrice: 1200,
    observations: null,
    created_at: currentDate(-30),  
  },
];

