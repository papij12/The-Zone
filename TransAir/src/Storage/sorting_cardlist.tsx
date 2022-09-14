import { createElement } from "../tools/jsxFactory";
import { Card } from "../data/entities";
import { SortCardItem } from "./sorting_carditem";


export class SortCardList {

  props:{
   cards:Card[],
   addToCardCallback?:(card:Card) => void
  }

  getContent():HTMLElement{
   
    return <div className="container-fluid">
      <div className="col-9 p-2">
        {
          this.props.cards.map(c=> 
            <SortCardItem card={c}
            callback={this.props.addToCardCallback}/>)
        }
      </div>
    </div>

  } 

}