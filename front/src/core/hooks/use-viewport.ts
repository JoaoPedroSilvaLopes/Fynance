import { useState, useEffect } from 'react'

type Output = {
  width: number
  height: number
}

const getDimensions = (): Output => {
  const { innerWidth: width, innerHeight: height } = window

  return {
    width, 
    height
  }
}

export const useViewport = (): Output => {
  const [dimensions, setDimensions] = useState(getDimensions())

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return dimensions
}
