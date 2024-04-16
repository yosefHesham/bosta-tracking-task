/* eslint-disable no-fallthrough */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";
import { useLocalization } from "../../contexts/LocalizationContext";

const steps = [
  {
    label: "TICKET_CREATED",
    icon: <FontAwesomeIcon icon="fa-solid fa-square-plus" />,
  },
  {
    label: "PACKAGE_RECEIVED",
    icon: <FontAwesomeIcon icon="fa-solid fa-box" />,
  },
  {
    label: "PACKAGE_OUT_FOR_DELIVERY",
    icon: <FontAwesomeIcon icon="fa-solid fa-truck-fast" />,
  },
  {
    label: "DELIVERED",
    icon: <FontAwesomeIcon icon="fa-solid fa-file" />,
  },
];

const ShippmentTimeLine = ({ currentStage }) => {
  const { t } = useLocalization();
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
                currentStage.stage.toLowerCase() === "delivered" ? (
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
              <p className=" text-gray-800 font-semibold">{t(step.label)}</p>
              {currentStage.message && currentStage.position == index && (
                <div className="text-sm text-wrap text-red-600">
                  {t(currentStage.message)}{" "}
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
