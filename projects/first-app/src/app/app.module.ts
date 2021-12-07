import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollingModule} from '@angular/cdk/scrolling';
import {  MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/LoginComponent/login.component';
import { NgifdemoComponent } from './Components/ngifdemo/ngifdemo.component';
import { OnewayBindingComponent } from './Components/oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './Components/twoway-binding/twoway-binding.component';
import { ThenblockComponent } from './Components/thenblock/thenblock.component';
import { NgswitchComponent } from './Components/ngswitch/ngswitch.component';
import { NgforComponent } from './Components/ngfor/ngfor.component';
import { NestedNgforComponent } from './Components/nested-ngfor/nested-ngfor.component';
import { IfSwitchForComponent } from './Components/if-switch-for/if-switch-for.component';
import { LikesdemoComponent } from './Components/likesdemo/likesdemo.component';
import { TrackbydemoComponent } from './Components/trackbydemo/trackbydemo.component';
import { InterCondComponent } from './Components/inter-cond/inter-cond.component';
import { StringRefComponent } from './Components/string-ref/string-ref.component';
import { ArrayRefComponent } from './Components/array-ref/array-ref.component';
import { ObjectRefComponent } from './Components/object-ref/object-ref.component';
import { NgstyleComponent } from './Components/ngstyle/ngstyle.component';
import { KeydemoComponent } from './Components/keydemo/keydemo.component';
import { MousedemoComponent } from './Components/mousedemo/mousedemo.component';
import { EvendemoComponent } from './Components/evendemo/evendemo.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { ChildFilterComponent } from './Components/child-filter/child-filter.component';
import { ParentProductComponent } from './Components/parent-product/parent-product.component';
import { DisplayvalueComponent } from './Components/displayvalue/displayvalue.component';
import { SendvalueComponent } from './Components/sendvalue/sendvalue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrolldemoComponent } from './Components/scrolldemo/scrolldemo.component';
import { MatdemoComponent } from './Components/matdemo/matdemo.component';
import { MatdatepikerComponent } from './Components/matdatepiker/matdatepiker.component';
import { AutcompleteComponent } from './Components/autcomplete/autcomplete.component';
import { PipedemoComponent } from './Pipes/pipedemo/pipedemo.component';
import { UserloginComponent } from './LoginComponent/userlogin/userlogin.component';
import { NgForComponent } from './LoginComponent/ng-for/ng-for.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NgifdemoComponent,
    OnewayBindingComponent,
    TwowayBindingComponent,
    ThenblockComponent,
    NgswitchComponent,
    NgforComponent,
    NestedNgforComponent,
    IfSwitchForComponent,
    LikesdemoComponent,
    TrackbydemoComponent,
    InterCondComponent,
    StringRefComponent,
    ArrayRefComponent,
    ObjectRefComponent,
    NgstyleComponent,
    KeydemoComponent,
    MousedemoComponent,
    EvendemoComponent,
    ParentComponent,
    ChildComponent,
    ChildFilterComponent,
    ParentProductComponent,
    DisplayvalueComponent,
    SendvalueComponent,
    ScrolldemoComponent,
    MatdemoComponent,
    MatdatepikerComponent,
    AutcompleteComponent,
    PipedemoComponent,
    UserloginComponent,
    NgForComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [IfSwitchForComponent]
})
export class AppModule { }
