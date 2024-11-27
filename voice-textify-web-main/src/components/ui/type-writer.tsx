import { useState, useEffect, FC } from "react";

type TypeWriterProps = {
  text: string;
  speed?: number;
};

export const TypeWriter: FC<TypeWriterProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="w-full bg-white shadow-lg rounded-lg border border-gray-300 p-6 text-center transition-all duration-300 ease-in-out transform hover:scale-105">
      <p className="max-w-xl text-gray-800 text-base leading-relaxed">
        {displayedText}
      </p>
    </div>
  );
};
