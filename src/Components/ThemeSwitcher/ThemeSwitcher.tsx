export type Theme = 'dark' | 'light'

interface ThemeSwitcherProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}


export const ThemeSwitcher = ({ setTheme }: ThemeSwitcherProps) => {

    return (
      <button onClick={() => setTheme(
        prev => prev === 'light'
          ? 'dark'
          : 'light'
      )
      }>theme switcher</button>
    )
}