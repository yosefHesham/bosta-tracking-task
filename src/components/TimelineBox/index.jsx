import ShippmentInfo from "./ShippmentInfo"
import ShippmentTimeLine from "./ShippmentTimeline"

const TimelineBox = ({ currentStatus, shippmentNo, lastUpdated, providerName, promisedDate, transitEvents }) => {
    const lastEvent = transitEvents[transitEvents.length - 2]

    return (<section className='flex rounded-md shadow-md flex-col mt-16 mx-auto border p-2'>

        <ShippmentInfo currentStatus={currentStatus} shippmentNo={shippmentNo} lastUpdated={lastUpdated} providerName={providerName} promisedDate={promisedDate} />
        <hr className='my-5' />

        <ShippmentTimeLine state={currentStatus.state} lastEvent={lastEvent.state} />


    </section>)
}

export default TimelineBox