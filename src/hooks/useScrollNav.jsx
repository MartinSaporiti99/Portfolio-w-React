import { useState, useEffect } from "react";

export function useScrollNav() {
  const [navState, setNavState] = useState({ hidden: false, scrolled: false });
  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setNavState({ hidden: y > last && y > 50, scrolled: y > 0 });
      last = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return navState;
}
