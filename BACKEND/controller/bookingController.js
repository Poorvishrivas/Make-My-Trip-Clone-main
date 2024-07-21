const Booking = require('../model/Booking');
const Flight = require('../model/Flight');
const hotelBookingSchema = require('../model/HotelBooking')

exports.createBooking = async (req, res) => {
    const { flightId, userid, passengerEmail, numberOfTickets ,passengerDetails,totalPrice,bookingDate} = req.body;


    try {
        const flight = await Flight.findById(flightId);

        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
         flight.slot = flight.slot - numberOfTickets;
        
        await Flight.findByIdAndUpdate(flightId,flight)
      //  const totalPrice = flight.price * numberOfTickets;

        const newBooking = new Booking({
            userid,
            flightId,
            passengerEmail,
            passengerDetails,
            numberOfTickets,
            bookingDate,
            totalPrice
        });

        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

exports.getBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('flightId');

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching booking', error });
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error cancelling booking', error });
    }
};

exports.cancelHotel = async (req, res) => {
    try {
        const booking = await hotelBookingSchema.findByIdAndDelete(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error cancelling booking', error });
    }
};


exports.flightsHistory = async (req,res) =>{
   try {
    const data = await Booking.find({userid:req.user.user.id});
    
    res.status(200).json(data);
   } catch (error) {
    res.status(500).json({ message: 'Error fetching flight booking history', error });
   }
   
}
    
exports.hotelsHistory = async (req,res) =>{
    try {
        
        const data = await hotelBookingSchema.find({userid:req.user.user.id});
       
        res.status(200).json(data);
    } catch (error) {
     res.status(500).json({ message: 'Error fetching hotel booking history', error });
    }
   
   
}