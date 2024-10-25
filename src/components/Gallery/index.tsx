import { useState } from 'react'
import closedIcon from '../../assets/svg/close.svg'
import play from '../../assets/svg/play.svg'
import zoom from '../../assets/svg/zoom.svg'
import { GaleryItem } from '../../pages/Home'
import Section from '../Section'
import * as S from './styles'

type Props = {
  defaultCover: string
  name: string
  items: GaleryItem[]
}
interface ModalState extends GaleryItem {
  isVisisble: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisisble: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GaleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GaleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisisble: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisisble: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} ${name} `}
              />{' '}
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para maximinizar a midia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisisble ? 'is-visible' : ''}>
        <S.ModalContent className="wrapper">
          <header>
            <h4>{name}</h4>
            <img src={closedIcon} alt="Feche a janela" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
