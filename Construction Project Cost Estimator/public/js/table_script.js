function edit_row(no)
{
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    var name=document.getElementById("name"+no);
    var description=document.getElementById("description"+no);
    var unitCost=document.getElementById("unitCost"+no);
    var inStock=document.getElementById("inStock"+no);
    var discount=document.getElementById("discount"+no);
    var discountQty=document.getElementById("discountQty"+no);


    var name_data=name.innerHTML;
    var description_data=description.innerHTML;
    var unitCost_data=unitCost.innerHTML;
    var inStock_data=inStock.innerHTML;
    var discount_data=discount.innerHTML;
    var discountQty_data=discountQty.innerHTML;


    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    description.innerHTML="<input type='text' id='description_text"+no+"' value='"+description_data+"'>";
    unitCost.innerHTML="<input type='number' id='unitCost_text"+no+"' value='"+unitCost_data+"'>";
    inStock.innerHTML="<input type='number' id='inStock_text"+no+"' value='"+inStock_data+"'>";
    discount.innerHTML="<input type='number' id='discount_text"+no+"' value='"+discount_data+"'>";
    discountQty.innerHTML="<input type='number' id='discountQty_text"+no+"' value='"+discountQty_data+"'>";

}

function save_row(no)
{
    var name_val=document.getElementById("name_text"+no).value;
    var description_val=document.getElementById("description_text"+no).value;
    var unitCost_val=document.getElementById("unitCost_text"+no).value;
    var inStock_val=document.getElementById("inStock_text"+no).value;
    var discount_val=document.getElementById("discount_text"+no).value;
    var discountQty_val=document.getElementById("discountQty_text"+no).value;
    var result = name_val+'\n'+description_val+'\n'+unitCost_val+'\n'+inStock_val+ '\n'+discount_val+ '\n'+discountQty_val;
    console.log(result);

    document.getElementById("name"+no).innerHTML=name_val;
    document.getElementById("description"+no).innerHTML=description_val;
    document.getElementById("unitCost"+no).innerHTML=unitCost_val;
    document.getElementById("inStock"+no).innerHTML=inStock_val;
    document.getElementById("discount"+no).innerHTML=discount_val;
    document.getElementById("discountQty"+no).innerHTML=discountQty_val;

    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
    document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    var name=document.getElementById("name").value;
    var description=document.getElementById("description").value;
    var unitCost=document.getElementById("unitCost").value;
    var inStock=document.getElementById("inStock").value;
    var discount=document.getElementById("discount").value;
    var discountQty=document.getElementById("discountQty").value;
    var result = name+'\n'+description+'\n'+unitCost+'\n'+inStock+ '\n'+discount+ '\n'+discountQty;
    console.log(result);

    var table=document.getElementById("data_table");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name"+table_len+"'>"+name+"</td><td id='description"+table_len+"'>"+description+"</td><td id='unitCost"+table_len+"'>"+unitCost+"</td><td id='inStock"+table_len+"'>"+inStock+"</td><td id='discount"+table_len+"'>"+discount+"</td><td id='discountQty"+table_len+"'>"+discountQty+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
    document.getElementById("save_button"+table_len).style.display="none";
    var updatedRow = table.rows[table_len].cells[6];
    console.log(updatedRow);
    document.getElementById("name").value="";
    document.getElementById("description").value="";
    document.getElementById("unitCost").value="";
    document.getElementById("inStock").value="";
    document.getElementById("discount").value="";
    document.getElementById("discountQty").value="";
}





