import { createElement } from "../../tools/jsxFactory";
import { Card } from "../../data/entities";
import { UnloadCardItem } from "./unload_cardItem";

export class UnloadCardList {

  props: 
{
card:Card[],
addToCardCallback?:(card:Card) => void 
addTocardCallback?:(card:Card) => void 
}

getContent():HTMLElement {

return <div className ="container-fluid">

<div className="col-9 p-2">
  {
    this.props.card.map(c=>
      <UnloadCardItem card={c}
      callback={this.props.addToCardCallback}
      calleback = {this.props.addTocardCallback}/>)
  }
</div>
</div>

}
  

}