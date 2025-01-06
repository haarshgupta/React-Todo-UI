function BharatTime() {
  let bharatTime = "10:38:17AM";

  let presentDate = new Date();
  function PresentBharatDate() {
    console.log(presentDate);
    console.log(presentDate.getTime());
    const year = String(presentDate.getFullYear());
    const month = String(presentDate.getMonth() + 1).padStart(2, "0");
    const date = String(presentDate.getDate()).padStart(2, "0");


    return `${year}/${month}/${date}`;
  }

  {/* for date toLocaleDateString(); */}
  return (
    <h2 className="lead fontContent">
      This is the current time:{PresentBharatDate()} - {presentDate.toLocaleTimeString()}
    </h2>
  );
}

export default BharatTime;
