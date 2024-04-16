import PropTypes from "prop-types";
import { useLocalization } from "../contexts/LocalizationContext";

const barItems = ["main", "prices", "talk_to_sales", "sign_in"];

const Sidebar = ({ isOpen, onClose }) => {
  const { t, i18n } = useLocalization();
  return (
    <div
      className={`fixed inset-0 sm:hidden z-50 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex justify-end h-screen">
        <div className="w-64 bg-white shadow-md">
          <div className="p-4">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div className="px-4 py-2">
            <ul className="flex flex-col gap-2">
              <>
                {barItems.map((item) => (
                  <li
                    onClick={onClose}
                    key={item}
                    className="cursor-pointer  font-bold  text-l text-gray-900"
                  >
                    {t(item)}
                  </li>
                ))}
                <li
                  className="cursor-pointer  font-bold  text-l text-red-500"
                  onClick={() => {
                    i18n.language === "ar"
                      ? i18n.changeLanguage("en")
                      : i18n.changeLanguage("ar");
                  }}
                >
                  {t("lang")}
                </li>
              </>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;
