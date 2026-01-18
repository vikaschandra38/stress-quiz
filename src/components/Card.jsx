const Card = ({ children }) => {
  return (
    <div className="font-archivo bg-white w-full rounded-lg shadow-2xl p-4 md:p-8 animate-fadeIn min-h-auto flex flex-col justify-start">
      {children}
    </div>
  );
};

export default Card;
