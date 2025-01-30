import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateTime } from "luxon";
import "./App.css";
const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [age, setAge] = useState(null);
  const [ageDetails, setAgeDetails] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const birthDate = DateTime.fromJSDate(date);
      const today = DateTime.now();
      const diff = today.diff(birthDate, ["years", "months", "days", "hours"]);
      setAge(Math.floor(diff.years));
      setAgeDetails({
        years: Math.floor(diff.years),
        months: Math.floor(diff.months),
        days: Math.floor(diff.days),
        hours: Math.floor(diff.hours),
      });
    } else {
      setAge(null);
      setAgeDetails(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <label className="mb-2 text-lg font-semibold">
        Selecciona una fecha:
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="border rounded-lg p-2 text-center"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
      />
      {ageDetails && (
        <p className="mt-2 text-lg">
          Edad: {ageDetails.years} años, {ageDetails.months} meses,{" "}
          {ageDetails.days} días
        </p>
      )}
    </div>
  );
};

export default MyDatePicker;
