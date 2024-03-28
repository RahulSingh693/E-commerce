import React from "react";
import AddressCard from "../../Components/Checkout/AddressCard";
import { Divider } from "@mui/material";
import OrderTracker from "../../Components/Orders/OrderTracker";
import { Grid } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

const OrderSummary = () => {
  return (
    <div className="mx-5 lg:mx-10 lg:my-10 my-5">
      <p className="text-xl pt-5 font-medium">Delivery Address</p>
      <div className="border border-slate-100 rounded-md p-5 shadow-sm mt-3">
        <AddressCard />
      </div>
      <p className="text-xl pt-5 font-medium">Order Status</p>
      <div className="py-10 border border-slate-100 mt-3 rounded-md shadow-sm">
        <OrderTracker activeStep={2} />
      </div>
      <p className="text-xl pt-5 font-medium">Ordered Item(s)</p>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div key={index} className="border border-slate-100 p-4 mt-3 shadow-sm">
          <Grid container justifyContent={"space-between"}>
            <Grid items xs={8}>
              <div className="w-full flex justify-around items-center">
                <img
                  src="https://rukminim2.flixcart.com/image/224/224/xif0q/suitcase/6/s/r/-original-imagrk9sbqwzcfpg.jpeg?q=90"
                  alt="product"
                  className="h-[5rem] w-[4.5rem]"
                />
                <div className="flex flex-col pl-4  w-full">
                  <p className=" w-full text-md font-medium text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                    SAFARI ZENO 55 Cabin Suitcase 4 Wheels And
                  </p>
                  <div>
                    <div className="flex gap-2 items-center h-7">
                      <p className="text-[13px]  opacity-65">Size: M</p>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                      />
                      <p className="text-[13px]  opacity-65">Color: Blue</p>
                    </div>
                    <p className="text-sm font-medium text-gray-700">
                      Seller: Tokyo Talkies
                    </p>
                    <p className="text-md text-black pt-1">&#8377;1,399</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid items xs={4}>
              <div className="flex items-center h-full justify-center cursor-pointer">
                <StarRateIcon sx={{ color: "#4b48ad" }} />
                <div className="text-lg pl-1 text-indigo-800 hover:text-indigo-500">
                  Rate and review product
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;
