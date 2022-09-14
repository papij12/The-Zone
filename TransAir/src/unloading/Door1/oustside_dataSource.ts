import { Card } from "../../data/entities";
import Axios from "axios";
import {abstractoutsideDataSource} from "./abstractoustideDataSource"

const protocol = document.location.protocol;
const hostname = document.location.hostname;
const port = 4600;
const urls = {
  cards: `${protocol}//${hostname}:${port}/cards`,
  outside: `${protocol}//${hostname}:${port}/outside`,
};

export class OutsideDataSource extends abstractoutsideDataSource {


 protected loadCards(): Promise<Card[]> {
     return Axios.get(urls.cards).then(response => response.data);
 }

 storeOutsideCard(): Promise<number> {
 
     let outsideData =
  
      {
       line: [...this.zone.zoneLines.values()].map(ol => ({
       
         cardId:ol.card.id,
         cardName:ol.card.name

       }))
     }
     return Axios.post(urls.outside,outsideData).then(response=> response.data.id);
           
    }
  }