import React,{useEffect} from 'react';
import './FinalProduct.css';

 const FinalProduct=()=>{

    useEffect(() => {
        loadStoredData();
      }, []); 

      const submitForm=(event)=>{
          event.preventDefault();
          const productsId=event.target.productid.value;
          const priceOfProduct=event.target.price.value;
          const productName=event.target.pname.value;
          const productCategory=event.target.categorys.value;

          const obj={
            productsId,
            priceOfProduct,
            productName,
            productCategory
          }
          localStorage.setItem(obj.productsId,JSON.stringify(obj));
         
          showUserOnScreen(obj);

      }

      function showUserOnScreen(obj){

        if (obj.productCategory === 'Electronics') {
            const parentEl=document.getElementById('category1');
            const childEl=document.createElement('li');
            childEl.textContent=`${obj.productsId}-${obj.priceOfProduct}-${obj.productName}-${obj.productCategory}`
            parentEl.appendChild(childEl);
    
            const deleteButton=document.createElement('input');
            deleteButton.type="button";
            deleteButton.value='Delete Product';
            childEl.appendChild(deleteButton);
            parentEl.appendChild(childEl);
            deleteButton.onclick=()=>{
                 localStorage.removeItem(obj.productsId);
                 parentEl.removeChild(childEl);
            }
        }
        if (obj.productCategory === 'Food') {
            const parentEl=document.getElementById('category2');
            const childEl=document.createElement('li');
            childEl.textContent=`${obj.productsId}-${obj.priceOfProduct}-${obj.productName}-${obj.productCategory}`
            parentEl.appendChild(childEl);
    
            const deleteButton=document.createElement('input');
            deleteButton.type="button";
            deleteButton.value='Delete Product';
            childEl.appendChild(deleteButton);
            parentEl.appendChild(childEl);
            deleteButton.onclick=()=>{
                 localStorage.removeItem(obj.productsId);
                 parentEl.removeChild(childEl);
            }
        }
        if (obj.productCategory === 'skinCare') {
            const parentEl=document.getElementById('category3');
            const childEl=document.createElement('li');
            childEl.textContent=`${obj.productsId}-${obj.priceOfProduct}-${obj.productName}-${obj.productCategory}`
            parentEl.appendChild(childEl);
    
            const deleteButton=document.createElement('input');
            deleteButton.type="button";
            deleteButton.value='Delete Product';
            childEl.appendChild(deleteButton);
            parentEl.appendChild(childEl);
            deleteButton.onclick=()=>{
                 localStorage.removeItem(obj.productsId);
                 parentEl.removeChild(childEl);
            }
        }
        
        // const parentEl=document.getElementById('items');
        // const childEl=document.createElement('li');
        // childEl.textContent=`${obj.productsId}-${obj.priceOfProduct}-${obj.productName}-${obj.productCategory}`
        // parentEl.appendChild(childEl);

        // const deleteButton=document.createElement('input');
        // deleteButton.type="button";
        // deleteButton.value='Delete Product';
        // childEl.appendChild(deleteButton);
        // parentEl.appendChild(childEl);
        // deleteButton.onclick=()=>{
        //      localStorage.removeItem(obj.productsId);
        //      parentEl.removeChild(childEl);
        // }
     
    
      
      }
           
    

      function loadStoredData(){
        const parentEl = document.getElementById('items');
  
 
           parentEl.innerHTML = '';

        for(let i=0;i<localStorage.length;i++){
            const key=localStorage.key(i);
            const storedValue=localStorage.getItem(key);
             const parseValue=JSON.parse(storedValue);
             console.log(parseValue);
             showUserOnScreen(parseValue);
        
        }
      }
    //   window.addEventListener("DOMContentLoaded",()=>{
    //     loadStoredData();
    //  });
    return(
         <div className='container'>
             <form onSubmit={submitForm}>
                <div>
                <label htmlFor="productid">Product ID:</label>
                <input type="number" id="productid" name="productid"></input>
                </div>
                <div>
                    <label htmlFor="price">Selling Price :</label>
                    <input type="number" name="price" id="price"></input>
                </div>
                <div>
                    <label htmlFor="pname">Product Name :</label>
                    <input type="text" name="pname" id="pname"></input>
                </div>
                <div>
                    <label htmlFor="category">Choose a Category:</label>
                    <select name='categorys'>
                        <option>Electronics</option>
                        <option>Food</option>
                        
                        <option>skinCare</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Add Product</button>
                </div>
             </form>

             <div id='productsitems'>
                <h1>Products</h1>
                <ul id='items'></ul>
             </div>
             <div id='category1'>
                <h2>Electronics Items</h2>
             </div>
             <div id='category2'>
                <h2>Food Items </h2>
             </div>
             <div id='category3'>
                <h2>Skin Care Items</h2>

               
             </div>
            
         </div>
    );
 }
 export default FinalProduct;