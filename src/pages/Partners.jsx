// general imports
import Navbar from '@components/sections/common-sections/Navbar';
import FooterSection from '@components/sections/common-sections/FooterSection';

// specific imports
// import HeroSection from '@components/sections/join-us-sections/HeroSection';


import { useEffect } from 'react';

const Partners = () => {
    useEffect(() => {
        document.title = 'Partners | RoboTUM';
    }, []);

    return (
        <>
            <Navbar />
            {/* <HeroSection /> */}
            <FooterSection />
        </>
    );
}

export default Partners;