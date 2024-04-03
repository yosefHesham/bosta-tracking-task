import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const mapCurrentStateToStage = (currentState, lastEvent) => {
    switch (currentState) {
        case "TICKET_CREATED":
            return {
                color: 'bg-green-500',
                stage: "Ticket Created",
                position: 0,
            }
        case "PACKAGE_RECIEVED":
        case "NOT_YET_SHIPPED":
            return {
                color: 'bg-green-500',
                stage: "Package Recieved",
                position: 1,

            }
        case "OUT_FOR_DELIVERY":
        case "WAITING_FOR_CUSTOMER_ACTION":
        case "IN_TRANSIT":
            return {
                color: 'bg-green-500',
                stage: "Out For Delivery",
                position: 2,

            }
        case "CANCELLED":
            switch (lastEvent) {
                case "TICKET_CREATED":
                    return {
                        color: 'bg-red-500',
                        stage: "Ticket Created",
                        message: "Shippment has been cancelled",
                        position: 1,

                    }
                case "PACKAGE_RECIEVED":
                    return {
                        color: 'bg-red-500',
                        stage: "Package Recieved",
                        message: "Shippment has been cancelled",
                        position: 1,
                    }
                case "OUT_FOR_DELIVERY":
                    return {
                        color: 'bg-red-500',
                        stage: "Out For Delivery",
                        message: "Shippment has been cancelled",
                        position: 2
                    }
            }

        case "DELIVERED_TO_SENDER":
            return {
                color: 'bg-yellow-500',
                stage: "Out For Delivery",
                message: "Customer did not recieve",
                position: 2
            }
        case "DELIVERED":
            return {
                color: "bg-green-500",
                stage: "Delivered",
                position: 3
            }

    }
}
const steps = [{
    label: "Ticket Created",
    icon: <FontAwesomeIcon icon="fa-solid fa-square-plus" />
},
{
    label: "Package Recieved",
    icon: <FontAwesomeIcon icon="fa-solid fa-box" />
},
{
    label: "Package Out For Delivery",
    icon: <FontAwesomeIcon icon="fa-solid fa-truck-fast" />
},
{
    label: "Delivered",
    icon: <FontAwesomeIcon icon="fa-solid fa-file" />
}
]

const ShippmentTimeLine = ({ state, lastEvent }) => {
    const currentStage = mapCurrentStateToStage(state, lastEvent)

    return (
        <div>
            <div className="flex justify-between items-center px-5">
                {steps.map((step, index) => (
                    <>
                        <div key={index} className="step">

                            <div className={`step-circle ${index <= currentStage.position ? currentStage.color : ' bg-gray-400'}`}>{currentStage.position > index || currentStage.stage === "Delivered" ? <FontAwesomeIcon icon="fa-solid fa-check" /> : step.icon}</div>

                        </div>
                        {index !== steps.length - 1 && <div className={`horizontal-line ${index < currentStage.position && currentStage.position ? currentStage.color : 'bg-gray-500'}`}></div>}

                    </>

                ))}
            </div>
            <div className='flex justify-between px-3'>
                {steps.map((step, index) => (
                    <>
                        <div key={index} className="step">

                            <div >{step.label}</div>
                            {currentStage.message && currentStage.position == index && <div className="text-sm text-wrap text-red-600">{currentStage.message} </div>}


                        </div>


                    </>

                ))}
            </div>

        </div>

    );
}

export default ShippmentTimeLine