import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prix1: number = 80;
  prix2: number = 120;
  prix3: number = 15;
  message: string = "";

  onAffiche(arg: string) {
    return this.message = `Merci d'avoir voté pour l'article ${arg}`;
  }

  liste = [
    {
      titreArticle: "TV",
      prixArticle: 2554,
      description: "Une TV qui fait son taf",
      urlImage: "",
      textAltImage: "image tv",
      dispo: false
    },
    {
      titreArticle: "Jouet",
      prixArticle: 233,
      description: "Un jouet pour jouer",
      urlImage: "",
      textAltImage: "image jouet",
      dispo: true
    },
    {
      titreArticle: "Vélo",
      prixArticle: 654,
      description: "Un velo qui roule",
      urlImage: "",
      textAltImage: "image velo",
      dispo:true
    }
  ]

}

