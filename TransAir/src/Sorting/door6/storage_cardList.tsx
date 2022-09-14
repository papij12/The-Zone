import { createElement } from "../../tools/jsxFactory";
import { Card } from "../../data/entities";
import { StorageCardItem } from "./storage_carditem";

export class StorageCardList {

  props: 
{
card:Card[],
addToCardCallback?:(card:Card) => void 
addTocardCallback?:(card:Card) => void
addTocardcallback?:(card:Card) => void 

}

getContent():HTMLElement {

return <div className ="container-fluid">

<div className="col-9 p-2">
  {
    this.props.card.map(c=>
      <StorageCardItem card={c}
      callback={this.props.addToCardCallback}
      calleback = {this.props.addTocardCallback}
      callbackdoor2 ={this.props.addTocardcallback}/>)
  }
</div>
</div>
}
}