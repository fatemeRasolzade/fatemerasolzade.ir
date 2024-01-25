const TransitionText = ({ text, wrapperClassName }) => {
  const splitedText = text.split("");
  return (
    <p className={`text-6xl sm:text-5xl font-semibold select-none flex  ${wrapperClassName}`}>
      {splitedText.map((item) => (
        <span className={`icon-transition block ${item === " " ? "w-3" : ""}`}>{item}</span>
      ))}
    </p>
  );
};

export default TransitionText;
