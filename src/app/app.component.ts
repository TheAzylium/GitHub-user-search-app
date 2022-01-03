import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  appForm = this._fb.group({
    name: [undefined, Validators.required],
  });

  isDarkTheme: boolean = false;

  results: any;

  noResult: boolean = false;

  constructor(private _fb: FormBuilder, private _appService: AppService) {}

  ngOnInit() {
    this.getUser("octocat");
  }

  getUser(userName: string) {
    this._appService.getUsers(userName).subscribe(
      (user) => {
        this.noResult = false;
        this.results = user;
      },
      (error) => {
        this.noResult = true;
      }
    );
  }

  submit() {
    const userName = this.appForm.getRawValue().name;
    this.getUser(userName);
  }
}
