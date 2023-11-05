# Ecommerce-Wp
Ecommerce Website for WhatsApp Business Model

### Star the repo to show support 

### Setup
> Go to Google sheets

![image](https://github.com/healer-op/Ecommerce-Wp/assets/65026164/43ca8263-62f3-4726-a27b-3de97ce5071c)

> Make sheet name like this

![image](https://github.com/healer-op/Ecommerce-Wp/assets/65026164/ddb067a1-3eb0-4ee1-91aa-fa257ff062b3)


> Open App Script
> paste this code
```
function doGet(e) {
  var sheet =SpreadsheetApp.getActive();
  var nse =sheet.getSheetByName("Sheet1");
  var data = [];
  var rlen = nse.getLastRow();
  var clen = nse.getLastColumn();
  var rows = nse.getRange(1,1,rlen,clen).getValues();
  for(var i =1 ;i< rows.length ; i++){
    var datarow = rows[i];
    var record = {};
    for(var j=0;j<clen ;j++){
      record[rows[0][j]] =datarow[j];
    }
    data.push(record);
  }
  console.log(data);
  var result =JSON.stringify(data);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
var sheet =SpreadsheetApp.getActive();
var nse =sheet.getSheetByName("Sheet1");
function doPost(e) {
 

  var action = e.parameter.action;
  var pass = e.parameter.pass;
  if(pass=="E N T E R   Y O U R    P A S S W O R D" && action =="addUser"){
    return addUser(e);
  }
  else{
    return ContentService.createTextOutput("error").setMimeType(ContentService.MimeType.TEXT);
  }
  

} 

function addUser(e){
  var user = JSON.parse(e.postData.contents);

  nse.appendRow([user.picture,user.name,user.price,user.category,user.tags]);

  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);

}
```

> Click Deploy
> New Deployment

![image](https://github.com/healer-op/Ecommerce-Wp/assets/65026164/693d2299-cb99-43b0-8f91-c45534288775)

> keep the same settings

![image](https://github.com/healer-op/Ecommerce-Wp/assets/65026164/94f5b592-5de3-44c9-a643-f1817d746df1)

> follow the steps and get this link 

![image](https://github.com/healer-op/Ecommerce-Wp/assets/65026164/68288b4e-f379-4fea-a8ba-936fdb5922bc)

> open code in visual studio code and replace the link

> Deploy on github or extrenal clients done
