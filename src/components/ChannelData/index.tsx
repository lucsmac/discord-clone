import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const messagesDiv = messagesRef.current

    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>

      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Lucas Macedo"
          date="21/08/2020"
          content="Hoje é meu aniversário"
          isBot
        />

        <ChannelMessage
          author="Emily Porfírio"
          date="21/08/2020"
          content={
            <>
              <Mention>@Lucas Macedo</Mention>, parabéns por ser o cara mais incrível, charmoso e melhor das galáxias do universo, ó senhor deus do front-end.
            </>
          }
          hasMention
        />
        <ChannelMessage
          author="Fulaninho"
          date="21/06/2020"
          content="Parabéeens, monstro!!"
        />
        <ChannelMessage
          author="Beltrano"
          date="21/06/2020"
          content="Feliz aniversário my brother!"
        />
        <ChannelMessage
          author="Sicrano"
          date="21/06/2020"
          content="Happy birthday to youuu"
        />
        <ChannelMessage
          author="Fulaninho"
          date="21/06/2020"
          content="Parabéeens, monstro!!"
        />
        <ChannelMessage
          author="Beltrano"
          date="21/06/2020"
          content="Feliz aniversário my brother!"
        />
        <ChannelMessage
          author="Sicrano"
          date="21/06/2020"
          content="Happy birthday to youuu"
        />
        <ChannelMessage
          author="Fulaninho"
          date="21/06/2020"
          content="Parabéeens, monstro!!"
        />
        <ChannelMessage
          author="Beltrano"
          date="21/06/2020"
          content="Feliz aniversário my brother!"
        />
        <ChannelMessage
          author="Sicrano"
          date="21/06/2020"
          content="Happy birthday to youuu"
        />
        <ChannelMessage
          author="Fulaninho"
          date="21/06/2020"
          content="Parabéeens, monstro!!"
        />
        <ChannelMessage
          author="Beltrano"
          date="21/06/2020"
          content="Feliz aniversário my brother!"
        />
        <ChannelMessage
          author="Sicrano"
          date="21/06/2020"
          content="Happy birthday to youuu"
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData
