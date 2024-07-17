const Booking = require('../model/Booking');
const Flight = require('../model/Flight');

exports.createBooking = async (req, res) => {
    const { flightId, passengerName, passengerEmail, passengerPhone, numberOfTickets } = req.body;

    try {
        const flight = await Flight.findById(flightId);

        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }

        const totalPrice = flight.price * numberOfTickets;

        const newBooking = new Booking({
            flightId,
            passengerName,
            passengerEmail,
            passengerPhone,
            numberOfTickets,
            totalPrice,
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
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        booking.status = 'cancelled';
        await booking.save();

        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error cancelling booking', error });
    }
};
    