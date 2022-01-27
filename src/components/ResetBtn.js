function ResetBtn(props) {
  const handleBtn = (event) => {
    event.preventDefault();
    props.resetBtn();
  };

  return <button onClick={handleBtn} className="btn-reset">Reset</button>;
};

export default ResetBtn;
