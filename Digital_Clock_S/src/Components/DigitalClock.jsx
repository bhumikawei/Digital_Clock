import { useEffect, useState } from "react"

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {clearInterval(interval)};
  }, []);

  const formatUI = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return{
      hours: hours.split(""),
      minutes: minutes.split(""),
      seconds: seconds.split(""),
    }
  }

  const formatUIDigits = formatUI(time);

  return(
    <>
    <div className="flip-clock-container d-flex justify-content-center align-items-center vh-100">

      <div className="flip-clock">

        {formatUIDigits.hours.map((num, i) => 
          <div className="panel" key={i}><span className='number' key={`hours${i}`}>{num}</span></div>
        )}

        <div className="separator">:</div>

        {formatUIDigits.minutes.map((num, i) => 
          <div className="panel" key={i}><span className='number' key={`minutes${i}`}>{num}</span></div>
        )}

        <div className="separator">:</div>

        {formatUIDigits.seconds.map((num, i) => 
          <div className="panel" key={i}><span className='number' key={`seconds${i}`}>{num}</span></div>
        )}

      </div>
      
    </div>
    </>
  )
}

export default DigitalClock