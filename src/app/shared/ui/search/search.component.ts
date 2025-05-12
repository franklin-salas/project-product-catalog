import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  form = new FormGroup({
    query: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  onSubmit() {
    if (this.form.valid) {
      this.search.emit(this.form.value.query!);
    }
  }
}
