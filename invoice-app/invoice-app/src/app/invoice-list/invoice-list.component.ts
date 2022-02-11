import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../model/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  // invoices: Observable<Invoice[]>;

  constructor(private invoiceService: InvoiceService,
     private router: Router) {}

  ngOnInit(): void {
    // this.reloadData();
  }

  // reloadData() {
  //   this.invoices = this.invoiceService.getInvoicesList();
  // }

  invoiceDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
