const JsonDisplay = ({ jsonData }) => {
  const jsonString = JSON.stringify(jsonData, null, 2); // Use null and 2 for indentation

  return <pre>{jsonString}</pre>;
};

export default JsonDisplay;
