
//点击新增显示弹窗
function showwindow(){
   let addwin = document.getElementById('addwin')
   addwin.style.display='flex'
}

//点击取消按钮 退出弹窗
function hideaddwin(){
    let addwin = document.getElementById('addwin')
    addwin.style.display='none'
}


//确定按钮
function yesaddwin(){
    let addname = document.getElementById('add-name') 
    let addpaw = document.getElementById('add-paw') 
    let addsex = document.getElementById('add-sex') 

    let tabody = document.getElementById('tabody') 


    if(addname.value=='' || addpaw.value=='' || addsex.value==''){
        alert('信息不能为空')
        return false;
    
    }
    tabody.innerHTML +=`<tr>
                            <td><input type="checkbox" class="sta"></td>
                            <td>${addname.value}</td>
                            <td>${addpaw.value}</td>
                            <td>${addsex.value}</td>
                            <td>
                                <button onclick="showxiu(this)">修改</button>
                                <button onclick="shanchu(this)">删除</button>
                            </td>
                        </tr>
                      `;
   hideaddwin();
}


//删除按钮
function shanchu(obj){
   obj.parentElement.parentElement.remove();
}


//修改按钮
function showxiu(obj){

    childs = obj.parentElement.parentElement.children;
    let xiuname = document.getElementById('xiuname') 
    let xiupaw = document.getElementById('xiupaw') 
    let xiusex = document.getElementById('xiusex') 
    console.log(childs[1].innerHTML,childs[2].innerHTML,childs[3].innerHTML)
     
    xiuname.value = childs[1].innerHTML
    xiupaw.value = childs[2].innerHTML
    xiusex.value = childs[3].innerHTML

    let xiumendframe = document.getElementById('xiumendframe') 
    xiumendframe.style.display = 'flex';
}

//取消 修改界面
function hidexiu(){
    let xiumendframe = document.getElementById('xiumendframe') 
    xiumendframe.style.display = 'none';

}

//修改
function xiuframe(){
    let xiuname = document.getElementById('xiuname') 
    let xiupaw = document.getElementById('xiupaw') 
    let xiusex = document.getElementById('xiusex') 

    childs[1].innerHTML = xiuname.value
    childs[2].innerHTML = xiupaw.value
    childs[3].innerHTML = xiusex.value

    hidexiu()
}
//全选
function state(){
   
    let select = document.getElementById('select') 
    let arr= document.getElementsByClassName('sta');
     
    for(let i=0; i<arr.length;i++){
        if(select.checked==true){
            arr[i].checked = true;
        }else{
            arr[i].checked = false;
        }
     
    }
    
}

//全选删除
function shanchutem(){
    let arr= document.getElementsByClassName('sta');

    for(let i=arr.length-1; i>=0 ;i--){
        if(arr[i].checked ==true){
        
          arr[i].parentElement.parentElement.remove();
        }
    
    }

}