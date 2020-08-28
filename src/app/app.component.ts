import { Component, OnInit } from '@angular/core';

import { FactsService } from './facts.service';
import { Facts } from './facts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  facts: Facts[];
  constructor(private factService: FactsService) { }

  ngOnInit() {
    this.factService.getFacts().subscribe(data => {
      this.facts = data.map(e => {
        return {
          id: e.payload.doc.id
          ...payload.doc.data()
        } as Facts;
      })
    });
  }
  create(fact: Facts){
    this.factService.createFact(fact);
}

update(fact: Facts) {
  this.factService.updateFact(fact);
}

delete(id: string) {
  this.factService.deleteFact(id);
}

}