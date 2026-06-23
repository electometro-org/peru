import { useEffect } from 'react'
import Volunteering from '../components/Volunteering'
import { useLoading } from '../components/LoadingScreen'

function VolunteeringPage() {
  const { setCarouselReady } = useLoading()

  useEffect(() => {
    setCarouselReady(true)
  }, [setCarouselReady])

  return (
    <div style={{ paddingTop: '80px' }}>
      <Volunteering />
    </div>
  )
}

export default VolunteeringPage
