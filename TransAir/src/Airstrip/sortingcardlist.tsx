import { createElement } from "../tools/jsxFactory";
import { Card } from "../data/entities";
import { SortingCardItem } from "./sortingcardItem";


export class SortingCardList {

  props:{
   cards:Card[],
   addToCardCallback?:(card:Card) => void
  }

  getContent():HTMLElement{
   
    return <div className="container-fluid">
      <div className="col-9 p-2">
        {
          this.props.cards.map(c=> 
            <SortingCardItem card={c}
            callback={this.props.addToCardCallback}/>)
        }
      </div>
    </div>

  } 

}