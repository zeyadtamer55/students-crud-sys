function StudentDefaultMode({ student }) {
  
  const inputs = Object.keys(student).filter(
    (input) =>
      input != "tableData" &&
      !input.includes("-day") &&
      !input.includes("-month") 
  );
  
  const pStyles = {
    color: "var(--mainColor)",
    display: "inline-block",
    fontSize: "1em",
    marginLeft: "5px",
  };

  const studentInfoJsx = inputs.map((input, index) => {
    const inputName = input.split("-").join(" ");
    const inputValue = student[input];

    return (
      <div key={index}>
        {inputName}:<p style={pStyles}>{inputValue}</p>
      </div>
    );
  });


  return <>{studentInfoJsx}</>;
}
export default StudentDefaultMode;
