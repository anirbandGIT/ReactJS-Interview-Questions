import React, { useRef } from "react";

const useCountRenders = (componentName) => {
  const renderRef = useRef(0);
  console.log(`RENDERS ${componentName} -> `, renderRef.current++);
};

export default useCountRenders;
