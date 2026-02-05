import { useState, useEffect } from 'react'
import './LoadingScreen.css'

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="loading-logo-container">
                <img
                    src="/reverseLogo.svg"
                    alt="Electómetro"
                    className="loading-logo"
                />
                <div className="loading-spinner-ring"></div>
            </div>
        </div>
    )
}

export function LoadingWrapper({ children, minDelay = 500 }) {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), minDelay)
        return () => clearTimeout(timer)
    }, [minDelay])

    if (!showContent) {
        return <LoadingScreen />
    }

    return children
}

export default LoadingScreen
