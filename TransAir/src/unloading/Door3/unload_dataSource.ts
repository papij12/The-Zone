import { Card } from "../../data/entities";
import Axios from "axios";
import { abstractUnloadDataSource } from "./abstractUnloadDataSource";

const protocol = document.location.protocol;
const hostname = document.location.hostname;
const port = 4600;
let capacity = 0;
const urls = {
  cards: `${protocol}//${hostname}:${port}/cards`,
  sorting: `${protocol}//${hostname}:${port}/sorting`,
};

export class UnloadDataSource extends abstractUnloadDataSource {


 protected loadCards(): Promise<Card[]> {
     return Axios.get(urls.cards).then(response => response.data);
 }

 storeUnloadCard(): Promise<number> {
 
     let unloadData =
  
      {
       line: [...this.zone.zoneLines.values()].map(ol => ({
       
         cardId:ol.card.id,
         cardName:ol.card.name

       }))
     }
    const found = unloadData.line.find(c => {
      return c.cardId === 22;
    })
    const found_a = unloadData.line.find(c => {
      return c.cardId >= 100;
    })
    const found_b = unloadData.line.find(c => {
      return c.cardId <= 500;
    })
    if(found || found_a || found_b || capacity < 7 )
     {
    capacity ++;
     return Axios.post(urls.sorting,unloadData).then(response=> response.data.id);
     }        
    }
  }