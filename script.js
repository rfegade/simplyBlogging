function postArticleEventHandler()
{
    var userNameElement = document.getElementById("username");
    var blogTitleElement = document.getElementById("blogName");
    var blogArticleElement = document.getElementById("blogDesc");

    var errorMessageElement = document.getElementById("errorMessage");
    var errorFlag = false;
    errorMessageElement.innerHTML="";    

    if (userNameElement.value == "" ){
        //console.log('Username Cannot be empty');
        errorMessageElement.innerHTML += "<br />Username cannot be empty";
        errorFlag = true;
    }

    if(blogTitleElement.value == ""){
        errorMessageElement.innerHTML += "<br />Blog Title cannot be empty";
        errorFlag = true;
    }

    if(blogArticleElement.value == ""){
        errorMessageElement.innerHTML += "<br />Blog Description cannot be empty";
        errorFlag = true;
    }

    if(errorFlag == false){
        message = "Thank you "+ userNameElement.value +" for submitting the blog on " + blogTitleElement.value;
        alert(message);
        location.href="homePage.html"
    }
}

function loginEventHandler()
{
    var userName = document.getElementById("username");
    var passWord = document.getElementById("password");

    var errorMessageElement = document.getElementById("errorMessage");
    var errorFlag = false;
    errorMessageElement.innerHTML=""; 

    if(userName.value == "")
    {
        errorMessageElement.innerHTML += "<br />Username cannot be empty";
        errorFlag = true;
    }

    if(passWord.value !== "12345")
    {
        errorMessageElement.innerHTML += "<br />Password is wrong. Please try again.";
        errorFlag = true;
    }

    if(errorFlag == false){
        message = "Welcome to Foodie Blog "+ userName.value;
        alert(message);
        location.href="homePage.html"
    }
    
}