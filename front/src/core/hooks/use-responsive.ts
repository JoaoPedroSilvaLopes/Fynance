import { useState, useLayoutEffect } from 'react'

import { breakpoints } from '../configs'
import { useViewport } from './use-viewport'

type Output = {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export const useResponsive = (): Output => {
  const { width } = useViewport()

  const responsiveStates = {
    isMobile: width < breakpoints.mobile,
    isTablet: width >= breakpoints.tablet && width < breakpoints.desktop,
    isDesktop: width >= breakpoints.desktop
  }

  const [isMobile, setIsMobile] = useState(responsiveStates.isMobile)
  const [isTablet, setIsTablet] = useState(responsiveStates.isTablet)
  const [isDesktop, setIsDesktop] = useState(responsiveStates.isDesktop)

  useLayoutEffect(() => {
    setIsMobile(responsiveStates.isMobile)
    setIsTablet(responsiveStates.isTablet)
    setIsDesktop(responsiveStates.isDesktop)
  }, [width])

  return {
    isMobile,
    isTablet,
    isDesktop
  }
}
