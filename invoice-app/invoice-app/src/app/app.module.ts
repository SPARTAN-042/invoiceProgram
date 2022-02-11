import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceSheetComponent } from './invoice-sheet/invoice-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateInvoiceComponent,
    InvoiceDetailsComponent,
    InvoiceListComponent,
    InvoiceSheetComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
