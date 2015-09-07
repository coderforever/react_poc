let PermissionCheck={
    loginCheck(loginURL){
        if(typeof localStorage['token']==='undefined'){
            //window.location.href=loginURL;
            console.log(loginURL);
        }
    }
};

export default PermissionCheck;