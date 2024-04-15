import PropTypes from "prop-types";

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

  return (
    <section className="flex justify-evenly">
      <article>
        <p className="text-gray-500"> ShippmentNo {shippmentNo}</p>
        <p className={`${statusColor} font-bold`}> {currentStatus}</p>
      </article>

      <article>
        <p className="text-gray-500"> Last Updated </p>
        <p className="font-bold  text-l text-gray-900">
          {" "}
          {formattedlastUpdate}
        </p>
      </article>

      <article>
        <p className="text-gray-500"> Provider Name</p>
        <p className="font-bold  text-l text-gray-900"> {providerName}</p>
      </article>

      <article>
        <p className="text-gray-500"> Delivery Date</p>
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
