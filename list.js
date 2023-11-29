var mang = [];

function themmoi() {
    var id = document.getElementById('id').value;
    var fullName = document.getElementById('fullName').value;
    var baseSalary = document.getElementById('baseSalary').value;
    var productSalary = document.getElementById('productSalary').value;
    var productQuantity = document.getElementById('productQuantity').value;

    var mangcon = [id, fullName, baseSalary, productSalary, productQuantity]

    mang.push(mangcon);
    id.value = "";
    fullName.value = "";
    baseSalary.value = "";
    productSalary.value = "";
    productQuantity.value = "";
    //console.log(mang);
    hienthi();
}

function hienthi() {
    var kq = '<h2>QUẢN LÝ NHÂN SỰ</h2>';
    kq += '<table>';
    kq += '<tr>';
    kq += '<th>STT</th>';
    kq += '<th>id</th>';
    kq += '<th>fullName</th>';
    kq += '<th>baseSalary</th>';
    kq += '<th>productSalary</th>';
    kq += '<th>productQuantity</th>';
    kq += '</tr>';

    for (let i = 0; i < mang.length; i++) {
        kq += '<tr> ';
        kq += '<td>' + (i + 1) + '</td>';
        kq += '<td>' + mang[i][0] + '</td>';
        kq += '<td>' + mang[i][1] + '</td>';
        kq += '<td>' + mang[i][2] + '</td>';
        kq += '<td>' + mang[i][3] + '</td>';
        kq += '<td>' + mang[i][4] + '</td>';
        kq += '</tr>';

    }

    kq += '</table>';
    document.getElementById('kq').innerHTML = kq;
}