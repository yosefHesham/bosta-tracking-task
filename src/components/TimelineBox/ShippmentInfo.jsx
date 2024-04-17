import moment from "moment";
import PropTypes from "prop-types";
import { useLocalization } from "../../contexts/LocalizationContext";

const ShippmentInfo = ({
  currentStatus,
  shippmentNo,
  statusColor,
  providerName,
  promisedDate,
}) => {
  const formattedPromisedDate = moment(promisedDate);
  const { t } = useLocalization();
  const formattedlastUpdate = moment(currentStatus.timestamp);

  return (
    <section className="flex flex-col md:flex-row justify-evenly">
      <article>
        <p className="text-gray-500">
          {t("shipmentNo")} {shippmentNo}
        </p>
        <p className={`${statusColor} font-bold`}> {t(currentStatus.state)}</p>
      </article>

      <article>
        <p className="text-gray-500"> {t("last_update")} </p>
        <p className="font-bold  text-l text-gray-900">
          {formattedlastUpdate.format("dddd ")}
          {formattedlastUpdate.format("YYYY/MM/DD ")}
          at {formattedlastUpdate.format("HH:mm A")}
        </p>
      </article>

      <article>
        <p className="text-gray-500"> {t("provider_name")}</p>
        <p className="font-bold  text-l text-gray-900"> {providerName}</p>
      </article>

      <article>
        <p className="text-gray-500"> {t("delivery_date")}</p>
        <p className="font-bold  text-l text-gray-900">
          {formattedPromisedDate.format("D MMMM YYYY")}
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
