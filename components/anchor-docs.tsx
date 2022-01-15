import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { useDimension } from "./useDimension";

interface AnchorItem {
  id: string;
  title: string
  secondary?: boolean
}

interface DocsAnchorProps {
  items: AnchorItem[]
  secondaryIcon?: JSX.Element
}

const DocsAnchor: React.FC<DocsAnchorProps> = (props) => {
  const { items, secondaryIcon } = props
  const [activeElement, setActiveElement] = useState<string>(items[0].id)
  const [arrOffsetY, setArrOffsetY] = useState<number[]>([])
  const [, height] = useDimension()
  const distance = height ? height / 2 - 25 : 0

  const onNavigate = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      const offetTop = element?.offsetTop || 0
      window.scrollTo(0, offetTop > 110 ? offetTop - 110 : 0)
      setActiveElement(id)
    },
    [],
  )

  const handleScroll = useCallback(() => {
    const current = window.pageYOffset
    for (let i = 0; i < arrOffsetY.length; i++) {
      if (i === arrOffsetY.length - 1 && current >= arrOffsetY[i] - distance) {
        setActiveElement(items[i].id)
      }
      if (arrOffsetY[i + 1] && current >= arrOffsetY[i] - distance && current < arrOffsetY[i + 1] - distance) {
        setActiveElement(items[i].id)
      }
    }
  }, [arrOffsetY, items, distance])

  useEffect(() => {
    let arrOffsetDefault: number[] = []
    for (let i = 0; i < items.length; i++) {
      const element = document.getElementById(items[i].id);
      const offetTop = element?.offsetTop || 0
      arrOffsetDefault.push(offetTop)
    }
    setArrOffsetY(arrOffsetDefault)
  }, [items])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div>
      <h5 className='font-semibold mb-8 dark:text-gray-300'>
        On this page
      </h5>
      <ul>
        {items.map((item, index) => {
          return (
            <li
              key={`${item.id}_${index}`}
              onClick={() => onNavigate(item.id)}
              className={clsx({
                'cursor-pointer': true,
                'text-teal-500 font-medium dark:text-teal-400': activeElement === item.id,
                'text-gray-600 dark:text-gray-400': activeElement !== item.id,
                'mb-3': !item.secondary,
                'mb-2': !!item.secondary,
              })}>
              {item.secondary ? (
                <span>
                  {secondaryIcon || (
                    <span className="flex items-center">
                      <span className="ml-3 mr-2 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{item.title}</span>
                    </span>
                  )}
                </span>
              ) : <span>{item.title}</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DocsAnchor