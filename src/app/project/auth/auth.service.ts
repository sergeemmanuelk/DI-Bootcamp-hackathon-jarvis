import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JUser } from '@trungk18/interface/user';
import { of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { AuthStore } from './auth.store';
import { environment } from 'src/environments/environment';
import { LoginPayload } from '@trungk18/project/auth/loginPayload';
import { StorageService } from '@trungk18/core/services/storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl: string;
  constructor(private _http: HttpClient, private _store: AuthStore , private _storage  : StorageService) {
    this.baseUrl = environment.apiUrl;
  }


  register(user:any ) {
    this._store.setLoading(true);
    this._storage.set('jarvis_user',JSON.stringify(user));
    return of({message : "Utilisateur crée avec succes"})
  }

  login({ email = '', password = '' }: LoginPayload) {
    this._store.setLoading(true);
    this._storage.get("jarvis_user").subscribe((user : any)=>{

      const userConnected = JSON.parse(user);
      console.log(userConnected);
      if(!!userConnected) {

        if(userConnected.email == email ) {
          this._store.update((state)=>({
            ...state,
            ...userConnected
          }))
          return of({user : userConnected,message : "utilisateur connecté"})
        }
        return of({message : 'email ou mot de passe incorrect'})
      }
    });

    return of({message : "erreur lors de la recuperation des données veuillez contacter les administrateurs"})

    /*this._http
      .get<JUser>(`${this.baseUrl}/auth.json`)
      .pipe(
        map((user) => {
          this._store.update((state) => ({
            ...state,
            ...user
          }));
        }),
        finalize(() => {
          this._store.setLoading(false);
        }),
        catchError((err) => {
          this._store.setError(err);
          return of(err);
        })
      )
      .subscribe();
    */
  }
}


