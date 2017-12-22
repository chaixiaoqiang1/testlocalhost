// JScript 文件

function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        { 
            c_start=c_start + c_name.length+1 
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}
var domain="zgmht.com";
var domainUrl="http://www.zgmht.com";
var isLogin=false;
var companyID=getCookie("companyID");
if (companyID!=null && companyID!="")
{
    isLogin = true;
    document.write("欢迎您：" + getCookie("companyUsername") + "！<a href='"+domainUrl+"/home/index.html' target='_blank' class='none'>[进入企业管理中心]</a>");
    document.write("<a href='javascript:exitCom()' class='none'>[退出]</a>");
}else{
    document.write("<a href='"+domainUrl+"/login.html' target='_blank' class='none'>[登录]</a><a href='"+domainUrl+"/reg.html' target='_blank' class='none'>[注册]</a>");
}
//删除cookies 
function delCookie(name){
   var date = new Date();
   date.setTime(date.getTime() - 10000);
   document.cookie = name + "=a;domain="+domain+";path=/;expires=" + date.toGMTString();
}
function exitCom()
{
    delCookie("companyID");
    delCookie("companyUsername");
    delCookie("companyLoginTime");
    window.location = window.location;
    alert("成功退出系统！");
}