import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ToastService {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    if (false) {
      console.log(`${message} - ${action}`);
    } else {
      // setTimeout guards against `ExpressionChangedAfterItHasBeenCheckedError`
      setTimeout(() => {
        this.snackBar.open(message, action, {
          duration: 2000
        });
      }, 0);
    }
  }
}
