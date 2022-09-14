import { Card } from "../../data/entities";
import Axios from "axios";
import { abstractairstripDataSource } from "./abstractAirstripDataSource";

const protocol = document.location.protocol;
const hostname = document.location.hostname;
const port = 4600;
let capacity = 0;
const urls = {
  cards: `${protocol}//${hostname}:${port}/cards`,
  airstrip: `${protocol}//${hostname}:${port}/airstrip`,
 
};

export class AirstripDataSource extends abstractairstripDataSource {


 protected loadCards(): Promise<Card[]> {
     return Axios.get(urls.cards).then(response => response.data);
 }

 storeAirstripCard(): Promise<number> {
 
     let AirstripData =
  
      {
       line: [...this.zone.zoneLines.values()].map(ol => ({
       
         cardId:ol.card.id,
         cardName:ol.card.name

       }))
     }
    const found = AirstripData.line.find(c => {
      return c.cardId === 22;
    })
    const found_a = AirstripData.line.find(b => {
      return b.cardId >= 100;
    })
    const found_b = AirstripData.line.find(b => {
      return b.cardId <= 200;
    })
    if(found || found_a || found_b || capacity < 3 )
     {
    capacity ++;
     return Axios.post(urls.airstrip,AirstripData).then(response=> response.data.id);
     }        
    }
  }