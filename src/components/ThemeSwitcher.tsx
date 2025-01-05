import { useTheme } from '../providers/ThemeProvider';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen  text-textcolor">
    <header className="p-6">
      <h1 className="text-3xl font-bold">Dynamic Theme Switcher</h1>
    </header>
    <main className="p-4">
      <p>
        The current theme is: <span className="font-semibold capitalize">{theme}</span>
      </p>
      <div className="mt-4 flex space-x-4">
        {['blue', 'purple', 'green', 'yellow'].map((themeColor) => (
          <button
            key={themeColor}
            className="px-4 py-2 rounded "
            onClick={() => setTheme(themeColor as 'blue' | 'purple' | 'green' | 'yellow')}
          >
            {themeColor.charAt(0).toUpperCase() + themeColor.slice(1)}
          </button>
        ))}
      </div>
    </main>
  </div>

  );
};

export default ThemeSwitcher;
