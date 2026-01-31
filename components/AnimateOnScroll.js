'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

/**
 * AnimateOnScroll component - Wrapper for scroll-triggered animations
 * Replaces AOS (Animate On Scroll) library with pure CSS animations
 * 
 * @param {string} animation - Animation type: 'fade-up', 'fade-in', 'slide-left', 'slide-right'
 * @param {number} delay - Animation delay in ms (0, 100, 200, 300)
 * @param {ReactNode} children - Child elements to animate
 */
export default function AnimateOnScroll({
    animation = 'fade-up',
    delay = 0,
    children
}) {
    const [ref, isVisible] = useIntersectionObserver();

    // Map delay to CSS class
    const delayClass = delay > 0 ? `delay-${delay}` : '';

    return (
        <div
            ref={ref}
            className={`animate-on-scroll ${animation} ${delayClass} ${isVisible ? 'animate-visible' : ''
                }`}
        >
            {children}
        </div>
    );
}
