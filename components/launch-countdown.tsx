"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export function LaunchCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        // Set launch date to Q2 2025 (June 1, 2025)
        const launchDate = new Date("2025-06-01T00:00:00").getTime()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const distance = launchDate - now

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                })
            }
        }

        updateCountdown()
        const timer = setInterval(updateCountdown, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="inline-flex flex-col items-center gap-3 p-6 rounded-sm border border-accent/30 bg-accent/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Clock className="h-4 w-4 text-accent" />
                <span>Launch Countdown</span>
            </div>
            <div className="flex gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center">
                        <div className="w-16 h-16 flex items-center justify-center rounded-sm bg-background border border-accent/20 shadow-lg">
                            <span className="text-2xl font-display font-bold text-accent">
                                {value.toString().padStart(2, "0")}
                            </span>
                        </div>
                        <span className="text-xs text-muted-foreground mt-2 capitalize">{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
