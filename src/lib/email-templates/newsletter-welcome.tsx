import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

const SITE_URL = 'https://www.guidacasino-italia.it'
const LOGO_URL = `${SITE_URL}/favicon-192x192.png`

interface NewsletterWelcomeProps {
  recipient?: string
}

export const NewsletterWelcomeEmail = ({ recipient }: NewsletterWelcomeProps) => (
  <Html lang="it" dir="ltr">
    <Head />
    <Preview>Iscrizione confermata: bonus ADM e analisi, prima degli altri</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoRow}>
          <Img src={LOGO_URL} width="56" height="56" alt="GuidaCasinò.IT" style={logo} />
        </Section>
        <Heading style={h1}>Iscrizione confermata</Heading>
        <Text style={text}>
          Grazie per esserti iscritto a{' '}
          <Link href={SITE_URL} style={link}>
            <strong>GuidaCasinò.IT</strong>
          </Link>
          {recipient ? ` con l'indirizzo ${recipient}` : ''}.
        </Text>
        <Text style={text}>
          Riceverai i nuovi bonus verificati dei concessionari ADM, le analisi indipendenti e gli
          aggiornamenti normativi. Nessuno spam.
        </Text>
        <Button style={button} href={`${SITE_URL}/migliori-casino-online-adm`}>
          Vedi i casinò ADM
        </Button>
        <Text style={footer}>
          Contenuto informativo (art. 9 D.L. 87/2018). Vietato ai minori di 18 anni: il gioco può
          causare dipendenza patologica. Supporto gratuito: Telefono Verde ISS 800 558822.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default NewsletterWelcomeEmail

export const template = {
  component: NewsletterWelcomeEmail,
  subject: 'Iscrizione confermata — GuidaCasinò.IT',
  displayName: 'Benvenuto newsletter',
  previewData: { recipient: 'mario.rossi@example.com' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = {
  padding: '28px 28px 32px',
  maxWidth: '560px',
  border: '1px solid #E6DFCF',
  borderRadius: '14px',
  backgroundColor: '#FDFBF6',
}
const logoRow = { margin: '0 0 16px' }
const logo = { borderRadius: '50%' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1E3F66', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#3C4653', lineHeight: '1.5', margin: '0 0 20px' }
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
const footer = { fontSize: '12px', color: '#7A7466', margin: '30px 0 0', lineHeight: '1.5' }
