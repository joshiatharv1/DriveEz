import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../redux/actions/bookingActions";
import { Col, Row } from "antd";
import Spinner from '../components/Spinner.tsx';
import moment from "moment";
import UserBookingHeader from "../components/Headers/userBookingHeader.tsx";
import Navbar from "../components/navbar.tsx";

function UserBookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookingsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  return (
    <>
      <Navbar />
      {loading && (<Spinner />)}
      <UserBookingHeader />

      <Row justify="center" gutter={16} style={{ height: "100vh" }}>
        <Col lg={16} sm={24}>

          {bookings.filter(o => o.user == user._id).map((booking) => {
            return <Row gutter={16} className="bs1 mt-3 text-left">
              <Col lg={6} sm={24}>
                <p className="p-2"><b>{booking.car.name}</b></p>
                <p className="p-2">Total hours: <b>{booking.totalHours}</b></p>
                <p className="p-2">Rent per hour: <b>${booking.car.rentPerHour}</b></p>
                <p className="p-2">Total amount: <b>${booking.totalAmount}</b></p>
              </Col>

              <Col lg={12} sm={24}>
                <p className="p-2">Transaction Id: <b>{booking.transactionId}</b></p>
                <p className="p-2">From: <b>{booking.bookedTimeSlots.from}</b></p>
                <p className="p-2">To: <b>{booking.bookedTimeSlots.to}</b></p>
                <p className="p-2">Date of booking: <b>{moment(booking.createdAt).format('MMM DD yyyy')}</b></p>
              </Col>

              <Col lg={6} sm={24} className='text-right'>
                <img style={{ borderRadius: 5, marginTop: "5px", marginBottom: "5px",height:"165px", width:"auto", position:"absolute",left:"-5px" }} src={booking.car.image}  />
              </Col>
            </Row>
          })}

        </Col>
      </Row>
    </>
  );
}

export default UserBookings;
