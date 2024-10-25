import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils/parseToBrl'
import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'
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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={CloseCart} />
      <S.Sidebar>
        <S.BtnMy onClick={CloseCart}></S.BtnMy>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>{' '}
        </S.Prices>
        <Button type="button" title="Clique aqui para continuar com a compra ">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
