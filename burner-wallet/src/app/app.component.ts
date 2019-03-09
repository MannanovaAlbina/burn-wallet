import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {BurnWalletService} from './burn-wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  tokens = ['BKX', 'KNC', 'STS'];

  loading$ = new BehaviorSubject<boolean>(false);

  coins$: Observable<number>;

  selectedToken: string;

  burned$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly service: BurnWalletService, fb: FormBuilder) {
    this.form = fb.group({
      token: [''],
      amount: ['']
    });
  }

  ngOnInit() {
  }

  submit() {
    this.burned$.next(false);
    this.loading$.next(true);
    this.coins$ = this.service.estimate(this.form.value.token, this.form.value.amount)
      .pipe(shareReplay(1));
    this.coins$.subscribe(() => this.loading$.next(false));
    this.selectedToken = this.form.value.token;
  }

  burn() {
    this.service.burn().subscribe(value => this.burned$.next(value));
  }

}
