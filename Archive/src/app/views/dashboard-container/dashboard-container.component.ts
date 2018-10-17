import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { State, Store, select } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { LoadAction, LoadActionsList, ILoadState } from 'src/app/reducers/load/load.actions';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit, AfterViewInit {

  itemsContainer: any[] = [];
  // TODO; items module class
  
  constructor(private store: Store<AppState>) {
    this.store.pipe(select('loadState')).subscribe((state: ILoadState) => {
      this.itemsContainer = Array.from(state.payload);
    });
    this.store.dispatch(new LoadAction(LoadActionsList.LOAD_INITIAL));
  }

  ngOnInit() {

  };

  ngAfterViewInit(): void {


  };


}
