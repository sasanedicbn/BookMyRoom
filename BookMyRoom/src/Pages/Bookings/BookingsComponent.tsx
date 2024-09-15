import { useEffect, useState } from "react";
import Select from "../../UX/Select";
import { supabase } from "../../supabase/supabaseClient";
import BookingsTable from "./BookingsTable";
import Spinner from "../../global/Spinner";
import { useDispatch } from "react-redux";
import { setBookings } from "../../store/bookingsSlice";
import Filter from "./Filter";
import { useSearchParams } from "react-router-dom";
import { selectOptions } from "../../constants/constnsts";

const BookingsComponent = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("status") || "all";
  const sortValue = searchParams.get("sort") || "date-desc";

  const fetchBookings = async () => {
    setLoading(true);
    let query = supabase
      .from("Bookings")
      .select("*, Bedrooms (id), Guests (fullName, email)");

    if (filterValue !== "all") query = query.eq("status", filterValue);
    console.log(sortValue, 'sortValue')
    if (sortValue.includes("date"))
      query = query.order("created_at", { ascending: sortValue === "date-asc" });
    else
      query = query.order("totalPrice", { ascending: sortValue === "amount-low" });

    const { data, error } = await query;
    setLoading(false);
    if (!error) dispatch(setBookings(data));
  };

  useEffect(() => {
    fetchBookings();
  }, [filterValue, sortValue]);

  return (
    <div className="bookings-container">
      <div className="bookings-filters">
        <h1>Bookings</h1>
        <Filter options={["all", "checked-out", "checked-in", "unconfirmed"]} />
        <Select
          options={selectOptions}
          onChange={(e) => setSearchParams({ status: filterValue, sort: e.target.value })}
        />
      </div>
      {loading ? <Spinner /> : <BookingsTable />}
    </div>
  );
};

export default BookingsComponent;


