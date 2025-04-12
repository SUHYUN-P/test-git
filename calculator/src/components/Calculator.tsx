'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type EmotionType = {
  emoji: string;
  message: string;
};

// 버튼 애니메이션 variants 정의
const buttonVariants = {
  tap: { scale: 0.95 },
  hover: { scale: 1.05 }
};

// 감정 애니메이션 variants 정의
const emotionVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 }
};

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [emotion, setEmotion] = useState<EmotionType>({ emoji: '🤔', message: '계산할 준비가 되었어요!' });

  const getEmotion = (result: number): EmotionType => {
    if (result < 0) return { emoji: '😢', message: '음수네요... 슬퍼요' };
    if (result === 0) return { emoji: '😴', message: '0이에요... 나른하네요' };
    if (result > 9999) return { emoji: '😱', message: '엄청 큰 숫자예요!' };
    if (Math.sqrt(result) % 1 === 0) return { emoji: '😊', message: '완벽한 제곱수예요!' };
    return { emoji: '😌', message: '좋은 결과네요!' };
  };

  const handleNumber = (num: string) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const handleOperation = (op: string) => {
    setPreviousValue(display);
    setOperation(op);
    setDisplay('0');
  };

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setEmotion({ emoji: '🤔', message: '계산할 준비가 되었어요!' });
  };

  const handleDelete = () => {
    setDisplay(display.length === 1 ? '0' : display.slice(0, -1));
  };

  const calculate = () => {
    if (!previousValue || !operation) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        result = prev / current;
        break;
    }

    const newEmotion = getEmotion(result);
    setEmotion(newEmotion);
    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  // 버튼 컴포넌트
  const CalculatorButton = ({ 
    onClick, 
    className, 
    children,
    colSpan = false 
  }: { 
    onClick: () => void, 
    className: string, 
    children: React.ReactNode,
    colSpan?: boolean 
  }) => (
    <motion.button
      onClick={onClick}
      className={`${className} ${colSpan ? 'col-span-2' : ''}`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xs">
      <motion.div 
        className="mb-4 text-center"
        key={emotion.emoji}
        variants={emotionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="text-4xl mb-2">{emotion.emoji}</div>
        <div className="text-sm text-gray-600">{emotion.message}</div>
      </motion.div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div className="text-right text-3xl font-semibold text-gray-800">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <CalculatorButton
          onClick={handleClear}
          className="p-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
          colSpan={true}
        >
          AC
        </CalculatorButton>
        <CalculatorButton
          onClick={handleDelete}
          className="p-4 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
        >
          DEL
        </CalculatorButton>
        <CalculatorButton
          onClick={() => handleOperation('÷')}
          className="p-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          ÷
        </CalculatorButton>
        
        {[7, 8, 9].map((num) => (
          <CalculatorButton
            key={num}
            onClick={() => handleNumber(num.toString())}
            className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            {num}
          </CalculatorButton>
        ))}
        <CalculatorButton
          onClick={() => handleOperation('×')}
          className="p-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          ×
        </CalculatorButton>
        
        {[4, 5, 6].map((num) => (
          <CalculatorButton
            key={num}
            onClick={() => handleNumber(num.toString())}
            className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            {num}
          </CalculatorButton>
        ))}
        <CalculatorButton
          onClick={() => handleOperation('-')}
          className="p-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          -
        </CalculatorButton>
        
        {[1, 2, 3].map((num) => (
          <CalculatorButton
            key={num}
            onClick={() => handleNumber(num.toString())}
            className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            {num}
          </CalculatorButton>
        ))}
        <CalculatorButton
          onClick={() => handleOperation('+')}
          className="p-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          +
        </CalculatorButton>
        
        <CalculatorButton
          onClick={() => handleNumber('0')}
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
          colSpan={true}
        >
          0
        </CalculatorButton>
        <CalculatorButton
          onClick={handleDecimal}
          className="p-4 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          .
        </CalculatorButton>
        <CalculatorButton
          onClick={calculate}
          className="p-4 text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          =
        </CalculatorButton>
      </div>
    </div>
  );
};

export default Calculator; 