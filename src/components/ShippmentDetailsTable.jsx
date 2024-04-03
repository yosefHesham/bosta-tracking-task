const ShippmentDetailsTable = ({ transitEvents }) => {

    return <section>
        <h3 className="text-start">Shippment Details</h3>

        <table>
            <thead>
                <tr className="bg-gray-100">
                    <th className="px-4 py-2" >Branch</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Details</th>
                </tr>
            </thead>
            <tbody>
                {transitEvents.map((event, index) => {
                    const formattedDate = new Date(event.timestamp).toLocaleString()
                    const dateAndTime = formattedDate.split(",");
                    const date = dateAndTime[1];
                    const time = dateAndTime[0];
                    return < tr key={index} >
                        <td className="border px-4 py-2">{event.hub ?? "Nasr City"}</td>
                        <td className="border px-4 py-2">{date}</td>
                        <td className="border px-4 py-2">{time}</td>
                        <td className="border px-4 py-2"  >{event.state}</td>

                    </tr>
                })}
            </tbody>
        </table>
    </section >

}

export default ShippmentDetailsTable