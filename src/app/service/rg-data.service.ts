import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RGDataService {

  private url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url + '/api/shop/items');
  }

  getById(id) {
    if (id.value >= 1 && id.value <= 3) {
      return this.http.get(this.url + '/api/shop/items/' + id);
    }
  }

}
