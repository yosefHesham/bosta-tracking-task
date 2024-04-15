import PropTypes from "prop-types";

const ShippmentDetailsTable = ({ transitEvents }) => {
  return (
    <section className="overflow-x-scroll  w-11/12">
      <h3 className="text-start">Shippment Details</h3>

      <table className="border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-1">Branch</th>
            <th className="px-2 py-1">Date</th>
            <th className="px-2 py-1">Time</th>
            <th className="px-2 py-1">Details</th>
          </tr>
        </thead>
        <tbody>
          {transitEvents.map((event, index) => {
            const formattedDate = new Date(event.timestamp).toLocaleString();
            const dateAndTime = formattedDate.split(",");
            const date = dateAndTime[1];
            const time = dateAndTime[0];
            return (
              <tr key={index}>
                <td className="border px-2 py-1">{event.hub ?? "Nasr City"}</td>
                <td className="border px-2 py-1">{date}</td>
                <td className="border px-2 py-1">{time}</td>
                <td className="border px-2 py-1">{event.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

ShippmentDetailsTable.propTypes = {
  transitEvents: PropTypes.array.isRequired,
};

export default ShippmentDetailsTable;
