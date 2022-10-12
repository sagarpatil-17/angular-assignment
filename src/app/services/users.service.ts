import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  url_users = "https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json";

  one_user = "https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/user-profile.json";

  getData() {
    return this.http.get(this.url_users)
  }

  getUser() {
    return this.http.get(this.one_user)
  }

}
