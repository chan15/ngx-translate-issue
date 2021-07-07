import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/member/', '.json');
}

@NgModule({
  declarations: [
    MemberListComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      isolate: true,
      extend: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient],
      }
    })
  ]
})
export class MembersModule {}
