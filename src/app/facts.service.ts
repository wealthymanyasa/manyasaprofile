import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Facts } from 'src/app/facts.model';


@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor(private firestore: AngularFirestore)  { }

  getFacts() {
    return this.firestore.collection('facts').snapshotChanges();

}

createFact(fact: Facts ){
  return this.firestore.collection('facts').add(fact);
}  

updateFact(fact: Facts){
  delete fact.id;
  this.firestore.doc('facts/' + fact.id).update(fact);
}

deleteFact(factId: string){
  this.firestore.doc('facts/' + factId).delete();
}

}
