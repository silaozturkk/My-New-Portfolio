'use client';
import { useEffect, useState } from "react";

export default function TestDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // HTML elementinin class'ını kontrol et
    const checkDarkMode = () => {
      const htmlClass = document.documentElement.className;
      console.log('HTML class:', htmlClass);
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    
    // MutationObserver ile class değişikliklerini izle
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Dark Mode Test
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Current mode: {isDark ? 'Dark' : 'Light'}
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          HTML classes: {typeof window !== 'undefined' ? document.documentElement.className : 'Loading...'}
        </p>
        <button
          onClick={toggleDark}
          className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Toggle Dark Mode
        </button>
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
          <p className="text-gray-800 dark:text-gray-200">
            This box should change background in dark mode
          </p>
        </div>
      </div>
    </div>
  );
}
