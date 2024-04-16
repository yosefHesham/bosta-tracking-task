import { useLocalization } from "../contexts/LocalizationContext";

const AddressBox = () => {
  const { t } = useLocalization();

  return (
    <section>
      <h3 className="text-start text-gray-600 font-semibold text-lg">
        {t("delivery_address")}
      </h3>
      <section className="rounded-md border  bg-slate-200 p-5">
        {t("actual_address")}
      </section>
    </section>
  );
};

export default AddressBox;
