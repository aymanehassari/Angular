import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model'
@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'card';
    @Input() article:Article

    constructor() {
    }

    voteUp(): Boolean {
        this.article.voteUp(); //Modificato qui 
        return false;
    }

    voteDown(): Boolean {
        this.article.voteDown(); //Modificato qui
        return false;
    }

    ngOnInit(): void {
    }

}
