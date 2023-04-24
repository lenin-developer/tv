import { useRef } from "react";

export const useSyncUpScroll = () => {
  var elmnt = document.getElementById("scrollevents");
  var elmnt2 = document.getElementById("scrollHrs");
  const evetScrollRef = useRef(elmnt);
  const hrScrollRef = useRef(elmnt2);

  const syncUpScroll = () => {
    // var elmnt = document.getElementById("myDIV");
    // var elmnt2 = document.getElementById("myDIV2");
    // let x = evetScrollRef?.current?.scrollLeft;
    // let y = evetScrollRef?.current?.scrollTop;
    // console.log(x);
    // console.log(y);
    // hrScrollRef?.current?.scrollLeft = x;
    // hrScrollRef?.current?.scrollTop = y;

    // console.log(elmnt.scrollLeft);
    // console.log(elmnt2.scrollLeft);

    var x = elmnt.scrollLeft;
    // var y = elmnt.scrollTop;
    elmnt2.scrollLeft = x;
    // hrScrollRef?.current = x;
    // console.log(hrScrollRef);
    // elmnt2.scrollTop = y;
  };

  const scrollevents = (ref) => {};

  return { evetScrollRef, hrScrollRef, syncUpScroll };
};
