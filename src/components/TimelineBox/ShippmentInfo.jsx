import PropTypes from "prop-types";
import { useLocalization } from "../../contexts/LocalizationContext";

const ShippmentInfo = ({
  currentStatus,
  shippmentNo,
  statusColor,
  providerName,
  promisedDate,
}) => {
  const formattedlastUpdate = new Date(
    currentStatus.timestamp
  ).toLocaleString();

  const formattedPromisedDate = new Date(promisedDate).toLocaleString();
  const { t } = useLocalization();

  return (
    <section className="flex justify-evenly">
      <article>
        <p className="text-gray-500">
          {t("shipmentNo")} {shippmentNo}
        </p>
        <p className={`${statusColor} font-bold`}> {t(currentStatus)}</p>
      </article>

      <article>
        <p className="text-gray-500"> {t("last_update")} </p>
        <p className="font-bold  text-l text-gray-900">
          {" "}
          {formattedlastUpdate}
        </p>
      </article>

      <article>
        <p className="text-gray-500"> {t("provider_name")}</p>
        <p className="font-bold  text-l text-gray-900"> {providerName}</p>
      </article>

      <article>
        <p className="text-gray-500"> {t("delivery_date")}</p>
        <p className="font-bold  text-l text-gray-900">
          {formattedPromisedDate}
        </p>
      </article>
    </section>
  );
};

ShippmentInfo.propTypes = {
  currentStatus: PropTypes.object.isRequired,
  shippmentNo: PropTypes.string.isRequired,
  providerName: PropTypes.string.isRequired,
  promisedDate: PropTypes.string.isRequired,
  statusColor: PropTypes.string.isRequired,
};

export default ShippmentInfo;
