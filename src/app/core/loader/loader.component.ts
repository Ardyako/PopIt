import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LoaderService } from './loader-service/loader.service';


@Component({
  selector: 'mf-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {

  public get loaderService(): LoaderService {
    return this._loaderService;
  }

  public constructor(private _loaderService: LoaderService) {
  }

}
