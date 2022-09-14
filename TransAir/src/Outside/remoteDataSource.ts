import { abstractDataSource } from "./abstractDataSource";
import { Card } from "../data/entities";
import Axios from "axios";

const protocol = document.location.protocol;
const hostname = document.location.hostname;
const port = 4600;
let capacity = 0;
const urls = {
  cards: `${protocol}//${hostname}:${port}/cards`,
  unload: `${protocol}//${hostname}:${port}/unload`,
};

export class RemoteDataSource extends abstractDataSource {

 protected loadCards(): Promise<Card[]> {
     return Axios.get(urls.cards).then(response => response.data);
 }

 storeCard(): Promise<number> {
 
     let zoneData =
  
      {
       lines: [...this.zone.zoneLines.values()].map(ol => ({
       
         cardId:ol.card.id,
         cardName:ol.card.name

       }))
     }
    if(capacity < 5 )
     {
    capacity ++;
  
     return Axios.post(urls.unload,zoneData).then(response=> response.data.id);
     }     
    }
  }