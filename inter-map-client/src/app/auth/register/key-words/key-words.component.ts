import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable, Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {AuthService} from '../../auth.service';

export interface KeyWord {
  name: string;
}

@Component({
  selector: 'app-key-words',
  templateUrl: './key-words.component.html',
  styleUrls: ['./key-words.component.css']
})

export class KeyWordsComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  ctrl = new FormControl();
  filteredKeyWords: Observable<string[]>;
  keyWords: string[] = [];
  allKeyWords: string[] = ['Java', 'C++', 'C#', 'Android', 'Angular'];
  myKeys: string[] = [];

  @ViewChild('input', {static: false}) input: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(private authService: AuthService) {
    this.filteredKeyWords = this.ctrl.valueChanges.pipe(
      startWith(null),
      map((keyWord: string | null) => keyWord ? this._filter(keyWord) : this.allKeyWords.slice()));
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;
      if (this.keyWords.lastIndexOf(value) === -1) {
        if ((value || '').trim()) {
          this.keyWords.push(value.trim());
        }
      }

      if (input) {
        input.value = '';
      }

      this.ctrl.setValue(null);
    }
  }

  remove(keyWord: string): void {
    const index = this.keyWords.indexOf(keyWord);
    // this.allKeyWords.(keyWord);
    if (index >= 0) {
      this.keyWords.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if (!this.myKeys.includes(value)) {
      this.myKeys.push(value);
    }
    console.log(this.myKeys);
    if (this.keyWords.lastIndexOf(value) === -1) {
      this.keyWords.push(event.option.viewValue);
    }
    this.input.nativeElement.value = '';
    this.ctrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allKeyWords.filter(keyWord => keyWord.toLowerCase().indexOf(filterValue) === 0);
  }
  onClickFinish() {
    let field = '';
    for (const f of this.myKeys) {
      field = field.concat(f.toString());
      field = field.concat(',');

    }
    this.authService.uploadFieldCompany(field);
  }

}
