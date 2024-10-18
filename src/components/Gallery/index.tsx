import { useState } from 'react'
import closed from '../../assets/svg/close.svg'
import play from '../../assets/svg/play.svg'
import zoom from '../../assets/svg/zoom.svg'
import { GaleryItem } from '../../pages/Home'
import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

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
        <Items>
          {items.map((media, index) => (
            <Item
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
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para maximinizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisisble ? 'visible' : ''}>
        <ModalContent className="wrapper">
          <header>
            <h4>{name}</h4>
            <img
              src={closed}
              alt="Feche a janela"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery
