import { createElement } from "../tools/jsxFactory";
import { Zone } from "../data/entities";

export class SortHeader {

  props: {

    zone: Zone,
    submitcallback:()=> void
  }

  getContent(): HTMLElement {
   
    return <div className="p-1 bg-secondary text-white text-right">
      Storage zone
      <button className="btn btn-sm btn-primary m-1"
      onclick= {this.props.submitcallback}>
        Door 7
      </button>
    </div>
  }

}