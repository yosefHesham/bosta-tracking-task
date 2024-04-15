import { useLocalization } from "../contexts/LocalizationContext";

const InformProblemBox = () => {
  const { t } = useLocalization();

  return (
    <section className="flex border rounded-md items-center justify-evenly p-5 h-42 gap-5">
      <div>
        <p>{t("problem_question")}</p>
        <div className="rounded-xl p-2 cursor-pointer bg-red-700 text-white">
          {t("inform_problem")}
        </div>
      </div>

      <img src="/Capture.PNG" alt="illustration" className=" h-15"></img>
    </section>
  );
};

export default InformProblemBox;
