const ShippmentInfo = ({ currentStatus, shippmentNo, providerName, promisedDate }) => {
    const formattedlastUpdate = new Date(currentStatus.timestamp).toLocaleString()

    const formattedPromisedDate = new Date(promisedDate).toLocaleString()

    return <section className='flex justify-evenly'>
        <article >
            <p className='text-gray-500'> ShippmentNo {shippmentNo}</p>
            <p className='primary-color font-bold'> {currentStatus.state}</p>
        </article>

        <article >
            <p className='text-gray-500'> Last Updated </p>
            <p > {formattedlastUpdate}</p>
        </article>

        <article >
            <p className='text-gray-500' > Provider Name</p>
            <p > {providerName}</p>
        </article>

        <article >
            <p className='text-gray-500'> Delivery Date</p>
            <p > {formattedPromisedDate}</p>
        </article>

    </section>

}

export default ShippmentInfo