import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // titreArticle: string = "Titre de l'article";
  // prixArticle: number = 12;
  ;
  totalLikeNumber: number = 0;
  comment: string = "";
  
  
  @Output() info = new EventEmitter<string>();
  
  @Input() titreArticle: string | undefined;
  @Input() prixArticle: number | undefined;
  @Input() description:string | undefined;
  @Input() urlImage: string = "https://via.placeholder.com/400x250";
  @Input() textAltImage: string = "Titre Alternatif de l'image";
  @Input() dispo:boolean = false;


  constructor() { }
  ngOnInit(): void {

  }
  onLike() {
    this.totalLikeNumber++;
    this.info.emit(this.titreArticle);
  }
}



