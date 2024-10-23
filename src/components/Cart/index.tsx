import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import Button from '../Button'
import { formatPrice } from '../ProductsList'
import Tag from '../Tag'
import {
  BtnMy,
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
const Cart = () => {
  const dispatch = useDispatch()

  const CloseCart = () => {
    dispatch(close())
  }
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acumulator, currentValue) => {
      return (acumulator += currentValue.prices.current!)
    }, 0)
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={CloseCart} />
      <Sidebar>
        <BtnMy onClick={CloseCart}></BtnMy>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carinho</Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>{' '}
        </Prices>
        <Button type="button" title="Clique aqui para continuar com a compra ">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
