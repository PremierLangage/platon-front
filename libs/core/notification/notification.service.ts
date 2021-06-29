import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    private NOTIFICATIONS_URL = "https://platon.dev/api/v1/notifications/";
    constructor(private httpClient: HttpClient) {}

    public getNotifications(){
        return this.httpClient.get(this.NOTIFICATIONS_URL);
    }

}
