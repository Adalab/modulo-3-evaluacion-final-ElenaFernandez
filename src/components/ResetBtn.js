function ResetBtn(props) {
  const handleBtn = (event) => {
    event.preventDefault();
    props.resetBtn();
  };

  return <button onClick={handleBtn}>Reset</button>;
};

export default ResetBtn;
