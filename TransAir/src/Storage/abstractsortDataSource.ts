import { Card, Zone } from "../data/entities";

export type cardProp = keyof Card;

export abstract class abstractsortDataSource {

  private _cards: Card[];
  public zone: Zone;
  public loading:Promise<void>;

  constructor()
   {
    this._cards = [];
    this.zone = new Zone();
    this.loading = this.getData();
   }

async getCards(sortProp: cardProp = "id"): Promise<Card[]>
{
  await this.loading;
  return this.selectCard(this._cards,sortProp);
}

protected async getData(): Promise<void>
{
  this._cards = [];
  const rawData = await this.loadCards();
  rawData.forEach(c => {
    this._cards.push(c);
  });
}

protected selectCard(props: Card[],sortProp:cardProp ): Card[]
{
  return props.sort((c1,c2)=>c1[sortProp] < c2[sortProp]? -1 : c1[sortProp] > c2[sortProp]?1:0);
  
}

protected abstract loadCards():Promise<Card[]>;
abstract storesortCard(): Promise<number>;


}