import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MessageDto} from "./dtos/message-dto";
import {ModelFormGroup} from "../../tokens/model-form-group";
import {HttpClient} from "@angular/common/http";
import {first} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {SuccessComponent} from "./success/success.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButton,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  public loaded = false;
  public sending = false;
  public formGroup?: ModelFormGroup<MessageDto>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly httpClient: HttpClient,
    private readonly dialog: MatDialog,
    ) {
  }

  public ngOnInit(): void {
    this.setForm()
  }

  public get canSend(): boolean {
    return this.loaded && !this.sending && Boolean(this.formGroup?.valid) && Boolean(this.formGroup?.dirty);
  }

  public send(): void {
    if (!this.canSend || this.formGroup == null) return;

    const form = this.formGroup.getRawValue();
    form.accessKey = 'e8957dc5-2573-4cec-b37b-908cb2dbe489';
    this.httpClient.post('https://api.staticforms.xyz/submit', form)
      .pipe(first())
      .subscribe({
        next: () => {
          this.formGroup?.reset();
          this.dialog.open(SuccessComponent);
        }
      });
  }

  private setForm(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      accessKey: [''],
      organization: [''],
    });
    this.loaded = true;
  }
}
