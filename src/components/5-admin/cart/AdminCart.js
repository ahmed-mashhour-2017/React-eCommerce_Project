import React from 'react'
import './admin_cart.css'
export default function AdminCart() {
  return (
   <>
   
    <div className="cartBox">
        
        {/* <form [formGroup]="form">
            <div className="row">
                    <div className="col-md-3">
                        <label for="">Start Date</label>
                        <input type="date" formControlName="start" className="form-control">
                    </div>
                    <div className="col-md-3">
                        <label for="">End Date</label>
                        <input type="date"  formControlName="end" className="form-control" >
                    </div>
                    <div className="col-md-2 d-flex align-items-end">
                        <button className="btn btn-success" (click)="applyFilter()" >Apply</button>
                    </div>
            </div>
        </form> */}
            
        <table className="table table-striped">
            <thead>
                <tr className="text-center">
                    <th></th>
                    <th>Date</th>
                    <th >Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* <tr *ngFor="let item of carts; let index = index" >
                    <td></td>
                    <td>{{item.date | date:"longDate"}}</td>
                    <td>
                      {{item.products.length}}
                    </td>
                    <td >
                        <button className="btn btn-danger mx-2" (click)="deleteCart(item.id)" >Delete</button>
                        <button className="btn btn-primary" data-toggle="modal" data-target="#viewCart" (click)="view(index)">View</button>
                    </td>
                </tr> */}
                {
                  
                }
            </tbody> 
        </table>
        
    </div>



      <div className="modal fade " id="viewCart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered max_width"  >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Cart Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <div className="cartBox">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className='w-25'>Quantity</th>
                                <th>Totle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr *ngFor="let item of products; let i = index">
                                <td><img src="{{item.item.image}}" alt=""></td>
                                <td>{{item.item.title}}</td>
                                <td>{{item.item.price}} L.E</td>
                                <td>
                                    {{item.quantity}}
                                </td>
                                <td>{{item.item.price * item.quantity }} L.E</td>
                            </tr> */}
                        </tbody> 
                    </table>
                </div>
                
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
