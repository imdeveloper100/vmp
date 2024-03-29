import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDeviceType = () => {
            // Default to mobile if window is undefined (e.g., SSR)
            const mobileWidth = 768;
            const screenWidth = window.innerWidth;
            setIsMobile(screenWidth < mobileWidth);
        };

        // Check on mount
        checkDeviceType();

        // Add event listener for window resize
        window.addEventListener('resize', checkDeviceType);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', checkDeviceType);
    }, []);

    return { isMobile };
};

export default useDeviceDetect;