import React, { useState, useEffect } from "react";
import './style.css';
import { EventWorksCard } from "../Cards";
import { eventCardInfo } from "../../constant/group";

const EventWorks = () => {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1007);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleToggle = () => {
        setShowAll(!showAll);
    };
    const visibleCards = isMobile && !showAll ? eventCardInfo.slice(0, 3) : eventCardInfo;
    return (
        <div className="wapper">
            <div className="container">
                <div className="section" style={{ textAlign: 'center' }}>
                    <div className="sectionHeader">
                        <p className="sectionTitle">
                            C какими событиями мы работаем
                        </p>
                    </div>
                    <div className="flexWrapAround">
                        {visibleCards.map((item, index) => (
                            <EventWorksCard key={index} item={item} />
                        ))}
                    </div>
                    {isMobile && (
                        <button className="toggleButton" onClick={handleToggle}>
                            {showAll ? "скрыть больше" : "cмотреть ещё"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventWorks;
