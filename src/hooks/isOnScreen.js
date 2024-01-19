import React, { useEffect, useState } from "react";

const isOnScreen = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const observer = new IntersectionObserver((([entry]) => {
    setIsVisible(entry.isIntersecting);
  }), {
    threshold: 0.5
  });

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isVisible;
};

export default isOnScreen