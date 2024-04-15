/* eslint-disable no-fallthrough */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

const steps = [
  {
    label: "Ticket Created",
    icon: <FontAwesomeIcon icon="fa-solid fa-square-plus" />,
  },
  {
    label: "Package Recieved",
    icon: <FontAwesomeIcon icon="fa-solid fa-box" />,
  },
  {
    label: "Package Out For Delivery",
    icon: <FontAwesomeIcon icon="fa-solid fa-truck-fast" />,
  },
  {
    label: "Delivered",
    icon: <FontAwesomeIcon icon="fa-solid fa-file" />,
  },
];

const ShippmentTimeLine = ({ currentStage }) => {
  return (
    <div>
      <div className="flex justify-between items-center px-5">
        {steps.map((step, index) => (
          <>
            <div key={index} className="step">
              <div
                className={`step-circle ${index <= currentStage.position ? currentStage.stepperBgColor : " bg-gray-400"}`}
              >
                {currentStage.position > index ||
                currentStage.stage === "Delivered" ? (
                  <FontAwesomeIcon icon="fa-solid fa-check" />
                ) : (
                  step.icon
                )}
              </div>
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`horizontal-line ${index < currentStage.position && currentStage.position ? currentStage.stepperBgColor : "bg-gray-500"}`}
              ></div>
            )}
          </>
        ))}
      </div>
      <div className="flex justify-between px-3">
        {steps.map((step, index) => (
          <>
            <div key={index} className="step">
              <div>{step.label}</div>
              {currentStage.message && currentStage.position == index && (
                <div className="text-sm text-wrap text-red-600">
                  {currentStage.message}{" "}
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

ShippmentTimeLine.propTypes = {
  currentStage: PropTypes.object.isRequired,
};
export default ShippmentTimeLine;
