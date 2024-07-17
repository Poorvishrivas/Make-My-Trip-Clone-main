import { createBrowserRouter } from "react-router-dom";
import FlightsList from "../component/Admin/FlightsList";
import HotelsList from "../component/Admin/HotelsList";

export const router =createBrowserRouter([
    {
        path:"/admin/flight",
        element:<FlightsList/>

    },
    {
        path:"/admin/hotel",
        element:<HotelsList/>
    }
])