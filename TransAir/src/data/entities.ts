export type Card = {
  id:number,
  name:string,

};

export class ZoneLine {

  constructor(public card:Card){}

}

export class Zone 
{

  private lines = new Map<string,ZoneLine>();

  constructor(initiaLine?: ZoneLine[])
  {
    if (initiaLine)
    {
      initiaLine.forEach(ol => this.lines.set(ol.card.name,ol))
    }
  }


  public addCard(emp: Card)
  {
    if (this.lines.size < 1)
    {
      this.lines.set(emp.name, new ZoneLine(emp));
    }
  
  }

public removeCard (name: string)
{
  this.lines.delete(name);
}

get zoneLines(): ZoneLine[]
{
 
  return [...this.lines.values()];
} 
    
  }


