import { useState } from "react";
import PropTypes from "prop-types";
import SearchModal from "./SearchModal";
import BostaLogo from "./BostaLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocalization } from "../contexts/LocalizationContext";

const navItems = ["main", "prices", "talk_to_sales"];
const Navbar = ({ handleTrackingId, handleSideBar }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const { t, i18n } = useLocalization();
  console.log(useLocalization());

  const trackShippmentColor = showModal
    ? "text-red-500 border rounded p-5"
    : "text-gray-900";
  return (
    <nav className="flex justify-between sm:justify-evenly items-center border-b pb-5 w-full ">
      <BostaLogo />
      <ul className="gap-5 hidden sm:flex items-center">
        {navItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer  font-bold  text-l text-gray-900"
          >
            {t(item)}
          </li>
        ))}
      </ul>
      <ul className="gap-5 items-center relative hidden sm:flex">
        <li
          className={`cursor-pointer font-bold hidden md:block  text-l ${trackShippmentColor} open-modal`}
          onClick={handleShowModal}
        >
          {t("track_your_shipment")}
        </li>
        <li className="cursor-pointer font-bold  text-l text-gray-900 ">
          {t("sign_in")}
        </li>
        <li
          className="cursor-pointer primary-color font-bold"
          onClick={() => {
            i18n.language === "ar"
              ? i18n.changeLanguage("en")
              : i18n.changeLanguage("ar");
          }}
        >
          {t("lang")}
        </li>
        {showModal && <SearchModal handleSubmit={handleTrackingId} />}
      </ul>

      <FontAwesomeIcon
        size="xl"
        icon="fa-solid fa-bars"
        className="cursor-pointer sm:hidden rtl:ml-5 ltr:mr-5 sm:mr-0"
        onClick={handleSideBar}
      />
    </nav>
  );
};

Navbar.propTypes = {
  handleTrackingId: PropTypes.func.isRequired,
  handleSideBar: PropTypes.func.isRequired,
};
export default Navbar;
