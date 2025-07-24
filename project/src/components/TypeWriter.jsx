import React, { useState, useEffect } from 'react';

function TypeWriter({ text, delay = 100, infinite = false }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (infinite) {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, infinite, text]);

  return (
    <span className="inline">
      {currentText}
      <span className={`inline-block w-0.5 h-8 bg-purple-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
}

export default TypeWriter;