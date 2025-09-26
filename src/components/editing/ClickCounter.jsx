function ClickCounter(props) {
  const { setCounter } = props;
  const ClickCouner = () => {
    setCounter((previousValue) => previousValue + 1);
    console.log("Clicked!");
  };
  return <button onClick={ClickCouner}>Send</button>;
}
export default ClickCounter;
