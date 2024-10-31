import { useEffect } from 'react'

type HeadProps = {
  title: string
  description: string
}

const Head = ({ title, description }: HeadProps) => {
  useEffect(() => {
    document.title = title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [title, description])

  return <></>
}

export default Head
