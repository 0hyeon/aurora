const Label = ({ value, errorMessage }: any) => {
  return (
    <div>
      <div>{value}</div>
      <div>{errorMessage}</div>
    </div>
  );
};

export default Label;
