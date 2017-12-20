import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mt-radio-inputs',
  templateUrl: './radio-inputs.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioInputsComponent),
      multi: true
    }]
})
export class RadioInputsComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];

  value: any;

  onChange: any;
  onTouched: any;

  constructor() {
  }

  ngOnInit() {
  }

  setValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  };

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  };

  setDisabledState?(isDisabled: boolean): void {
  };
}
