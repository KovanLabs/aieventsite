"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

    useEffect(() => {
        // Set target date to October 2, 2025
        const targetDate = new Date("2025-10-02T00:00:00");

        const updateTimer = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );

            setTimeLeft({ days, hours, minutes });
        };

        // Run immediately and then every minute
        updateTimer();
        const timer = setInterval(updateTimer, 60000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
            <div className="flex flex-col items-center">
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg w-24 md:w-32 h-24 md:h-32 flex items-center justify-center shadow-[0_0_15px_rgba(64,255,170,0.2)]">
                    <span className="text-[#40ffaa] text-4xl md:text-5xl font-bold">{timeLeft.days}</span>
                </div>
                <span className="text-white/80 mt-2">days</span>
            </div>

            <div className="flex flex-col items-center">
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg w-24 md:w-32 h-24 md:h-32 flex items-center justify-center shadow-[0_0_15px_rgba(64,255,170,0.2)]">
                    <span className="text-[#40ffaa] text-4xl md:text-5xl font-bold">{timeLeft.hours}</span>
                </div>
                <span className="text-white/80 mt-2">hours</span>
            </div>

            <div className="flex flex-col items-center">
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg w-24 md:w-32 h-24 md:h-32 flex items-center justify-center shadow-[0_0_15px_rgba(64,255,170,0.2)]">
                    <span className="text-[#40ffaa] text-4xl md:text-5xl font-bold">{timeLeft.minutes}</span>
                </div>
                <span className="text-white/80 mt-2">minutes</span>
            </div>
        </div>
    );
};

export default Countdown;