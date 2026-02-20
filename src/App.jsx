import React from 'react';
import Hero from './components/Hero';
import CurrentScenario from './components/CurrentScenario';
import Opportunities from './components/Opportunities';
import Strategy from './components/Strategy';
import Differentials from './components/Differentials';
import Closing from './components/Closing';

function App() {
    const [scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-brand-dark min-h-screen text-brand-light font-sans selection:bg-brand-orange selection:text-white pb-20">
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 h-1.5 bg-brand-orange z-50 transition-all duration-100 ease-out shadow-[0_0_15px_rgba(255,102,0,0.8)]" style={{ width: `${scrollProgress * 100}%` }}></div>

            <Hero />
            <CurrentScenario />
            <Opportunities />
            <Strategy />
            <Differentials />
            <Closing />
        </div>
    );
}

export default App;
