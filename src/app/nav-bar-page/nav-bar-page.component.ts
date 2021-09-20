import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DialogContentExampleDialogComponent } from '../dialog-content-example-dialog/dialog-content-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar-page',
  templateUrl: './nav-bar-page.component.html',
  styleUrls: ['./nav-bar-page.component.css']
  
})
export class NavBarPageComponent {

  step = 0;
  
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  

  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog) {}
  setStep(index: number) {
    this.step = index;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
    }
