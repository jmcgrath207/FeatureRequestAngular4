import { NgModule }      from '@angular/core';
import {ReversePipe} from "./reverse.pipe";
import {ReverseIteratePipe} from "./reverse-iterate.pipe";


@NgModule({
  imports:        [],
  declarations:   [ReversePipe, ReverseIteratePipe],
  exports:        [ReversePipe, ReverseIteratePipe],
})

export class PipeModule {
}
