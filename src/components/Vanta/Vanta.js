import React,{useState,useEffect,useRef} from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const Vanta = () => {

    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                THREE: THREE,
                color: 0xe1ff00,
                backgroundColor: 0x9c9cd9,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    },[vantaEffect]);

    return (
        <div ref={myRef} className="vanta">
            
        </div>
    );
};

export default Vanta;