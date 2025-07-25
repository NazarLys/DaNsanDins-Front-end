import React, { useEffect, useRef } from "react";

function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = e.clientX + "px";
                cursorRef.current.style.top = e.clientY + "px";
            }
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener ("mousemove", moveCursor);
    }, []);
    
    return (
        <div ref={cursorRef} style={{ position:"fixed", left:0, top:0, width:"32px", height:"32px", borderRadius:"50%", pointerEvents:"none", zIndex:9999, mixBlendMode:"difference", transform:"translate(-50%, -50%) scaleX(-1)", transition:"transform 0.15s, background 0.2s", willChange:"left,top, transform, background"}}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="75.02" y="102.75" width="33.96" height="122.49" rx="8.01" transform="translate(-89.02 113.09) rotate(-45)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="96" x2="104" y2="152" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M68,164,34.34,197.66a8,8,0,0,0,0,11.31L47,221.66a8,8,0,0,0,11.32,0L92,188" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="82.44 130.43 152 40 216 40 216 104 125.57 173.56" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg> 
        </div>
    )
}

export default Cursor;