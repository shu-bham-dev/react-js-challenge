import React, { useState } from "react";
import moment from "moment";

const Date = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleFromDateChange = (event: any) => {
    const selectedDate = event.target.value;
    setFromDate(selectedDate);
    calculateToDate(selectedDate, duration);
  };

  const handleDurationChange = (event: any) => {
    const selectedDuration = event.target.value;
    setDuration(selectedDuration);
    calculateToDate(fromDate, selectedDuration);
  };

  const calculateToDate = (startDate: any, duration: any) => {
    if (startDate && duration) {
      const endDate = moment(startDate)
        .add(duration, "hours")
        .format("MM-DD-YYYY hh:mm A");
      setToDate(endDate);
      setToDate(endDate);
    } else {
      setToDate("");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-80 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-3xl mb-4 text-white font-bold">
          Duration Calculator
        </h2>
        <div className="mt-4">
          <label className="block text-gray-400">From Date:</label>
          <input
            type="datetime-local"
            className="w-full border border-gray-400 rounded-md p-2 bg-gray-700 text-white"
            onChange={handleFromDateChange}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-400">Duration (in hours):</label>
          <input
            type="number"
            value={duration}
            className="w-full border border-gray-400 rounded-md p-2 bg-gray-700 text-white"
            onChange={handleDurationChange}
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-400">To Date:</label>
          <input
            type="text"
            value={toDate}
            readOnly
            className="w-full border border-gray-400 rounded-md p-2 bg-gray-700 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Date;
