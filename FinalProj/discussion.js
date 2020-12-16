window.onload
//人性化設計_按Enter即可輸入值
function keyLogin() {
        if (event.keyCode == 13) //enter的鍵值為13
                document.getElementById("enter").click(); //觸動按鈕的點擊
        else if (event.keyCode == 27)
                document.getElementById("Esc").click(); //觸動按鈕的點擊
}

//變數縮寫: NewCh(new child)，InCon(in content)，TexCon(text content)
function Add_words() {
        // var x = document.getElementById("word").elements.namedItem("name").value;
        // var x = document.getElementById("word").elements[0].value;
        var NewCh = document.createElement("li");
        var InCon = document.getElementById("word2").value;

        // document.write(x);
        // document.getElementById("Mytd").innerHTML = "1、" + x;
        // 防呆設計_警告不能輸入空值

        if (InCon == 0) {
                alert('不能為空');

        }
        else {
                var TexCon = document.createTextNode(InCon);
                NewCh.appendChild(TexCon);
                document.getElementById("myList").appendChild(NewCh);
                // 人性化設計_自動清除文字(輸入完後自動刪除) 也可用null
                document.getElementById("word2").value = "";
        }
}

//變數縮寫:Len(length)
function delete_words() {
        var Len = document.getElementById("myList").childNodes.length;
        var InCon = document.getElementById("word2").value;
        // string.indexOf(taget str);

        // String search()
        for (var i = 0; i < Len; i++) {
                // 取出各(myList)的子節點
                var NewCh = document.getElementById("myList").childNodes[i];
                // 取出各子節點內容(不能連續一起寫沒意義EX .childNodes.innerText)
                ///用innerText跟textContent 效果一樣，差別在於瀏覽器的支援，後者比較標準!!
                var TexCon = NewCh.textContent;

                // 搜尋在各子節點(ol為父節點)中含有關鍵字(x)字串，若有則會回傳true
                var Check = TexCon.includes(InCon);
                if (Check == true && InCon != 0) {
                        NewCh.parentNode.removeChild(NewCh);
                        // 人性化設計_自動清除文字(輸入完後自動刪除) 也可用null
                        document.getElementById("word2").value = "";
                        i--; // 這超重要的啦啦啦啦~~~~~~~~ 如果沒有遞減，那搜尋相同字串的時候就會missing
                }
        }
        // 防呆設計_警告不能輸入空值(但我迴圈已經設定空值，所以也不影響結果)
        if (InCon == 0) {
                alert('不能為空');
        }
        // 防呆設計_警告不能輸入空值(但我迴圈已經設定空值，所以也不影響結果)
        if (Check == false) {
                alert("無此關鍵字");
        }
}
