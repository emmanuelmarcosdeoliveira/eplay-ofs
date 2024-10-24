import { useState } from 'react'
import Boleto from '../../assets/svg/boleto.svg'
import Cartao from '../../assets/svg/card.svg'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'
const Checkout = () => {
  const [payWithCard, setPayWitchCard] = useState(false)
  return (
    <div className="wrapper">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input type="text" name="" id="fullName" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="" id="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" name="" id="cpf" />
            </InputGroup>
          </Row>
          <h3 className="marginTop">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="email" name="" id="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirEmail">Confirme o E-mail</label>
              <input type="email" name="" id="confirEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWitchCard(false)}
          >
            <img src={Boleto} alt="Boleto bancário" />
            Boleto Bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWitchCard(true)}
          >
            <img src={Cartao} alt="Cartão de credito" />
            Cartão de credito
          </TabButton>
          <div className="marginTop">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do Titular do Cartão</label>
                    <input type="text" name="" id="cardOwner" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input type="email" name="" id="cpfCardOwner" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do Titular do Cartão</label>
                    <input type="text" name="" id="cardOwner" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Numnero do cartão</label>
                    <input type="email" name="" id="cardNumber" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="experiesMounth">Mês de vencimento</label>
                    <input type="email" name="" id="experiesMounth" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="experiesYear">Ano de vencimento</label>
                    <input type="email" name="" id="experiesYear" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input type="number" name="" id="cardCode" />
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>

          <Row marginTop="24px">
            <InputGroup maxWidth="116px">
              <label htmlFor="instalments">Parcelamento</label>
              <select>
                <option>1x de RS 200,00</option>
                <option>2x de RS 100,00</option>
                <option>4x de RS 66,66</option>
              </select>
            </InputGroup>
          </Row>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a cvompra">
        Finalizar Compra
      </Button>
    </div>
  )
}

export default Checkout
