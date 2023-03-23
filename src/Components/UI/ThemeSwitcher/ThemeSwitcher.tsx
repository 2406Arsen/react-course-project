import { useTheme } from "../../../Providers/ThemeProvider"
import { Button } from "../Button/Button"


export const ThemeSwitcher = () => {

  const { toggleTheme } = useTheme()


  return (
    <Button
      type="secondary"
      onClick={toggleTheme}
    >
      theme switcher
    </Button>
  )
}