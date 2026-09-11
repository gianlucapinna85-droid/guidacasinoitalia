import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components'

interface EmailChangeEmailProps {
  siteName: string
  // oldEmail is the user's current address (HookData.OldEmail). For the
  // NEW-recipient half of a secure email_change fanout, `email` equals the
  // recipient (NEW), so the "from" line must render oldEmail to read
  // "from OLD to NEW" instead of "from NEW to NEW".
  oldEmail: string
  email: string
  newEmail: string
  confirmationUrl: string
}

export const EmailChangeEmail = ({
  siteName,
  oldEmail,
  newEmail,
  confirmationUrl,
}: EmailChangeEmailProps) => (
  <Html lang="it" dir="ltr">
    <Head>
      <style>{darkModeCss}</style>
    </Head>
    <Preview>Conferma la tua email change for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Conferma la tua email change</Heading>
        <Text style={text}>
          Hai richiesto di cambiare il tuo indirizzo email per {siteName} da{' '}
          <Link href={`mailto:${oldEmail}`} style={link}>
            {oldEmail}
          </Link>{' '}
          a{' '}
          <Link href={`mailto:${newEmail}`} style={link}>
            {newEmail}
          </Link>
          .
        </Text>
        <Text style={text}>
          Clicca il pulsante qui sotto per confermare la modifica:
        </Text>
        <Button className="dm-btn" style={button} href={confirmationUrl}>
          Conferma cambio email
        </Button>
        <Text style={footer}>
          Se non hai richiesto questa modifica, metti subito in sicurezza il tuo account.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

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
const link = { color: '#1E3F66', textDecoration: 'underline' }
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
