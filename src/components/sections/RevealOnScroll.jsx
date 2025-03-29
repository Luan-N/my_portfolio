import { useEffect, useRef } from "react";

export const RevealOnScroll = ({children}) =>{
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                ref.current.classList.add("visible");
                observer.disconnect();
            }
        }, {rootMargin: "0px 0px -10% 0px"})

        if(ref.current) 
            observer.observe(ref.current)
    })

    return <div ref={ref} className="reveal"> {children} </div>
}