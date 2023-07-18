import React from 'react';
import {useState, useEffect} from 'react';
import Accordion from "../utils/Accordion";
import AddressPicker from "./AddressPicker";
import FormPopup from "./FormPopup";

function ShipmentForm() {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [isSent, setIsSent] = React.useState(false);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [estimatedWeight, setEstimatedWeight] = React.useState(30000);
    const [additionalInfo, setAdditionalInfo] = React.useState('');

    const [pickupDate, setPickupDate] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');

    const [pickupAddress, setPickupAddress] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');

    const [motorTypes, setMotorTypes] = useState([]);
    const [loadTypes, setLoadTypes] = useState([]);

    const [selectedMotorType, setSelectedMotorType] = useState('');
    const [selectedLoadType, setSelectedLoadType] = useState('');

    useEffect(() => {
        fetchMotorTypes();
        fetchLoadTypes();
    }, []);

    const fetchMotorTypes = async () => {
        try {
            const response = await fetch('http://localhost:8080/v1/motor-types');
            const data = await response.json();
            setMotorTypes(data.results);
        } catch (error) {
            console.error('Error fetching motor types:', error);
        }
    };

    const fetchLoadTypes = async () => {
        try {
            const response = await fetch('http://localhost:8080/v1/load-types');
            const data = await response.json();
            setLoadTypes(data.results);
        } catch (error) {
            console.error('Error fetching motor types:', error);
        }
    };

    const handlePickupAddressChange = (latLng) => {
        setPickupAddress(latLng);
    };

    const handleDeliveryAddressChange = (latLng) => {
        setDeliveryAddress(latLng);
    };


    const handlePickupDateChange = (event) => {
        setPickupDate(event.target.value);
    };

    const handleDeliveryDateChange = (event) => {
        setDeliveryDate(event.target.value);
    };

    const currentDate = new Date().toISOString().split('T')[0];


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            name,
            email,
            phone,
            estimatedWeight,
            pickupDate,
            pickupDateTime: pickupDate,
            deliveryDateTime: deliveryDate,
            pickupAddress,
            deliveryAddress,
            loadType: selectedLoadType,
            motorType: selectedMotorType,
        };

        postShipment(data).then((res) => {
            if (res.ok === true || res.status === 201) {
                setIsSent(true);
                resetForm();
                setLoading(false);
            } else {
                setError(true);
                setIsSent(false);
                setLoading(false);
            }
        });
    }

    const postShipment = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/v1/shipments', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });
            return response;
        } catch (error) {
            return error;
        }
    }

    const resetForm = () => {
        setPickupDate('');
        setDeliveryDate('');
        setPickupAddress('');
        setDeliveryAddress('');
        setSelectedMotorType('');
        setSelectedLoadType('');
        setName('');
        setEmail('');
        setPhone('');
        setEstimatedWeight(30000);
        setAdditionalInfo('');
    }

    return (
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <div className="flex justify-between items-center mb-1">
                        <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                               htmlFor="name">First name</label>
                        <span className="text-sm text-gray-500">Optional</span>
                    </div>
                    <input id="first-name" name="first-name" type="text" className="form-input w-full" value={name}
                           onChange={e => setName(e.target.value)}
                           placeholder="Enter your first name"/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" htmlFor="phone">Phone
                        Number <span className="text-red-600">*</span></label>
                    <input id="phone" name="phone" type="tel" className="form-input w-full" value={phone}
                           onChange={e => setPhone(e.target.value)}
                           placeholder="Enter your phone number" required/>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full px-3">
                    <div className="flex justify-between items-center mb-1">
                        <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                               htmlFor="estimatedWeight">Estimated
                            weight</label>
                        <span className="text-sm text-gray-500">Optional</span>
                    </div>
                    <span className="text-gray-600 font-bold dark:text-white">{estimatedWeight} lbs</span>
                    <input
                        className="form-range w-full"
                        type="range"
                        id="estimatedWeight"
                        name="estimatedWeight"
                        value={estimatedWeight} // Set the current value of the range slider
                        onChange={(e) => setEstimatedWeight(Number(e.target.value))} // Handle the change event of the range slider
                        min={0}
                        max={60000}
                        step={1000}
                    />
                </div>
            </div>

            <ul>
                <Accordion title="Add more details">

                    <div>
                        <AddressPicker label="Pickup Address" onSelectAddress={handlePickupAddressChange}/>
                        <AddressPicker label="Delivery Address" onSelectAddress={handleDeliveryAddressChange}/>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium">Pickup
                                Date:</label>
                            <input
                                type="date"
                                className="form-input w-full"
                                value={pickupDate}
                                onChange={handlePickupDateChange}
                                min={currentDate}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium">Delivery
                                Date:</label>
                            <input
                                type="date"
                                className="form-input w-full"
                                value={deliveryDate}
                                onChange={handleDeliveryDateChange}
                                min={pickupDate}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                                   htmlFor="motorType">Select truck type</label>
                            <span className="text-sm text-gray-500">Optional</span>
                        </div>
                        <select id="motorType" className="form-select w-full"
                                value={selectedMotorType} onChange={(e) => setSelectedMotorType(e.target.value)}
                        >
                            <option value="">Select Motor Type</option>
                            {motorTypes && motorTypes.length && motorTypes.map((motorType) => (
                                <option key={motorType.id} value={motorType.id}>
                                    {motorType.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                                   htmlFor="loadType">Select load type</label>
                            <span className="text-sm text-gray-500">Optional</span>
                        </div>
                        <select id="loadType" className="form-select w-full" value={selectedLoadType}
                                onChange={(e) => setSelectedLoadType(e.target.value)}>
                            <option value="">Select Load Type</option>
                            {loadTypes && loadTypes.length && loadTypes.map((loadType) => (
                                <option key={loadType.id} value={loadType.id}>
                                    {loadType.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full w-full mb-4">
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                                   htmlFor="email">Email</label>
                            <span className="text-sm text-gray-500">Optional</span>
                        </div>
                        <input id="email" name="email" type="email" className="form-input w-full" value={email}
                               onChange={e => setEmail(e.target.value)}
                               placeholder="Enter your email"/>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-5">
                        <div className="w-full px-3">
                            <div className="flex justify-between items-center mb-1">
                                <label className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                                       htmlFor="additionalInfo">Details</label>
                                <span className="text-sm text-gray-500">Optional</span>
                            </div>
                            <textarea id="additionalInfo" name="additionalInfo" rows="4"
                                      className="form-textarea w-full"
                                      value={additionalInfo} onChange={e => setAdditionalInfo(e.target.value)}
                                      placeholder="What do you want to build with Appy?"></textarea>
                        </div>
                    </div>
                </Accordion>
            </ul>


            <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                    <button type="submit"
                            className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center">
                        <span>{
                            loading ? <span className="inline-block animate-spin h-4 w-4 rounded-full border-2 border-white" /> : 'send'
                        }</span>
                        <svg className="w-3 h-3 shrink-0 mt-px ml-2" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                            <path className="fill-current"
                                  d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <FormPopup isOpen={isSent} onClose={() => setIsSent(false)} mainText="Thank you for submitting the form!"
                       subText="Form received! Our contact center will reach out to you shortly."/>
            <FormPopup isOpen={error} onClose={() => setError(false)} mainText="Something went wrong :("
                       subText="Please try again later or contact support for assistance."/>
        </form>
    );
}

export default ShipmentForm;