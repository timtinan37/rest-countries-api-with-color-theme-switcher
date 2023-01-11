import { useTheme } from 'next-themes'

export default function Navbar() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="shadow dark:bg-dark_mode_elements">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <h1 className="text-2xl font-extrabold">Where in the world?</h1>
                <button className="text-sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <span className={'mr-2 fa-regular fa-' + (theme === 'dark' ? 'sun' : 'moon')}></span>
                    {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
            </div>
        </div>
    )
}