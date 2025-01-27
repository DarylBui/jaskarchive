function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementById("defaultSubOpen").click();
}

function openSubTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="subtabcontent" and hide them
    tabcontent = document.getElementsByClassName("subtabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="subtablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("subtablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


function check(li, filter) {
  for (i = 0; i < li.length; i++) {
    album = li[i].getElementsByClassName("album")[0];
    artist = li[i].getElementsByClassName("artist")[0];
    albumValue = album.textContent || album.innerText;
    artistValue = artist.textContent || artist.innerText;
    if (albumValue.toUpperCase().indexOf(filter) > -1 || artistValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function search() {
  // Declare variables
  var input, filter, ula, ulb, ulall, lia, lib, liall;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ula = document.getElementById("alist");
  ulb = document.getElementById("blist");
  ulall = document.getElementById("alllist");
  lia = ula.getElementsByTagName('li');
  lib = ulb.getElementsByTagName('li');
  liall = ulall.getElementsByTagName('li');
  check(lia, filter);
  check(lib, filter);
  check(liall, filter);
}

function sort(list) { 
  // Declaring Variables 
  var geek_list, i, run, li, stop; 

  // Taking content of list as input 
  geek_list = document.getElementById(list); 

  run = true; 

  while (run) { 
      run = false; 
      li = geek_list.getElementsByTagName("li"); 

      // Loop traversing through all the list items 
      for (i = 0; i < (li.length - 1); i++) { 
          stop = false; 
          if (parseInt(li[i].getElementsByClassName("score")[0].innerHTML.toLowerCase()) <  
          parseInt(li[i + 1].getElementsByClassName("score")[0].innerHTML.toLowerCase())) { 
              stop = true; 
              break; 
          } 
      }

      /* If the current item is smaller than  
         the next item then adding it after  
         it using insertBefore() method */ 
      if (stop) { 
          li[i].parentNode.insertBefore( 
                  li[i + 1], li[i]); 

          run = true; 
      } 
  }
}

function reverse(listName) {
  var list = document.getElementById(listName);
  var albumList = list.getElementsByTagName("li");


  for(var i = albumList.length - 1; i >=0; i--) {
    list.appendChild(albumList[i]);
  }
}

function changeSortButton() {
  const button = document.getElementById('sort');
  if (button.innerHTML === "▼ Score") {
    button.innerHTML = '▲ Score';
  } else {
    button.innerHTML = '▼ Score';
  }
  
}