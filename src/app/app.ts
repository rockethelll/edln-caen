import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Card } from './card/card';
import { CARDS } from './data/cards';
import { mailBodyTemplate, mailSubjectTemplate } from './data/mail-inscription';
import { Navbar } from './navbar/navbar';
import { TextWithWave } from './text-with-wave/text-with-wave';

@Component({
  selector: 'app-root',
  imports: [Navbar, TextWithWave, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentYear = new Date().getFullYear();
  cards = CARDS;
  bodyTemplate = mailBodyTemplate;
  subjectTemplate = mailSubjectTemplate;

  mailtoHref =
    'mailto:gl.caen@edln.org?subject=' +
    encodeURIComponent(this.subjectTemplate) +
    '&body=' +
    encodeURIComponent(this.bodyTemplate);

  constructor(protected meta: Meta) {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Groupe des Éclaireuses et Éclaireurs de France à Caen. Scoutisme laïque, nature et aventure pour les jeunes de 6 à 17 ans.',
      },
      { property: 'og:title', content: 'EDLN Caen – Scoutisme et nature' },
      {
        property: 'og:description',
        content:
          'Découvre le scoutisme dans un cadre naturel et solidaire à Caen.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://edln-caen.vercel.app' },
    ]);
  }
}
