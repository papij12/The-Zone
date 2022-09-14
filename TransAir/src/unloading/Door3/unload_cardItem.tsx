import { createElement } from "../../tools/jsxFactory"
import { Card } from "../../data/entities"

export class UnloadCardItem {
  props :{
    card:Card,
    callback:(card:Card) => void
    calleback:(card:Card) => void
  }
  getContent():HTMLElement {
    return <div className="card m-1 p-1 bg-light">
      <h4>
        {this.props.card.name}
      </h4>
      <div className="card-text bg-white p-1">
      <button className="btn-success btn-sm float-riht"
         onclick={this.handleSelectCard}>
         Select Card
       </button>
      </div>
    </div>
  }
  handleSelectCard = ():void => {
    this.props.callback(this.props.card);
    this.props.calleback(this.props.card);
    
  }
}