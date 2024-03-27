import React from "react";
import { Divider, Grid } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import OrderCard from "../../Components/OrderCard";

const Order = () => {
  const orders = [
    { label: "On the way", value: "on-the-way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "Returned" },
  ];
  return (
    <div className="my-5 mx-4">
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={3}>
          <div className="h-auto sticky top-5 p-6 border border-gray-100 rounded-md shadow-sm">
            <div className="flex justify-between pb-1">
                <p className="text-lg font-bold  opacity-75 text-slate-900">Filters</p>
                <FilterAltIcon className="text-gray-500" />
            </div>
            <Divider className="my-2" />
            <div>
              <p className="text-md font-semibold py-2 text-slate-900">
                Order Status
              </p>
              {orders.map((item) => {
                return (
                  <div className="flex items-center py-1">
                    <input
                      defaultValue={item.value}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-slate-800 focus:ring-slate-500"
                    />
                    <label
                      className="ml-3 text-sm text-gray-700 font-semibold"
                      htmlFor={item.value}
                    >
                      {item.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>

        <Grid item xs={8.7} className="space-y-3">
             { [1,2,3,4,5,6].map((idx) => <OrderCard key={idx}/> )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
