import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
  public get nativeWindow(): Window {
    return window;
  }

  public get nativeDocument(): Document {
    return document;
  }
}
