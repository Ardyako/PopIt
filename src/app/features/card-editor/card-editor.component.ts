import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { take } from 'rxjs/operators';

import { DataService } from '@mf-app/shared/data-service/data.service';


import { ONE, ONE_HUNDRED, TEN } from '@mf-app/shared/constants';

import { DASHBOARD_PATH } from '../dashboard';

@Component({
  selector: 'mf-card-editor',
  templateUrl: './card-editor.component.html',
  styleUrls: ['./card-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEditorComponent implements OnInit {

  public get title(): AbstractControl | null {
    return this.cardEditorForm.get('title');
  }

  public get category(): AbstractControl | null {
    return this.cardEditorForm.get('category');
  }

  public get rating(): AbstractControl | null {
    return this.cardEditorForm.get('rating');
  }

  public get description(): AbstractControl | null {
    return this.cardEditorForm.get('description');
  }

  private _cardEditorForm: FormGroup;
  public get cardEditorForm(): FormGroup {
    return this._cardEditorForm;
  }

  private _id: number;
  public get id(): number {
    return this._id;
  }

  public constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _dataService: DataService,
  ) {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this._cardEditorForm = this._formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(TEN)]],
      category: ['', [Validators.required, Validators.maxLength(TEN)]],
      rating: ['', [Validators.required, Validators.pattern(/^([1-9]|10)$/)]],
      description: ['', [Validators.required, Validators.maxLength(ONE_HUNDRED)]],
    });
  }

  public ngOnInit(): void {
    this._dataService.getDescription(this.id).pipe(take(ONE))
      .subscribe(
        data => {
          this._cardEditorForm.patchValue({
            title: data.title,
            category: data.category,
            rating: data.rating,
            description: data.description,
          });
        },
      );
  }

  public backHandler(): void {
    this._router.navigate([DASHBOARD_PATH]);
  }

  public submitHandler(): void {
    this._dataService.updateFilmData(this.cardEditorForm.value, this.id)
      .pipe(take(ONE))
      .subscribe(
        () => {
          this._router.navigate([DASHBOARD_PATH]);
        },
        () => console.log('Error!'),
      );
  }

}
