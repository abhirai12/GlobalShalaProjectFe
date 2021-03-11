import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableDataService } from '../../services/table-data.service';

export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  action:string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'first_name', 'last_name', 'email', 'avatar', 'Action'];
  dataSource: MatTableDataSource<UserData>;
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource?.data.forEach(tableList => this.selection.select(tableList));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(tableList?: any): string {
    if (!tableList) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(tableList) ? 'deselect' : 'select'} tableList ${tableList.position + 1}`;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  tableList: any;
  constructor(private readonly tabledata: TableDataService) {
    this.tabledata.getData().subscribe((rt) => {
      this.tableList = rt;
      this.dataSource = new MatTableDataSource<UserData>(this.tableList.data);
      console.log(rt)
      this.dataSource.paginator = this.paginator;
      console.log('b', this.dataSource)
      this.dataSource.sort = this.sort;
      
    });
  }
  ngOnInit() {

  }

  // User profile which show in alert box
  profile(id) {
    let index = this.tableList.data.findIndex(ids => ids.id === id);
    const row = this.tableList.data;
    const userId = row[index].id;
    const frst_name = row[index].first_name;
    const last_name = row[index].last_name;
    const email = row[index].email;
    const alrt = `                 ID : ${userId} , 
                 First Name : ${frst_name}
                 Last Name : ${last_name} , 
                 Email : ${email} , ` 
    alert(alrt);
  }

//  user work fuction
  work(id){
    alert("work in progress!!!!")
  }

  // user contacts function
  con(id){
    alert("contact page are work!!!!")
  }
}








