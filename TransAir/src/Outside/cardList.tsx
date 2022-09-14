import { createElement } from "../tools/jsxFactory";
import { Card } from "../data/entities";
import { CardItem } from "./cardItem";


export class CardList {

  props:{
   cards:Card[],
   addToCardCallback?:(card:Card) => void
  }

  getContent():HTMLElement{
   
    return <div className="container-fluid">
      <div className="col-9 p-2">
        {
          this.props.cards.map(c=> 
            <CardItem card={c}
            callback={this.props.addToCardCallback}/>)
        }
      </div>
    </div>

  } 

}