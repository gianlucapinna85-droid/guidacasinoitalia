import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

export const RecoveryEmail = ({
  siteName,
  confirmationUrl,
}: RecoveryEmailProps) => (
  <Html lang="it" dir="ltr">
    <Head>
      <style>{darkModeCss}</style>
    </Head>
    <Preview>Reimposta la password per {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Reimposta la password</Heading>
        <Text style={text}>
          Abbiamo ricevuto una richiesta di reimpostazione della password per {siteName}. Clicca il pulsante qui sotto per sceglierne una nuova.
        </Text>
        <Button className="dm-btn" style={button} href={confirmationUrl}>
          Reimposta password
        </Button>
        <Text style={footer}>
          Se non hai richiesto la reimpostazione, puoi ignorare questa email: la password non verrà modificata.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

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
const button = {
  backgroundColor: '#C79A2E',
  color: '#16120A',
  fontSize: '14px',
  border: '1px solid #C79A2E',
  borderRadius: '8px',
  padding: '12px 20px',
  textDecoration: 'none',
}
const footer = { fontSize: '12px', color: '#7A7466', margin: '30px 0 0' }
// Rendered as a text child, which React may HTML-escape: keep this CSS free of >, &, and quotes.
const darkModeCss = `
  @media (prefers-color-scheme: dark) {
    .dm-btn { background-color: #C79A2E !important; color: #16120A !important; }
  }
  [data-ogsc] .dm-btn { background-color: #C79A2E !important; color: #16120A !important; }
  [data-ogsb] .dm-btn { background-color: #C79A2E !important; color: #16120A !important; }
`
