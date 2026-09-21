import React from 'react'
import { Body, Container, Head, Html, Link, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '28px 32px', maxWidth: '600px' }
const brand = { color: '#1E3F66', fontSize: '15px', fontWeight: 'bold' as const, margin: '0 0 18px' }
const paragraph = { color: '#1a1a1a', fontSize: '15px', lineHeight: '24px', margin: '0 0 14px' }
const signature = { color: '#1E3F66', fontSize: '15px', lineHeight: '22px', margin: '20px 0 0' }

const Email = () => (
  <Html lang="it" dir="ltr">
    <Head />
    <Preview>Segnalazione dati — Osservatorio sui bonus dei concessionari ADM</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>GuidaCasinò.IT</Text>
        <Text style={paragraph}>Gentile redazione,</Text>
        <Text style={paragraph}>
          vi segnalo, per eventuale utilizzo, i dati di un monitoraggio indipendente
          sulle condizioni dei bonus offerti dai concessionari ADM in Italia.
        </Text>
        <Text style={paragraph}>
          In sintesi: il valore nominale dei bonus pubblicizzati risulta poco indicativo
          del valore effettivo, perché condizionato da requisiti di puntata fino a 50x,
          finestre di validità spesso brevi e tetti massimi di vincita convertibile.
        </Text>
        <Text style={paragraph}>
          Fonte, metodologia e data di ultima verifica:{' '}
          <Link href="https://www.guidacasino-italia.it/osservatorio-bonus-adm">
            guidacasino-italia.it/osservatorio-bonus-adm
          </Link>
        </Text>
        <Text style={paragraph}>
          GuidaCasinò.IT è un portale informativo indipendente, senza link di
          tracciamento. Sono a disposizione per dati disaggregati o per una dichiarazione
          attribuibile.
        </Text>
        <Text style={signature}>
          Gianluca Pinna<br />
          GuidaCasinò.IT — https://www.guidacasino-italia.it
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Segnalazione dati — Osservatorio sui bonus dei concessionari ADM',
  displayName: 'Candidatura Agipronews',
  to: 'info@agipro.it',
} satisfies TemplateEntry
