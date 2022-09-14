import { createElement } from "../../tools/jsxFactory";
import { Zone } from "../../data/entities";

export class AirstripZoneDetails {

  props:{
    zone:Zone,
    cancelcallback: () => void
    submitcallback:() => void
  }

  getContent(): HTMLElement {
    return <div>
      <h3 className="text-center bg-primary text-white p-2">
        employee card summary
      </h3>
      <div className="p-3">
        <table className= "table table-sm table-striped">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.zone.zoneLines.map(line =>
              <tr>
                <td>{line.card.id}</td>
                <td>{line.card.name}</td>
                </tr>
              )}
          </tbody>
        </table>
    </div>
    <div className="text-center">
      <button className="btn btn-secondary m-1"
      onclick={this.props.cancelcallback}>
        Back
      </button>
      <button className="btn btn-primary m-1"
      onclick={this.props.submitcallback}>
        Enter
      </button>
    </div>
    </div>
  }
 
}