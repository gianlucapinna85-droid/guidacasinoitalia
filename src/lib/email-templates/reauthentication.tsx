import * as React from 'react'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="it" dir="ltr">
    <Head />
    <Preview>Il tuo codice di verifica</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Conferma la tua identità</Heading>
        <Text style={text}>Usa il codice qui sotto per confermare la tua identità:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>
          Il codice scade a breve. Se non hai richiesto nulla, puoi ignorare questa email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '28px 28px 32px', maxWidth: '560px', border: '1px solid #E6DFCF', borderRadius: '14px', backgroundColor: '#FDFBF6' }
const h1 = {
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: '#1E3F66',
  margin: '0 0 20px',
}
const text = {
  fontSize: '14px',
  color: '#3C4653',
  lineHeight: '1.5',
  margin: '0 0 25px',
}
const codeStyle = {
  fontFamily: 'Courier, monospace',
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: '#000000',
  margin: '0 0 30px',
}
const footer = { fontSize: '12px', color: '#7A7466', margin: '30px 0 0' }
