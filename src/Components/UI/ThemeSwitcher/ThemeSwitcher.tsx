import { Button } from "../Button/Button"

export type Theme = 'dark' | 'light'

interface ThemeSwitcherProps {
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}


export const ThemeSwitcher = ({ setTheme }: ThemeSwitcherProps) => {

  const toggleTheme = () => setTheme(
    prev => prev === 'light'
      ? 'dark'
      : 'light'
  )

  return (
    <Button
      type="secondary"
      onClick={toggleTheme}
    >
      theme switcher
    </Button>
  )
}