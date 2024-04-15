import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import trackServiceWithId from "../services/tracking_service";
import TimelineBox from "../components/TimelineBox";
import ShippmentDetailsTable from "../components/ShippmentDetailsTable";
import InformProblemBox from "../components/InformProblemBox";
import AddressBox from "../components/AddressBox";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/SideBar";
const TrackingPage = () => {
  const [data, setData] = useState(null);
  const [trackingId, setTrackingId] = useState("7234258");
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const toggleSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };
  const getData = async (id) => {
    try {
      const receivedData = await trackServiceWithId(id);
      setData(receivedData);
    } catch (error) {
      setData({
        error: "Error fetching tracking data. Please try again later.",
      });
    }
  };

  const handleTrackingId = (id) => {
    setTrackingId(id);
  };
  useEffect(() => {
    getData(trackingId);
  }, [trackingId]);
  return (
    <section>
      <Navbar
        handleTrackingId={handleTrackingId}
        handleSideBar={toggleSideBar}
      />

      <div className="w-4/5 mx-auto mt-5 md:hidden">
        <SearchBox handleSubmit={handleTrackingId} />
      </div>

      {isOpenSideBar && (
        <Sidebar isOpen={isOpenSideBar} onClose={toggleSideBar} />
      )}
      {data && !data.error && (
        <>
          <TimelineBox
            currentStatus={data.CurrentStatus}
            shippmentNo={data.TrackingNumber}
            providerName={data.provider}
            promisedDate={data.PromisedDate}
            transitEvents={data.TransitEvents}
          />

          <section className="mt-10 flex  just justify-evenly w-full">
            <ShippmentDetailsTable transitEvents={data.TransitEvents} />
            <section className="flex flex-col gap-4">
              <AddressBox />
              <InformProblemBox />
            </section>
          </section>
        </>
      )}

      {data && data.error && <p className="text-red-500 ">{data.error}</p>}
    </section>
  );
};

export default TrackingPage;
