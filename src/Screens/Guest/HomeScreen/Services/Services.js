import React from 'react'
import { BiSupport } from "react-icons/bi"
import { TbTruckDelivery } from "react-icons/tb"
import { GiReturnArrow } from "react-icons/gi"
import { RiSecurePaymentFill } from "react-icons/ri"
export const Services = () => {
	return (
		<>
			<section id="services" className="w-100  mt-5 d-flex flex-column align-items-center ">

<div className="containerss  bg-body-secondary d-flex flex-row justify-content-center justify-content-sm-between flex-wrap">


					<div className=" d-flex flex-column  align-items-center p-5">
						<TbTruckDelivery className="fs-1" />
						<h6>Free Delivery</h6>
						<p>Free Shipping on all order</p>
					</div>

					<div className=" d-flex flex-column  align-items-center p-5">
						<GiReturnArrow className="fs-1" />
						<h6>Return Policy</h6>
						<p>Free Shipping on all order</p>
					</div>

					<div className=" d-flex flex-column  align-items-center p-5">
						<BiSupport className="fs-1" />
						<h6>24/7 Support</h6>
						<p>Free Shipping on all order</p>
					</div>

					<div className=" d-flex flex-column  align-items-center p-5">
						<RiSecurePaymentFill className="fs-1" />
						<h6>Secure Payment</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
			</section>
		</>
	)
}
