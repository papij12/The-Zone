import { createElement } from "../../tools/jsxFactory";
import { Zone } from "../../data/entities";

export class UnloadHeader {

  props: {

    zone: Zone,
    door1:Zone,
    submitcallback:()=> void
    submitecallback:() => void
  }

  getContent(): HTMLElement {
   
    return <div className="p-1 bg-secondary text-white text-right">
      unloading/loading zone
      <button className="btn btn-sm btn-primary m-1"
      onclick= {this.props.submitcallback}>
       Door 3
      </button>
      <button className="btn btn-sm btn-primary m-1"
      onclick= {this.props.submitecallback}>
       door 1
      </button>
    </div>
  }

}