import { T } from "@tolgee/react"
import './VideoSection.css'

function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="video-container">
        <div className="video-wrapper">
          <iframe 
          width="420" height="236" 
          src="https://www.youtube.com/embed/9lctWHsdpi0?si=HnJmOAKAAkyFi48o" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoSection