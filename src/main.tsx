import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import './index.css'

createInertiaApp({
  title: (title) => `${title} - Homzo`,
  resolve: async (name) => {
    // Only proceed if name is provided
    if (!name) {
      console.error('No page name provided. Inertia requires Laravel backend to render pages.')
      // Return a fallback component for development
      return () => React.createElement('div', { className: 'p-10 text-center' },
        React.createElement('h1', null, 'Inertia Setup Required'),
        React.createElement('p', null, 'This application requires Laravel + Inertia backend to serve pages.'),
        React.createElement('p', null, 'For local development, ensure Laravel is running and configured correctly.')
      )
    }

    const pages = import.meta.glob('./pages/**/*.tsx')
    const page = pages[`./pages/${name}.tsx`]

    if (!page) {
      console.error(`Page not found: ./pages/${name}.tsx`)
      return () => React.createElement('div', { className: 'p-10 text-center' },
        React.createElement('h1', null, '404 - Page Not Found'),
        React.createElement('p', null, `The page "${name}" could not be found.`)
      )
    }

    return (await page()).default
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
