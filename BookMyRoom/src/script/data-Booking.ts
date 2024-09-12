import { add } from "date-fns";

export function currentDate(numberDays) {
  const date = add(new Date(), { days: numberDays });
  console.log(`Datum sa ${numberDays} dana pomaka:`, date.toISOString()); 
  return date.toISOString(); 
}

export const bookings = [
  {
    id: 39,
    cabinId: 8,
    // Guest: {
    //   fullName: "Petre Smith",
    //   email: "petresmith321@gmail.com",
    // },
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
    // Guest: {
    //   fullName: "John McEnrol",
    //   email: "johnmcenrol1@gmail.com",
    // },
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
    // Guest: {
    //   fullName: "Olga Danilovic",
    //   email: "olgadanilovic@gmail.com",
    // },
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
    // guest: {
    //   fullName: "Stipe Antic",
    //   email: "stipeantic1@gmail.com",
    // },
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
    // guest: {
    //   fullName: "Olga Danilovic",
    //   email: "olgadanilovic@gmail.com",
    // },
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
    cabinId: 8,
    // guest: {
    //   fullName: "Bautisa Agut",
    //   email: "bautistaAgut994@gmail.com",
    // },
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
    // guest: {
    //   fullName: "Zher Haren",
    //   email: "zherHarem312@gmail.com",
    // },
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

