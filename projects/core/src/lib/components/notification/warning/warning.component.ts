import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { NotificationDataModel } from '../../../models/notification/notification-data.model';

@Component({
  selector: 'warning-notification',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss', '../notification-component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WarningComponent {
  public animationDuration = 5000;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: NotificationDataModel,
              private readonly snackBarRef: MatSnackBarRef<WarningComponent>) {
    this.animationDuration = data.duration ?? 5000;
  }

  public closeSnackbar() {
    this.snackBarRef.dismiss();
  }
}
