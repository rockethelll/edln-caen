import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Card } from './card/card';
import { CARDS } from './data/cards';
import { mailBodyTemplate, mailSubjectTemplate } from './data/mail-inscription';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, Card, NgOptimizedImage],
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
    // Meta tags SEO optimisés avec tous les mots-clés
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Groupe scout EDLN Caen - Éclaireuses et Éclaireurs de la Nature. Scoutisme à Caen en Normandie pour enfants et jeunes de 6 à 20 ans. Activités nature, camps et weekends. Inscription ouverte.',
      },
      {
        name: 'keywords',
        content:
          'scouts caen, scout caen, scoutisme caen, éclaireurs caen, scouts normandie, scoutisme normandie, edln caen, éclaireuses éclaireurs nature, groupe scout caen, scoutisme nature caen',
      },
      {
        property: 'og:title',
        content:
          'Scouts Caen - Éclaireurs de la Nature | Scoutisme à Caen Normandie',
      },
      {
        property: 'og:description',
        content:
          'Groupe scout EDLN Caen - Scoutisme à Caen en Normandie pour enfants et jeunes de 6 à 20 ans. Activités nature, camps et weekends. Inscription ouverte.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://edln-caen.vercel.app' },
      {
        property: 'og:image',
        content: 'https://edln-caen.vercel.app/images/hero-edln.webp',
      },
      { property: 'og:locale', content: 'fr_FR' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'Scouts Caen - Éclaireurs de la Nature | Scoutisme à Caen Normandie',
      },
      {
        name: 'twitter:description',
        content:
          'Groupe scout EDLN Caen - Scoutisme à Caen en Normandie pour enfants et jeunes de 6 à 20 ans. Activités nature, camps et weekends.',
      },
    ]);
  }
}
