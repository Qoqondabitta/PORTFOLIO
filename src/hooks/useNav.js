import React, { useContext, useEffect, useRef } from "react";
import { NavContext } from "../context/navContext";
import isOnScreen from "./isOnScreen";

const useNav = (navLinkId) => {
  const ref = useRef(null);

  const { setActiveLinkId } = useContext(NavContext);

  const isVisible = isOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setActiveLinkId(navLinkId);
    }
  }, [isVisible, setActiveLinkId, navLinkId]);

  return ref;
};

export default useNav