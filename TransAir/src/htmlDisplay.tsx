import { createElement } from "./tools/jsxFactory";
import { Card, Zone} from "./data/entities";
import { abstractDataSource } from "./Outside/abstractDataSource";
import { abstractUnloadDataSource } from "./unloading/Door3/abstractUnloadDataSource";
import { abstractstorageDataSource } from "./Sorting/door6/abstractStorageDataSource";
import { abstractairstripDataSource } from "./Sorting/door5/abstractAirstripDataSource";
import { abstractsortingDataSource } from "./Airstrip/abstractsortingDataSource";
import { abstractsortDataSource } from "./Storage/abstractsortDataSource";
import { abstractoutsideDataSource } from "./unloading/Door1/abstractoustideDataSource";
import { abstractloadingDataSource } from "./Sorting/door2/abstractloadDataSource";
import { CardList } from "./Outside/cardList";
import { Header } from "./Outside/header";
import { ZoneDetails } from "./Outside/zoneDetails";
import { Summary } from "./Outside/summary";
import { UnloadCardList } from "./unloading/Door3/unload_cardList";
import { UnloadHeader } from "./unloading/Door3/unload_header";
import { UnloadZoneDetails } from "./unloading/Door3/unload_zoneDetails";
import {UnloadSummary} from "./unloading/Door3/unload_summary";
import { StorageHeader } from "./Sorting/door6/storage_header";
import { StorageCardList } from "./Sorting/door6/storage_cardList";
import { StorageZoneDetails } from "./Sorting/door6/storage_zonedetails";
import { StorageSummary } from "./Sorting/door6/storage_summary";
import { AirstripZoneDetails } from "./Sorting/door5/airstrip_zonedetails";
import { AirstripSummary } from "./Sorting/door5/airstrip_summary";
import { SortingZoneDetails } from "./Airstrip/sortingdetails";
import { SortingSummary } from "./Airstrip/sortingsummary";
import { SortingHeader } from "./Airstrip/sortingheader";
import { SortingCardList } from "./Airstrip/sortingcardlist";
import { SortZoneDetails } from "./Storage/sorting_details";
import { SortSummary } from "./Storage/sorting_summary";
import { SortHeader } from "./Storage/sorting_header";
import { SortCardList } from "./Storage/sorting_cardlist";
import { OutsideZoneDetails } from "./unloading/Door1/outside_zoneDetails";
import { OutsideSummary } from "./unloading/Door1/outside_summary";
import { LoadDetails } from "./Sorting/door2/load_zonedetails";
import { LoadSummary } from "./Sorting/door2/load_summary";
enum DisplayMode {
  List, Details,Complete, unloadlist,unloadDetails,unloadcomplete,
  storagelist,storagedetails,storagecomplete,airstripdetails,airstripcomplete,
  sortinglist,sortingdetails,sortingcomplete,sortlist,sortdetails,sortcomplete,
  outsidedetails,outsidecomplete,loaddetails,loadcomplete
}

export class  HTMLDisplay {
private containerElem: HTMLElement;
private mode: DisplayMode = DisplayMode.List;
 private cardId: number;

constructor(){
  this.containerElem = document.createElement("div");
}

  props: {
    dataSource:abstractDataSource;
    unloadSource:abstractUnloadDataSource;
    storageSource:abstractstorageDataSource;
    airstripSource:abstractairstripDataSource;
    sortingSource:abstractsortingDataSource;
    sortSource: abstractsortDataSource;
    outsideSource: abstractoutsideDataSource;
    loadingSource: abstractloadingDataSource;
  }

 async getContent(): Promise<HTMLElement>
 {
 await this.updatedContent();
 return this.containerElem;
}

async updatedContent () {
let cards = await this.props.dataSource.getCards("id");
this.containerElem.innerHTML ="";
let contentElem: HTMLElement;

switch(this.mode){
  case DisplayMode.List:
    contentElem = this.getListContent(cards);
    break;

    case DisplayMode.Details:
      contentElem = <ZoneDetails zone={this.props.dataSource.zone}
      cancelcallback={this.showList}
      submitcallback={this.submitCard}/>
      break;

      case DisplayMode.Complete:
        contentElem = <Summary cardId={this.cardId}
        callback = {this.showUnloadList}/>
        break;

        case DisplayMode.unloadlist:
          contentElem = this.getunloadListContent(cards);
          break;

          case DisplayMode.unloadDetails:
            contentElem =<UnloadZoneDetails zone={this.props.unloadSource.zone}
            cancelcallback = {this.showUnloadList}
            submitcallback = {this.submitUnloadCard}/>
            break;

            case DisplayMode.unloadcomplete:
              contentElem = <UnloadSummary cardId={this.cardId}
              callback ={this.showStorageList}/>
              break;

              case DisplayMode.outsidedetails:
                contentElem = <OutsideZoneDetails zone={this.props.outsideSource.zone}
                cancelcallback = {this.showUnloadList}
                submitcallback = {this.submitOutsideCard}/>
                break;

                case DisplayMode.outsidecomplete:
                  contentElem = <OutsideSummary cardId={this.cardId}
                  callback ={this.showList}/>
                  break;

              case DisplayMode.storagelist:
                contentElem = this.getStorageListContent(cards);
                break;

                case DisplayMode.storagedetails:
                  contentElem =  <StorageZoneDetails zone={this.props.storageSource.zone}
                  cancelcallback = {this.showStorageList}
                  submitcallback = {this.submitStorageCard}/>
                  break;

                  case DisplayMode.storagecomplete:
                    contentElem = <StorageSummary cardId={this.cardId}
                    callback = {this.showsortList}/>
                    break;    

                    case DisplayMode.airstripdetails:
                      contentElem = <AirstripZoneDetails zone= {this.props.airstripSource.zone}
                      cancelcallback = {this.showStorageList}
                      submitcallback = {this.submitAirstripCard}/>
                      break;

                      case DisplayMode.airstripcomplete:
                        contentElem=<AirstripSummary cardId={this.cardId}
                        callback ={this.showsortingList}/>
                        break;

                        case DisplayMode.sortinglist:
                          contentElem = this.getsortingListContent(cards);
                          break;

                          case DisplayMode.sortingdetails:
                            contentElem = <SortingZoneDetails zone ={this.props.sortingSource.zone}
                            cancelcallback ={this.showsortingList}
                            submitcallback ={this.submitsortingCard}/>
                            break;

                            case DisplayMode.sortingcomplete:
                              contentElem =<SortingSummary cardId ={this.cardId}
                              callback = {this.showStorageList}/>
                              break;

                              case DisplayMode.sortlist:
                                contentElem = this.getsortListContent(cards);
                                break;

                                case DisplayMode.sortdetails:
                                  contentElem = <SortZoneDetails zone ={this.props.sortSource.zone}
                                  cancelcallback ={this.showsortList}
                                  submitcallback ={this.submitsortCard}/>
                                  break;

                                  case DisplayMode.sortcomplete:
                                    contentElem =<SortSummary cardId={this.cardId}
                                    callback ={this.showStorageList}/>
                                    break;

                                    case DisplayMode.loaddetails:
                                      contentElem = <LoadDetails zone={this.props.loadingSource.zone}
                                      cancelcallback={this.showStorageList}
                                      submitcallback={this.submitloadcard}/>
                                      break;
                                      
                                      case DisplayMode.loadcomplete:
                                        contentElem = <LoadSummary cardId={this.cardId}
                                        callback={this.showList}/>
                                        break;
}
 this.containerElem.appendChild(contentElem);
}

getListContent (cards:Card[]) : HTMLElement {

  return <div>

<Header zone ={this.props.dataSource.zone}
 submitcallback={this.showDetails}/>
   <CardList cards={cards} 
  addToCardCallback={this.addToList} />
  </div>

}
getunloadListContent(cards:Card[]):HTMLElement {

  return <div>

<UnloadHeader zone = {this.props.unloadSource.zone}
submitcallback = {this.showUnloadDetails}
door1 ={this.props.outsideSource.zone}
submitecallback = {this.showoutsidedetails}/>
<UnloadCardList card = {cards}
addToCardCallback={this.addToUnloadList}
addTocardCallback={this.addToOutsideList}/>

  </div>

}

getStorageListContent(cards:Card[]): HTMLElement {

  return <div>

<StorageHeader zone = {this.props.storageSource.zone}
submitcallback = {this.showStorageDetails}
door5 ={this.props.airstripSource.zone}
submitecallback ={this.showAirstripDetails}
door2 = {this.props.loadingSource.zone}
submittcallback = {this.showloadetails}/>
<StorageCardList card = {cards}
addToCardCallback ={this.addToAirstripList}
addTocardCallback ={this.addToStorageList}
addTocardcallback={this.addToloadList}/>

  </div>

}

getsortingListContent (cards:Card[]) : HTMLElement {

  return <div>

<SortingHeader zone ={this.props.sortingSource.zone}
 submitcallback={this.showsortingDetails}/>
   <SortingCardList cards={cards} 
  addToCardCallback={this.addTosortingList} />
  </div>

}

getsortListContent (cards:Card[]) : HTMLElement {

  return <div>

<SortHeader zone ={this.props.sortSource.zone}
 submitcallback={this.showsortDetails}/>
   <SortCardList cards={cards} 
  addToCardCallback={this.addTosortList} />
  </div>

}

addToList = (card:Card) => {
  this.props.dataSource.zone.addCard(card)
  this.updatedContent();
}

showDetails = () => {
  this.mode = DisplayMode.Details;
  this.updatedContent();
}
showList = () => {
  this.mode = DisplayMode.List;
  this.updatedContent();
}

submitCard =() => {
  this.props.dataSource.storeCard().then(id =>{
    this.cardId = id;
    this.props.dataSource.zone = new Zone();
    this.mode = DisplayMode.Complete;
    this.updatedContent();
  })
  }
// unloading
  addToUnloadList =(card:Card) => {

    this.props.unloadSource.zone.addCard(card)
    this.updatedContent();

  }

  showUnloadList =() => {
    this.mode = DisplayMode.unloadlist;
    this.updatedContent();
  }

  showUnloadDetails = () => {
    this.mode = DisplayMode.unloadDetails
    this.updatedContent();
  }

  submitUnloadCard = () => {
    this.props.unloadSource.storeUnloadCard().then(id => {
      this.cardId =id;
      this.props.unloadSource.zone = new Zone();
      this.mode = DisplayMode.unloadcomplete;
      this.updatedContent();
    })
    }

// storage
    addToStorageList =(card:Card) => {

      this.props.storageSource.zone.addCard(card)
      this.updatedContent();
  
    }
    
    showStorageList = () => {
      this.mode = DisplayMode.storagelist
      this.updatedContent();
    }

    showStorageDetails = () => {

      this.mode = DisplayMode.storagedetails
      this.updatedContent();

    }

    submitStorageCard =() => {
      this.props.storageSource.storeStorageCard().then(id => {
        this.cardId =id;
        this.props.storageSource.zone = new Zone();
        this.mode = DisplayMode.storagecomplete;
        this.updatedContent();
      })
    }

    addToAirstripList =(card:Card) => {

      this.props.airstripSource.zone.addCard(card)
      this.updatedContent();
  
    }

    showAirstripDetails =() => {
      this.mode = DisplayMode.airstripdetails
      this.updatedContent();
    }

    submitAirstripCard = () => {
      this.props.airstripSource.storeAirstripCard().then(id => {
        this.cardId =id;
        this.props.airstripSource.zone = new Zone();
        this.mode = DisplayMode.airstripcomplete;
        this.updatedContent();
      })
    }
// sorting

addTosortingList = (card:Card) => {
  this.props.sortingSource.zone.addCard(card)
  this.updatedContent();
}

showsortingDetails = () => {
  this.mode = DisplayMode.sortingdetails;
  this.updatedContent();
}
showsortingList = () => {
  this.mode = DisplayMode.sortinglist;
  this.updatedContent();
}

submitsortingCard =() => {
  this.props.sortingSource.storesortingCard().then(id =>{
    this.cardId = id;
    this.props.sortingSource.zone = new Zone();
    this.mode = DisplayMode.sortingcomplete;
    this.updatedContent();
  })
  }

  // sorting 2

  addTosortList = (card:Card) => {
    this.props.sortSource.zone.addCard(card)
    this.updatedContent();
  }
  
  showsortDetails = () => {
    this.mode = DisplayMode.sortdetails;
    this.updatedContent();
  }
  showsortList = () => {
    this.mode = DisplayMode.sortlist;
    this.updatedContent();
  }
  
  submitsortCard =() => {
    this.props.sortSource.storesortCard().then(id =>{
      this.cardId = id;
      this.props.sortSource.zone = new Zone();
      this.mode = DisplayMode.sortcomplete;
      this.updatedContent();
    })
    }
  
    addToOutsideList =(card:Card) => {

      this.props.outsideSource.zone.addCard(card)
      this.updatedContent();
  
    }

    showoutsidedetails =() => {
      this.mode = DisplayMode.outsidedetails;
      this.updatedContent();
    }
    
    submitOutsideCard = () => {
      this.props.outsideSource.storeOutsideCard().then(id => {
        this.cardId =id;
        this.props.outsideSource.zone = new Zone();
        this.mode = DisplayMode.outsidecomplete;
        this.updatedContent();
      })
    }
    //loading 


addToloadList =(card:Card) => {
  this.props.loadingSource.zone.addCard(card)
  this.updatedContent();
}
    showloadetails =()=> {
      this.mode = DisplayMode.loaddetails;
      this.updatedContent();
    }

    submitloadcard =() => {
      this.props.loadingSource.loadCard().then(id => {
        this.cardId = id;
        this.props.loadingSource.zone = new Zone();
        this.mode =  DisplayMode.loadcomplete;
        this.updatedContent();
      })
    }


}

