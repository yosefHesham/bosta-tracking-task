import PropTypes from "prop-types";
import { useLocalization } from "../contexts/LocalizationContext";

const tableColumns = ["branch", "date", "time", "details"];

const ShippmentDetailsTable = ({ transitEvents }) => {
  const { t } = useLocalization();
  return (
    <section className="sm:overflow-hidden overflow-auto sm:w-fit  flex-grow">
      <h3 className="text-start text-gray-600 font-semibold text-lg">
        {t("details")}{" "}
      </h3>

      <table className="border border-gray-200 rounded-lg w-full overflow-hidden">
        <thead>
          <tr className="bg-gray-50">
            {tableColumns.map((column) => {
              return (
                <th key={column} className="px-4 py-4">
                  {t(column)}
                </th>
              );
            })}
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
                <td className=" text-gray-600 font-semibold px-4 py-2">
                  {event.hub ?? "Nasr City"}
                </td>
                <td className="text-gray-600 font-semibold px-4 py-2">
                  {time}
                </td>
                <td className=" text-gray-600 font-semiboldpx-4 py-2">
                  {date}
                </td>
                <td className=" text-gray-600 font-semiboldpx-4 py-2">
                  {t(event.state)}
                </td>
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
