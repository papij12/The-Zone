import { abstractsortDataSource } from "./abstractsortDataSource";
import { Card } from "../data/entities";
import Axios from "axios";

const protocol = document.location.protocol;
const hostname = document.location.hostname;
const port = 4600;
let capacity = 0;
const urls = {
  cards: `${protocol}//${hostname}:${port}/cards`,
  Sorting: `${protocol}//${hostname}:${port}/Sorting`,
};

export class SortDataSource extends abstractsortDataSource {

 protected loadCards(): Promise<Card[]> {
     return Axios.get(urls.cards).then(response => response.data);
 }

 storesortCard(): Promise<number> {
 
     let zoneData =
  
      {
       lines: [...this.zone.zoneLines.values()].map(ol => ({
       
         cardId:ol.card.id,
         cardName:ol.card.name

       }))
     }
     const found = zoneData.lines.find(c => {
      return c.cardId === 22;
    })
    const found_a = zoneData.lines.find(c => {
      return c.cardId >= 100;
    })
    const found_b = zoneData.lines.find(c => {
      return c.cardId <= 500;
    })
    if(found || found_a || found_b || capacity < 7 )
     {
    capacity ++;
  
     return Axios.post(urls.Sorting,zoneData).then(response=> response.data.id);
     }     
    }
  }