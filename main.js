name0fTheStudentArray = [];

function submit()
{

    var name1 = document.getElementById("name0fTheStudent1").value;
    var name2 = document.getElementById("name0fTheStudent2").value;
    var name3 = document.getElementById("name0fTheStudent3").value;
    var name4 = document.getElementById("name0fTheStudent4").value;

   name0fTheStudentArray.push(name1);
   name0fTheStudentArray.push(name2);
   name0fTheStudentArray.push(name3);
   name0fTheStudentArray.push(name4);

   console.log(name0fTheStudentArray);

   document.getElementById("displayName").innerHTML = name0fTheStudentArray;
   document.getElementById("submitButton").style.display = "none";
   document.getElementById("sortButton").style.display = "inline-block";
}

function sorting()
{
  name0fTheStudentArray.sort();
  console.log(name0fTheStudentArray);
  document.getElementById("displayName").innerHTML = name0fTheStudentArray;
}