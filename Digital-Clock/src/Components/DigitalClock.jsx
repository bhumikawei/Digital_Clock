const DigitalClock = () => {
  return (
    <>
    <div className="flip-clock-container d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="flip-clock">
        {/* Hours */}
        <div className="panel"><span className="number">1</span></div>
        <div className="panel"><span className="number">0</span></div>

        {/* Separator */}
        <div className="separator">:</div>

        {/* Minutes */}
        <div className="panel"><span className="number">0</span></div>
        <div className="panel"><span className="number">0</span></div>

        {/* Separator */}
        <div className="separator">:</div>

        {/* Seconds */}
        <div className="panel"><span className="number">0</span></div>
        <div className="panel"><span className="number">0</span></div>
      </div>
    </div>

    </>
  )
}

export default DigitalClock