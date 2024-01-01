import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    //zapouzdreni?
    //uvnitr moji tridy ho budu mit dostupnu jako _storage
    // v tom je konkretni uloziste
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //metody set a get


  set(key: string, value: any) {
    console.log('set mehtod was called')
    this._storage?.set(key, value)
  }

  async get(key: string){
    return this._storage?.get(key)
  }

}
