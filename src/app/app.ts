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
  emailAddress = 'gl.caen@edln.org';
  emailCopied = false;

  mailtoHref =
    'mailto:gl.caen@edln.org?subject=' +
    encodeURIComponent(this.subjectTemplate) +
    '&body=' +
    encodeURIComponent(this.bodyTemplate);

  async copyEmailToClipboard(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.emailAddress);
      this.emailCopied = true;
      setTimeout(() => {
        this.emailCopied = false;
      }, 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  }

  constructor(protected meta: Meta) {
    // Meta tags SEO optimisés avec tous les mots-clés
    this.meta.addTags([
      {
        name: 'description',
        content:
          "Groupe EDLN Caen - Éclaireuses et Éclaireurs de la Nature. Scoutisme écologique et pleine conscience à Caen en Normandie. Éducation globale de sagesse, non-violence et sens pour enfants et jeunes de 6 à 20 ans. Bâtir un avenir désirable par le jeu, l'aventure et la compassion.",
      },
      {
        name: 'keywords',
        content:
          'edln caen, éclaireuses éclaireurs nature caen, scoutisme écologique caen, scoutisme pleine conscience caen, scoutisme nature caen, scouts caen, scoutisme normandie, éducation sagesse caen, scoutisme non-violence, méditation scoutisme, scoutisme compassion, groupe local edln caen',
      },
      {
        property: 'og:title',
        content:
          'EDLN Caen - Éclaireuses et Éclaireurs de la Nature | Scoutisme Écologique et Pleine Conscience',
      },
      {
        property: 'og:description',
        content:
          "Groupe EDLN Caen - Scoutisme écologique et pleine conscience à Caen en Normandie. Éducation globale de sagesse, non-violence et sens pour enfants et jeunes de 6 à 20 ans. Bâtir un avenir désirable par le jeu, l'aventure et la compassion.",
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
          'EDLN Caen - Éclaireuses et Éclaireurs de la Nature | Scoutisme Écologique et Pleine Conscience',
      },
      {
        name: 'twitter:description',
        content:
          "Groupe EDLN Caen - Scoutisme écologique et pleine conscience à Caen. Éducation de sagesse, non-violence et sens pour enfants et jeunes de 6 à 20 ans. Bâtir un avenir désirable par le jeu, l'aventure et la compassion.",
      },
    ]);
  }
}
