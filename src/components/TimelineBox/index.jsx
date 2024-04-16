/* eslint-disable no-fallthrough */

import PropTypes from "prop-types";
import ShippmentInfo from "./ShippmentInfo";
import ShippmentTimeLine from "./ShippmentTimeline";

const mapCurrentStateToStage = (currentState, lastEvent) => {
  switch (currentState) {
    case "TICKET_CREATED":
      return {
        stepperBgColor: "bg-green-500",
        statusTextColor: "text-green-500",
        stage: "Ticket Created",
        position: 0,
      };
    case "PACKAGE_RECEIVED":
    case "NOT_YET_SHIPPED":
      return {
        stepperBgColor: "bg-green-500",
        statusTextColor: "text-green-500",
        stage: "Package Received",
        position: 1,
      };
    case "OUT_FOR_DELIVERY":
    case "WAITING_FOR_CUSTOMER_ACTION":
    case "IN_TRANSIT":
      return {
        stepperBgColor: "bg-green-500",
        statusTextColor: "text-green-500",
        stage: "Out For Delivery",
        position: 2,
      };
    case "CANCELLED":
      switch (lastEvent) {
        case "TICKET_CREATED":
          return {
            stepperBgColor: "bg-red-500",
            statusTextColor: "text-red-500",
            stage: "Ticket Created",
            message: "Cancelled_Message",
            position: 1,
          };
        case "PACKAGE_RECEIVED":
          return {
            stepperBgColor: "bg-red-500",
            statusTextColor: "text-red-500",
            stage: "Package Received",
            message: "Cancelled_Message",
            position: 1,
          };
        case "OUT_FOR_DELIVERY":
          return {
            stepperBgColor: "bg-red-500",
            statusTextColor: "text-red-500",
            stage: "Out For Delivery",
            message: "Cancelled_Message",
            position: 2,
          };
      }

    case "DELIVERED_TO_SENDER":
      return {
        stepperBgColor: "bg-yellow-500",
        statusTextColor: "text-yellow-500",
        stage: "Out For Delivery",
        message: "DNR_Message",
        position: 2,
      };
    case "DELIVERED":
      return {
        stepperBgColor: "bg-green-500",
        statusTextColor: "text-green-500",
        stage: "Delivered",
        position: 3,
      };
  }
};

const TimelineBox = ({
  currentStatus,
  shippmentNo,
  lastUpdated,
  providerName,
  promisedDate,
  transitEvents,
}) => {
  const lastEvent = transitEvents[transitEvents.length - 2];

  const currentStage = mapCurrentStateToStage(currentStatus.state, lastEvent);

  return (
    <section className="flex rounded-md shadow-md flex-col mt-16 mx-auto border p-2">
      <ShippmentInfo
        currentStatus={currentStatus}
        shippmentNo={shippmentNo}
        statusColor={currentStage.statusTextColor}
        lastUpdated={lastUpdated}
        providerName={providerName}
        promisedDate={promisedDate}
      />
      <hr className="my-5" />

      <ShippmentTimeLine currentStage={currentStage} />
    </section>
  );
};

TimelineBox.propTypes = {
  currentStatus: PropTypes.object.isRequired,
  shippmentNo: PropTypes.string.isRequired,
  statusColor: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  providerName: PropTypes.string.isRequired,
  promisedDate: PropTypes.string.isRequired,
  transitEvents: PropTypes.array.isRequired,
};

export default TimelineBox;
