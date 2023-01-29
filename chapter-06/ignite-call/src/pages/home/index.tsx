import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import PreviewImage from '../../assets/app-preview.png'
import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={PreviewImage}
          height={400}
          alt="Calendário simbolizando a aplicação em funcionamento"
          priority
          quality={100}
        />
      </Preview>
    </Container>
  )
}
