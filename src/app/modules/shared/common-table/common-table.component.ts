import { Component,  Input, OnInit, Output, ViewChild ,EventEmitter} from '@angular/core';
import { MatDialog,  } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  // @Output() newItemEvent = new EventEmitter();
  @Output() newItemEvent = new EventEmitter<any>();
  headerRow: any = [];
  data = {
    Module: '',
    typeOfPopUp: '',
    acceptLabel: '',
    warning: '',
    rejectLable: '',
  }

  testPaginator = {
    length: 1000,
    pageSize: 10,
    pageIndex: 1
  };
  @Input() pagination=false;
  @Input() heading:string='';

  @Input() columns!: any;
  @Input() dataSourceForTable!: any;
  @Input() paginationSizes: number[] = [5, 10, 15, 23];
  @Input() defaultPageSize = this.paginationSizes[1];

  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort!: MatSort;

  @Input() set pageSize(size: any) {
    if (size) {
      this.matPaginator._changePageSize(size);
    }
  }

  constructor(public sanitizer:DomSanitizer,
    public dialog: MatDialog,
    // public dialogRef: MatDialogRef<QialificationEditComponent>,
    // @Inject(MAT_DIALOG_DATA) public dialogData: any,
    ) { }


  ngOnInit(): void {
    this.columns.map((tableColumn: any) => this.headerRow.push(tableColumn.heading));
  }
  ngAfterViewInit() {
    this.dataSourceForTable.sort = this.matSort;
    this.dataSourceForTable.paginator = this.matPaginator;
    // console.log(this.dataSourceForTable);
    
  }
  openDialog(){}
  // openDialog(dialogType: string): void {
  //   // console.log(dialogType);
  //   switch (dialogType) {

  //     case 'visibility': {
  //       this.data.Module = 'ClientManagement';
  //       this.data.typeOfPopUp = 'Are you sure you want to unblock this client ?'
  //       this.data.warning = 'Unblock Client ?'

  //       this.data.acceptLabel = 'Yes'
  //       this.data.rejectLable = 'No'
  //     }
  //       break;
  //     case 'block': {
  //       this.data.Module = 'ClientManagement';
  //       this.data.warning = 'Are you sure you want to block this client ?'
  //       this.data.typeOfPopUp = 'Unblock Client ?'

  //       this.data.acceptLabel = 'Yes'
  //       this.data.rejectLable = 'No'
  //     }
  //       break;
  //     case 'archive': {
  //       this.data.Module = 'ClientManagement';
  //       this.data.warning = 'Are you sure you want to remove this client ?'
  //       this.data.typeOfPopUp = 'Unblock Client ?'

  //       this.data.acceptLabel = 'Yes'
  //       this.data.rejectLable = 'No'
  //     }

  //       break;
  //       case 'delete': {
  //         this.data.Module = 'ClientManagement';
  //         this.data.warning = 'Are you sure you want to delete ?'
  //         this.data.typeOfPopUp = 'Do you want to delete ?'

  //         this.data.acceptLabel = 'Yes'
  //         this.data.rejectLable = 'No'
  //       }

  //         break;

  //     default:
  //       break;
  //   }

  //   const dialogRef = this.dialog.open(, {
  //     width: '450px',
  //     data: this.data
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.animal = result;
  //   });
  // }
  action(item:any){
    console.log(item);
    this.newItemEvent.emit(item)
    
  }
}
