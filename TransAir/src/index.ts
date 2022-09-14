//import { localDataSource } from "./data/localDataSource";
import { RemoteDataSource } from "./Outside/remoteDataSource";
import { HTMLDisplay } from "./htmlDisplay";
import "bootstrap/dist/css/bootstrap.css";
import { UnloadDataSource } from "./unloading/Door3/unload_dataSource";
import {StorageDataSource} from "./Sorting/door6/storage_dataSource";
import {AirstripDataSource} from "./Sorting/door5/airstrip_dataSource";
import {SortingDataSource} from "./Airstrip/sortingdatasource";
import {SortDataSource} from "./Storage/sorting_datasource";
import {OutsideDataSource} from "./unloading/Door1/oustside_dataSource";
import {loadDataSource} from "./Sorting/door2/load_dataSource"

let ds = new RemoteDataSource();
let us = new UnloadDataSource();
let ss =  new StorageDataSource();
let as =  new AirstripDataSource();
let so = new SortingDataSource();
let st = new  SortDataSource();
let os = new OutsideDataSource();
let ls = new loadDataSource();

function displayData(): Promise<HTMLElement> {
    let display = new HTMLDisplay();
    display.props = {
        dataSource: ds,
        unloadSource: us,
        storageSource:ss,
        airstripSource:as,
        sortingSource: so,
        sortSource:st,
        outsideSource:os,
        loadingSource: ls
    }
    return display.getContent();
}

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        displayData().then(elem => {
            let rootElement = document.getElementById("app");
            rootElement.innerHTML = "";
            rootElement.appendChild(elem);
        });
    }
};