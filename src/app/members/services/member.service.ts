import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private translate: TranslateService
  ) { }

  public testTranslate(): void {
    this.translate.get('MEMBER.TEST').subscribe(message => {
      console.warn('from service', message);
    });

    this.translate.get('MENU.TEST').subscribe(message => {
      console.warn('from service', message);
    });
  }
}
