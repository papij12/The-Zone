import { Card } from "../../data/entities";
import Axios from "axios";
import { abstractstorageDataSource } from "./abstractStorageDataSource";

const protocol = document.location.protocol;
const hostname = document.location.hostname;
const port = 4600;
let capacity = 0;
const urls = {
  cards: `${protocol}//${hostname}:${port}/cards`,
  storage: `${protocol}//${hostname}:${port}/storage`,
 
};

export class StorageDataSource extends abstractstorageDataSource {


 protected loadCards(): Promise<Card[]> {
     return Axios.get(urls.cards).then(response => response.data);
 }

 storeStorageCard(): Promise<number> {
 
     let StorageData =
  
      {
       line: [...this.zone.zoneLines.values()].map(ol => ({
       
         cardId:ol.card.id,
         cardName:ol.card.name

       }))
     }
    const found = StorageData.line.find(c => {
      return c.cardId === 22;
    })
    const found_a = StorageData.line.find(c => {
      return c.cardId >= 201;
    })
    const found_b = StorageData.line.find(c => {
      return c.cardId <= 500;
    })
    if(found || found_a || found_b || capacity < 3 )
     {
    capacity ++;
     return Axios.post(urls.storage,StorageData).then(response=> response.data.id);
     }        
    }
  }