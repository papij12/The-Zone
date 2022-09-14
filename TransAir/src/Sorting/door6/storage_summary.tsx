import { createElement } from "../../tools/jsxFactory";

export class StorageSummary {

  props: {
    cardId: number,
    callback:() => void
  }

  getContent () : HTMLElement {
    return <div className= "m-2 text-center">
      <h2>{this.props.cardId} Welcome to storage</h2>

      <button className="btn btn-primary" onclick={this.props.callback}>
        OK
      </button>
    </div>
  }
}