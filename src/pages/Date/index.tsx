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
    <div className="mt-10">
      <h2 className="text-red-600 font-bold">Duration Calculator</h2>
      <div>
        <label>From Date:</label>
        <input type="datetime-local" onChange={handleFromDateChange} />
      </div>
      <div>
        <label>Duration (in hours):</label>
        <input type="number" value={duration} onChange={handleDurationChange} />
      </div>
      <div>
        <label>To Date:</label>
        <input type="text" value={toDate} readOnly />
      </div>
    </div>
  );
};

export default Date;
