"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercentage = (scrollTop / docHeight) * 100
            setProgress(scrollPercentage)
        }

        window.addEventListener("scroll", updateProgress)
        return () => window.removeEventListener("scroll", updateProgress)
    }, [])

    return (
        <div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent z-[9999] transition-all duration-150"
            style={{ width: `${progress}%` }}
        />
    )
}
