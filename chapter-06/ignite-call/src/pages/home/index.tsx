import { ClaimUsernameForm } from '@/components/ClaimUsernameForm'
import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import PreviewImage from '../../assets/app-preview.png'
import { Container, Hero, Preview } from './styles'

export function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={PreviewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando a aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
