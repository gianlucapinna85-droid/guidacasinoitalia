import React from 'react'
import { Body, Container, Head, Html, Link, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '28px 32px', maxWidth: '600px' }
const brand = { color: '#1E3F66', fontSize: '15px', fontWeight: 'bold' as const, margin: '0 0 18px' }
const paragraph = { color: '#1a1a1a', fontSize: '15px', lineHeight: '24px', margin: '0 0 14px' }
const list = { color: '#1a1a1a', fontSize: '15px', lineHeight: '24px', margin: '0 0 14px', paddingLeft: '20px' }
const signature = { color: '#1E3F66', fontSize: '15px', lineHeight: '22px', margin: '20px 0 0' }

const Email = () => (
  <Html lang="it" dir="ltr">
    <Head />
    <Preview>Trasparenza dei bonus ADM: un monitoraggio pubblico su requisiti e scadenze</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>GuidaCasinò.IT</Text>
        <Text style={paragraph}>Gentile redazione di JAMMA,</Text>
        <Text style={paragraph}>
          sono Gianluca Pinna, curo GuidaCasinò.IT, portale informativo indipendente sui
          concessionari ADM. Non utilizziamo link affiliati tracciati e pubblichiamo
          esclusivamente contenuto informativo ai sensi dell'art. 9 del D.L. 87/2018.
        </Text>
        <Text style={paragraph}>
          Abbiamo pubblicato un osservatorio permanente sulle condizioni reali dei bonus
          di benvenuto dei concessionari. Per ciascuna offerta rileviamo:
        </Text>
        <Text style={list}>
          • requisito di puntata (wagering);<br />
          • giorni di validità;<br />
          • tetto di vincita convertibile;<br />
          • giochi ammessi.
        </Text>
        <Text style={paragraph}>
          L'obiettivo è dichiarato: rendere confrontabili condizioni che nelle comunicazioni
          commerciali restano nei termini e condizioni.
        </Text>
        <Text style={paragraph}>
          Pagina con metodologia e date di verifica:{' '}
          <Link href="https://www.guidacasino-italia.it/osservatorio-bonus-adm">
            guidacasino-italia.it/osservatorio-bonus-adm
          </Link>
        </Text>
        <Text style={paragraph}>
          Se ritenete il tema in linea con la vostra linea editoriale sulla tutela del
          giocatore, i dati sono citabili liberamente e posso aggiornarveli a ogni
          rilevazione. Disponibile anche per un contributo scritto.
        </Text>
        <Text style={paragraph}>Cordiali saluti,</Text>
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
  subject: 'Trasparenza dei bonus ADM: un monitoraggio pubblico su requisiti e scadenze',
  displayName: 'Candidatura JAMMA',
  to: 'redazione@jamma.it',
} satisfies TemplateEntry
