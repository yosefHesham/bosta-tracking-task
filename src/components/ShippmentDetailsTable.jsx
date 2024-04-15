import PropTypes from "prop-types";
import { useLocalization } from "../contexts/LocalizationContext";

const ShippmentDetailsTable = ({ transitEvents }) => {
  const { t } = useLocalization();
  return (
    <section className="sm:overflow-hidden overflow-auto w-11/12 sm:w-fit">
      <h3 className="text-start"></h3>

      <table className="border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">{t("branch")}</th>
            <th className="px-4 py-2">{t("date")}</th>
            <th className="px-4 py-2">{t("time")}</th>
            <th className="px-4 py-2">{t("details")}</th>
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
                <td className="border px-4 py-2">{event.hub ?? "Nasr City"}</td>
                <td className="border px-4 py-2">{date}</td>
                <td className="border px-4 py-2">{time}</td>
                <td className="border px-4 py-2">{t(event.state)}</td>
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
