import PropTypes from "prop-types";
import SearchBox from "./SearchBox";
import { useLocalization } from "../contexts/LocalizationContext";

const SearchModal = ({ handleSubmit }) => {
  const { t } = useLocalization();
  return (
    <section className="rounded border shadow-md hidden md:block absolute p-8 top-16 bg-white gap-5">
      <p className="text-start text-gray-500 font-semibold">
        {t("track_your_shipment")}
      </p>
      <SearchBox handleSubmit={handleSubmit} />
    </section>
  );
};

SearchModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchModal;
