import React, { useEffect } from "react";

function OnlyClientSide({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && children;
}

export default OnlyClientSide;
