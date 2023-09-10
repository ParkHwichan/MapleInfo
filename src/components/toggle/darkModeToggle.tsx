import {useContext, useEffect, useState} from 'react'
import {Switch} from '@headlessui/react'
import MyIcon from "@/components/icons/myIcons";
import classNames from "@/utils/classNames";
import {useTheme} from "next-themes";


export default function DarkModeToggle() {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()


    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null;
    }


    return (
        <Switch
            checked={theme === 'dark'}
            onChange={() => {
                toggleTheme();
            }}
            className={classNames(
                theme === 'dark' ? 'bg-foregroundHover' : 'bg-backgroundHover',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out   '
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                className={classNames(
                    theme === 'dark' ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out'
                )}
            >
        <span
            className={classNames(
                theme === 'dark' ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
        >
          <MyIcon name={"sun"} className={"p-0.5 "}/>
        </span>
        <span
            className={classNames(
                theme === 'dark' ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                'absolute inset-0 flex h-full w-full  items-center text-amber-500 justify-center transition-opacity'

            )}
            aria-hidden="true"
        >
           <MyIcon name={"moon"} className={"p-0.5 fill-amber-300 "}/>
        </span>
      </span>
        </Switch>
    )
}