var leftMenu;
var form;
var tableData = [];

bindClickEvent();
function bindClickEvent(){
  leftMenu = document.getElementsByClassName('left-menu')[0];
  leftMenu.addEventListener('click', changeMenu,false);
  form = document.getElementsByClassName('addStuForm')[0];
  // form.addEventListener('click', changeForm, false);

  var editStudentBtn = document.getElementById('edit-student-btn');
  editStudentBtn.addEventListener('click', changeForm, false);

  var tbody = document.getElementById('tbody');
  tbody.addEventListener('click', tbodyClick, false);

  var mask = document.getElementById("mask");
  mask.addEventListener('click',function(){
      document.getElementsByClassName("_editStu")[0].classList.add('hidden');
  } , false);

  var addNewStuBtn = document.getElementById('add_New_Stu');
  addNewStuBtn.addEventListener('click', updataForm, false);
  // addNewStuBtn.addEventListener('click', function(e){
  //       changeStudentInfo(e, '/api/student/updateStudent', 'editStuForm');
  // }, false);

  var studentListTab = document.getElementsByClassName('stu')[0];
  studentListTab.click();
}


function updataForm(e){
  e.preventDefault();
  var form = document.getElementsByClassName('editStuForm')[0];
  var data = editStu(form);
  console.log(data);
  if(!data){
    return;
  }
  var confirm = window.confirm('确认更新数据？');
if(confirm){
  transferData('/api/student/updateStudent', data, editFormFun);

  var studentListTab = document.getElementsByClassName('stu')[0];
          studentListTab.click();
  //if (id == 'edit-student-form') {
  var mask = document.getElementsByClassName('mask')[0];
      mask.click();
}

  //        }
}

// 编辑学生
function changeStudentInfo(e, url, id)  {
    // 阻止表单的默认提交刷新事件
    e.preventDefault();
    // 获取新增表单元素
    //var form = document.getElementById(id);
    var form = document.getElementsByClassName(id)[0];
    // 获取表单数据内容

    var data = editStu(form);

    if (!data) {
        return false;
    }
    var msg = '';
    if (id == 'edit-student-form') {
        msg = '是否更新数据?';
    } else {
        msg = '提交成功, 是否跳转页面？'
    }

    // 保存到服务器端
    transferData(url, data, function () {
        // 确认弹框是否跳转页面
        var isTurnPage = confirm(msg);
        // 如果是 则跳转到列表页
        if (isTurnPage) {
            // 手动触发列表导肮的点击事件
            var studentListTab = document.getElementsByClassName('stu')[0];
            studentListTab.click();
            if (id == 'editStuForm') {
                var mask = document.getElementsByClassName('mask')[0];
                mask.click();
            }
        }
        // 重置表单
        form.reset();
    });
   }


function editStu(form){
  var name = form.name.value;
  var sNo = form.sNo.value;
  var birth = form.birth.value;
  var sex = form.sex.value;
  var phone = form.phone.value;
  var email = form.email.value;
  var address = form.address.value;
  if (!name || !sNo || !birth || !phone || !email || !address) {
      alert('部分数据未填写，请填写完成后提交');
      return false;
  }
  return {
    name: name,
    sNo: sNo,
    birth: birth,
    sex: sex,
    phone: phone,
    email: email,
    address: address,
  }

}


function tbodyClick(e){
  e.preventDefault();
  if(e.target.tagName != "BUTTON"){
    return false;
  }
  var isEdit = e.target.className.indexOf('edit') > -1;
  var isDel = e.target.className.indexOf('del') > -1;

  if(isEdit){
      document.getElementsByClassName("_editStu")[0].classList.remove('hidden');
      var ind = e.target.getAttribute('data-id');
      fillForm(tableData[ind]);
  }else if (isDel){
    var delConfirm = window.confirm('确认删除？');
     if (delConfirm) {
         var ind = e.target.getAttribute('data-id');
         transferData('/api/student/delBySno', {
             sNo: tableData[ind].sNo
         }, function () {
           var studentListTab = document.getElementsByClassName('stu')[0];
            studentListTab.click();
         });
     }
  }

}


function fillForm(data){
  var form = document.getElementsByClassName("editStuForm")[0];
  for(var prop in data){
    if(form[prop]){
      form[prop].value = data[prop];
    }
  }
}


function changeForm(e){
  e.preventDefault();
  var data = editStu(form);
  if(!data){
    return;
  }

   transferData('/api/student/addStudent', data, editFormFun);

   var changePage = window.confirm('是否跳转页面？')
   if(changePage){
     var studentListTab = document.getElementsByClassName('stu')[0];
      studentListTab.click();
   }

   form.reset();

}

function editFormFun(){

  transferData('/api/student/findAll', "", function (res){

  var data = res.data;
    tableData = data;
  var tbody = document.getElementById('tbody');
  tbody.innerHTML = '';

  data.forEach(function(item, index){
    tbody.innerHTML += '<tr>\
                      <td>' + item["sNo"] + '</td>\
                      <td>' + item["name"] + '</td>\
                      <td>' + (item["sex"]?"女" : "男") + '</td>\
                      <td>' + item["email"] + '</td>\
                      <td>' + (new Date().getFullYear() - item.birth) + '</td>\
                      <td>' + item["phone"] + '</td>\
                      <td>' + item["address"] + '</td>\
                      <td><button class="btn edit" data-id = ' + index + '> 编辑</button>\
                      <button class="btn del" data-id = ' + index + '>删除</button></td>\
                       </tr>';
    })
  });



}


function changeMenu(e){
  var tar = e.target;
  if(tar.tagName == 'LI'){
    var li = document.getElementsByTagName('li');
    var id =  tar.getAttribute('data-id');
    var index = li.toString().indexOf(id);
    var active = document.getElementsByClassName('active');

    var activeId = active[0].getAttribute('data-id')
    for(var i = 0; i<active.length; i++){
      active[i].classList.remove('active');
    }
    document.getElementById(activeId).classList.add('hidden');

    tar.classList.add('active');

    document.getElementById(id).classList.remove('hidden');
    if(id == "stu-list"){
      renderTable();
    }

  }else{
    return false;
  }
}

// saveData('http://api.duyiedu.com' + url, Object.assign(data, {
//         appkey: 'sophiehuhu_1559490578845'
//     }));
function renderTable(){
  //transferData('/api/student/findAll', "", editFormFun);
  editFormFun();
}


function transferData(url, data, cb){

  if(!data){ data = {};}

  var res = saveData('http://api.duyiedu.com' + url, Object.assign(data, {
      appkey: 'sophiehuhu_1559490578845'
  }))

  if(res.status == 'success'){
    cb(res);
  }else{
    alert(res.msg);
  }


}

// 向后端存储数据
function saveData(url, param) {
    var result = null;
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (typeof param == 'string') {
        xhr.open('GET', url + '?' + param, false);
    } else if (typeof param == 'object'){
        var str = "";
        for (var prop in param) {
            str += prop + '=' + param[prop] + '&';
        }
        xhr.open('GET', url + '?' + str, false);
    } else {
        xhr.open('GET', url + '?' + param.toString(), false);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            }
        }
    }
    xhr.send();
    return result;
}
