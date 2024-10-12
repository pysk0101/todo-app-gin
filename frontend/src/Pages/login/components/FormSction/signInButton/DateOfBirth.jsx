import { useEffect, useState } from "react";
import useDetailsStore from "../../../../../Store/userDetailsStore";

const DateOfBirth = () => {
  const { setDateOfBirth } = useDetailsStore();
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const thirteenYearsAgo = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate()
    );

    const formattedDate = thirteenYearsAgo.toISOString().split("T")[0];
    setMaxDate(formattedDate);
  }, []);

  const dateHandleClick = (e) => {
    const newValue = e.target.value;
    setDateOfBirth(newValue);
  };

  return (
    <li className="flex flex-col justify-center col-span-1 max-[700px]:col-start-1 max-[700px]:col-end-3">
      <label htmlFor="date">Date of Birth</label>
      <div>
        <input
          className="text-3xl"
          type="date"
          onChange={dateHandleClick}
          max={maxDate}
        />
      </div>
    </li>
  );
};

export default DateOfBirth;
