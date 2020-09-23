/*
[ ServiceContainer States Outline ]

NOTE: Must considered as application-layer states

{
  type: $SUBSCRIPTION_TYPE, // Default: "ALL"
  expectedFee: {
    week: $WEEKLY_FEE,
    month: $MONTHLY_FEE,
    year: $YEARLY_FEE,
  },
  paidFee: $PAID_FEE,  // References "type"
  subscribedApps: [
    // From Server-Side, NOT by Client-Side 
    {
      appName,
      appImgURL,
      type,
      bill,
      startDate,
      endDate,
    }
  ],
}
*/

import React from "react";
import ServicePresenter from "./ServicePresenter";

const ServiceContainer = () => <ServicePresenter />;

export default ServiceContainer;
