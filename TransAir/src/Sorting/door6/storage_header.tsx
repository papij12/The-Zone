import { createElement } from "../../tools/jsxFactory";
import { Zone } from "../../data/entities";

export class StorageHeader {

  props: {

    zone: Zone,
    door5: Zone,
    door2: Zone,
    submitcallback:()=> void
    submitecallback:() => void
    submittcallback:()=> void
  }

  getContent(): HTMLElement {
   
    return <div className="p-1 bg-secondary text-white text-right">
      sorting zone
      <button className="btn btn-sm btn-primary m-1"
      onclick= {this.props.submitcallback}>
       door 6
      </button>
      <button className="btn btn-sm btn-primary m-1"
      onclick= {this.props.submitecallback}>
       door 5
      </button>
      <button className="btn btn-sm btn-primary m-1"
      onclick= {this.props.submittcallback}>
       door 2
      </button>

    </div>
  }

}