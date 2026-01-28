'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] p-4 bg-[#ea580c] text-white rounded-full shadow-2xl hover:bg-[#c2410c] transition-all duration-300 animate-fade-in group"
                    aria-label="Subir al inicio"
                >
                    <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
