import { T } from "@tolgee/react"
import './VideoSection.css'

function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="video-container">
        {/* <div className="video-header"> */}
          {/* <h2 className="section-title">
            <T keyName="video.title">Video promocional</T>
          </h2> */}
          {/* <p className="section-description">
            <T keyName="video.subtitle">Mira este breve video para entender cómo usar la herramienta</T>
          </p> */}
        {/* </div> */}
        <div className="video-wrapper">
          <iframe 
          width="560" height="315" 
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