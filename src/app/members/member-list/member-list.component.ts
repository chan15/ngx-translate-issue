import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private memberService: MemberService
  ) {
    this.translate.get('MEMBER.TEST').subscribe(message => {
      console.warn('from component', message);
    });
    this.translate.get('MENU.TEST').subscribe(message => {
      console.warn('from component', message);
    });

    this.memberService.testTranslate();
  }

  ngOnInit(): void {
  }

}
