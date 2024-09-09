import React, { useRef } from 'react';

interface SwipeHandlerProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  children: React.ReactNode;
  swipeThreshold?: number;
  clickThreshold?: number;
}

const SwipeHandler: React.FC<SwipeHandlerProps> = ({
  onSwipeLeft,
  onSwipeRight,
  children,
  swipeThreshold = 50,
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Track touch start position
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Track touch move position
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Determine swipe or click
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;

      // Detect swipe
      if (Math.abs(distance) > swipeThreshold) {
        if (distance > 0) {
          onSwipeLeft();
        } else {
          onSwipeRight();
        }
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};

export default SwipeHandler;