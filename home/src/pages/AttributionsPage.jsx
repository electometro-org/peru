import { useEffect } from 'react'
import Attributions from '../components/Attributions'
import { useLoading } from '../components/LoadingScreen'

function AttributionsPage() {
  const { setCarouselReady } = useLoading()

  useEffect(() => {
    setCarouselReady(true)
  }, [setCarouselReady])

  return (
    <div style={{ paddingTop: '80px' }}>
      <Attributions />
    </div>
  )
}

export default AttributionsPage
