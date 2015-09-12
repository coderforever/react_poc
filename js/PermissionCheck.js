let PermissionCheck={
    loginCheck(loginURL){
        if(typeof localStorage['token']==='undefined'){
            window.location.href=loginURL;
        }
    }
};

export default PermissionCheck;