import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurnWalletService {

  constructor() { }

  public estimate(token: string, estimate: number): Observable<number> {
    return of(estimate);
  }

  public burn(): Observable<boolean> {
    return of(true);
  }
}
