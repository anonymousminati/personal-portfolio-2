export const preloadResources = async (): Promise<void> => {
  const promises: Promise<unknown>[] = []

  // Preload critical images
  const imageUrls = [
    '/ProfileImage.jpg',
    // Add any other critical images here
  ]

  imageUrls.forEach(url => {
    promises.push(
      new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = url
      })
    )
  })

  // Preload critical fonts
  const fontPromises = [
    document.fonts.load('400 1em system-ui'),
    document.fonts.load('500 1em system-ui'),
    document.fonts.load('600 1em system-ui'),
    document.fonts.load('700 1em system-ui'),
  ]

  promises.push(...fontPromises)

  // Wait for all resources to load
  try {
    await Promise.allSettled(promises)
  } catch (error) {
    console.warn('Some resources failed to preload:', error)
  }
}

export const waitForReadyState = (): Promise<void> => {
  return new Promise((resolve) => {
    if (document.readyState === 'complete') {
      resolve()
    } else {
      const handleLoad = () => {
        resolve()
        window.removeEventListener('load', handleLoad)
      }
      window.addEventListener('load', handleLoad)
    }
  })
}
