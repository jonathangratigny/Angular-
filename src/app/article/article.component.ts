import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // titreArticle: string = "Titre de l'article";
  // prixArticle: number = 12;
  textAltImage: string = "Titre Alternatif de l'image";
  urlImage: string = "https://via.placeholder.com/400x250";
  totalLikeNumber: number = 0;
  comment: string = "";

  @Input() titreArticle: string | undefined;
  @Input() prixArticle: number | undefined;

  constructor() { }

  ngOnInit(): void {

  }
  onlike() {
    this.totalLikeNumber++;
  }
}



