import React, { useState } from "react";
import Toggle from "react-toggle";

export default function Theme() {
    const [theme, setTheme] = useState('light');
    // The function that toggles between themes
const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

    return (
        //     <Toggle
        //     className="dark-mode-toggle"
        //     checked={isDark}
        //     onChange={({ target }) => setIsDark(target.checked)}
        //     icons={{ checked: "🌙", unchecked: "🔆" }}
        //     aria-label="Dark mode toggle"
        //   />
        <div className="flex items-center space-x-2 py-1 mt-4">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer" />
                <label for="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
            <label for="toggle" className="">{theme}</label>
        </div>
    )

}