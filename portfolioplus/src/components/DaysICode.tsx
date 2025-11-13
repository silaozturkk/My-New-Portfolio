'use client'

import GitHubCalendar from 'react-github-calendar'

const DaysICode = () => {
  const theme = {
    light: ['#fce4ec', '#f8bbd0', '#f48fb1', '#ec407a', '#d81b60'],
    dark: ['#2c2c2c', '#3a3a3a', '#ff77a9', '#ff3c7b', '#e6005a'],
  }

  return (
    <div className="text-center my-8 md:my-16 px-2 lg:px-0">
      <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-pink-600 via-pink-600 to-black bg-clip-text text-transparent">
        Days I Code
      </h2>
      <div className="flex justify-center">
        <GitHubCalendar
          username="silaozturkk"
          colorScheme="light"
          theme={theme}
          blockSize={14}
          blockMargin={5}
          fontSize={14}
        />
      </div>
    </div>
  )
}
export default DaysICode;