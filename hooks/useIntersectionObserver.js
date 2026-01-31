'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for Intersection Observer
 * Detects when an element enters the viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useIntersectionObserver(options = {}) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const defaultOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
            ...options,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing (animation runs once)
                    observer.unobserve(entry.target);
                }
            });
        }, defaultOptions);

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options.threshold, options.rootMargin]);

    return [elementRef, isVisible];
}
