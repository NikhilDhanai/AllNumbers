var string="";
var system='b';
var s2="";
function showDiv(x){
    string="";
    document.getElementById('binary').value=string;
    document.getElementById('decimal').value=string;
    document.getElementById('hexa').value=string;
    document.getElementById('octal').value=string;
    if(x=='b')
    {
        system='b';
        document.getElementById('bdiv').style.display="grid";
        document.getElementById('ddiv').style.display="none";
        document.getElementById('hdiv').style.display="none";
        document.getElementById('odiv').style.display="none";
        document.getElementById('binary').style.borderTopColor="#0072c5";
        document.getElementById('decimal').style.borderTopColor="darkred";
        document.getElementById('hexa').style.borderTopColor="darkred";
        document.getElementById('octal').style.borderTopColor="darkred";
        document.getElementById('bb').style.background="#2ea44f";
        document.getElementById('db').style.background="#FF4742";
        document.getElementById('hb').style.background="#FF4742";
        document.getElementById('ob').style.background="#FF4742";



    }
    else if(x=='d')
    {
        system='d';
        document.getElementById('ddiv').style.display="grid";
        document.getElementById('bdiv').style.display="none";
        document.getElementById('hdiv').style.display="none";
        document.getElementById('odiv').style.display="none";
        document.getElementById('decimal').style.borderTopColor="#0072c5";
        document.getElementById('binary').style.borderTopColor="darkred";
        document.getElementById('hexa').style.borderTopColor="darkred";
        document.getElementById('octal').style.borderTopColor="darkred";
        document.getElementById('db').style.background="#2ea44f";
        document.getElementById('bb').style.background="#FF4742";
        document.getElementById('hb').style.background="#FF4742";
        document.getElementById('ob').style.background="#FF4742";
    }
    else if(x=='h')
    {
        system='h';
        document.getElementById('hdiv').style.display="grid";
        document.getElementById('ddiv').style.display="none";
        document.getElementById('bdiv').style.display="none";
        document.getElementById('odiv').style.display="none";
        document.getElementById('hexa').style.borderTopColor="#0072c5";
        document.getElementById('decimal').style.borderTopColor="darkred";
        document.getElementById('binary').style.borderTopColor="darkred";
        document.getElementById('octal').style.borderTopColor="darkred";
        document.getElementById('hb').style.background="#2ea44f";
        document.getElementById('bb').style.background="#FF4742";
        document.getElementById('db').style.background="#FF4742";
        document.getElementById('ob').style.background="#FF4742";

    }
    else
    {
        system='o';
        document.getElementById('odiv').style.display="grid";
        document.getElementById('ddiv').style.display="none";
        document.getElementById('hdiv').style.display="none";
        document.getElementById('bdiv').style.display="none";
        document.getElementById('octal').style.borderTopColor="#0072c5";
        document.getElementById('decimal').style.borderTopColor="darkred";
        document.getElementById('hexa').style.borderTopColor="darkred";
        document.getElementById('binary').style.borderTopColor="darkred";
        document.getElementById('ob').style.background="#2ea44f";
        document.getElementById('bb').style.background="#FF4742";
        document.getElementById('hb').style.background="#FF4742";
        document.getElementById('db').style.background="#FF4742";
    }
}
function btnClick(x,y)
{
    string=string+x;
    if(x=='Cl')
    {
        string="";
    document.getElementById('binary').value=string;
    document.getElementById('decimal').value=string;
    document.getElementById('hexa').value=string;
    document.getElementById('octal').value=string;
    return ;
    }
    if(x=='DEL')
    {
        string=string.substring(0,string.length-4);
    }
    
    if(system=='b')
    {
        if(x=='>>' || x=='<<')
        {
        string=string.substring(0,string.length-2);
        if(string.indexOf("+")==-1 && string.indexOf("*")==-1&&string.indexOf("-")==-1&&string.indexOf("/")==-1)
        {
            
            if(x=='>>')
            {
                let n=string.length;
                string=string.slice(n-1)+string.slice(0,n-1);

            }
            else if(x=='<<')
            {
                let n=string.length;
                string=string.slice(1,n)+string.slice(0,1);

            }

        }
    }
        document.getElementById('binary').value=string;
        if(string.indexOf("+")==-1 && string.indexOf("*")==-1&&string.indexOf("-")==-1&&string.indexOf("/")==-1)
        {
         
         var digit = parseInt(string, 2);
         document.getElementById('decimal').value=digit;
         digit = parseInt(string , 2).toString(16).toUpperCase();
         document.getElementById('hexa').value=digit;
         digit = parseInt(string , 2).toString(8);
          document.getElementById('octal').value=digit;
          var j=0;
        }
        else
        {
            
            var s2='';
            var s3='';
            var s4='';
            for(let i=0;i<string.length;i++)
            {   
                if(string.charAt(i)=='+' || string.charAt(i)=='-' || string.charAt(i)=='*' || string.charAt(i)=='/' )
                {
                    let d=parseInt(string.substring(j,i),2);
                    j=i+1;
                    s2=s2+d+string.charAt(i);
                    s3=s3+d.toString(16).toUpperCase()+string.charAt(i);
                    s4=s4+d.toString(8)+string.charAt(i);
                }
            }
           if(string.charAt(string.length-1)!='+' && string.charAt(string.length-1)!='-' && string.charAt(string.length-1)!='*' && string.charAt(string.length-1)!='/' )
           {
              let d=parseInt(string.substring(j,string.length),2);
               s2=s2+d;
               s3=s3+d.toString(16).toUpperCase();
               s4=s4+d.toString(8);
           }
            console.log(s2);
            console.log(s3);
            console.log(s4)
            document.getElementById('decimal').value=s2;
            document.getElementById('hexa').value=s3;
            document.getElementById('octal').value=s4;
        }
    }
     if(system=='d')
    {

        document.getElementById('decimal').value=string;
        if(string.indexOf("+")==-1 && string.indexOf("*")==-1&&string.indexOf("-")==-1&&string.indexOf("/")==-1)
        {
         
            var digit=parseInt(string).toString(2);
            document.getElementById('binary').value=digit;
            digit=parseInt(string).toString(16).toUpperCase();
            document.getElementById('hexa').value=digit;
            digit=parseInt(string).toString(8);
            document.getElementById('octal').value=digit;
            var j=0;
        }
        else
        {
            
            var s2='';
            var s3='';
            var s4='';
            for(let i=0;i<string.length;i++)
            {   
                if(string.charAt(i)=='+' || string.charAt(i)=='-' || string.charAt(i)=='*' || string.charAt(i)=='/' )
                {
                    let d=parseInt(string.substring(j,i));
                    j=i+1;
                    s2=s2+d.toString(2)+string.charAt(i);
                    s3=s3+d.toString(16).toUpperCase()+string.charAt(i);
                    s4=s4+d.toString(8)+string.charAt(i);
                }
            }
           if(string.charAt(string.length-1)!='+' && string.charAt(string.length-1)!='-' && string.charAt(string.length-1)!='*' && string.charAt(string.length-1)!='/' )
           {
              let d=parseInt(string.substring(j,string.length));
               s2=s2+d.toString(2);
               s3=s3+d.toString(16).toUpperCase();
               s4=s4+d.toString(8);
           }
            console.log(s2);
            console.log(s3);
            console.log(s4)
            document.getElementById('binary').value=s2;
            document.getElementById('hexa').value=s3;
            document.getElementById('octal').value=s4;
        }
        
    }
    if(system=='h')
    {

    document.getElementById('hexa').value=string;
    if(string.indexOf("+")==-1 && string.indexOf("*")==-1&&string.indexOf("-")==-1&&string.indexOf("/")==-1)
        {
         
         var digit = parseInt(string, 16);
         document.getElementById('decimal').value=digit;
         digit = parseInt(string , 16).toString(2);
         document.getElementById('binary').value=digit;
         digit = parseInt(string , 16).toString(8);
          document.getElementById('octal').value=digit;
          var j=0;
        }
        else
        {
            
            var s2='';
            var s3='';
            var s4='';
            for(let i=0;i<string.length;i++)
            {   
                if(string.charAt(i)=='+' || string.charAt(i)=='-' || string.charAt(i)=='*' || string.charAt(i)=='/' )
                {
                    let d=parseInt(string.substring(j,i),16);
                    j=i+1;
                    s2=s2+d+string.charAt(i);
                    s3=s3+d.toString(2)+string.charAt(i);
                    s4=s4+d.toString(8)+string.charAt(i);
                }
            }
           if(string.charAt(string.length-1)!='+' && string.charAt(string.length-1)!='-' && string.charAt(string.length-1)!='*' && string.charAt(string.length-1)!='/' )
           {
              let d=parseInt(string.substring(j,string.length),16);
               s2=s2+d;
               s3=s3+d.toString(2);
               s4=s4+d.toString(8);
           }
            console.log(s2);
            console.log(s3);
            console.log(s4)
            document.getElementById('decimal').value=s2;
            document.getElementById('binary').value=s3;
            document.getElementById('octal').value=s4;
        }
    }
    if(system=='o')
    {

        document.getElementById('octal').value=string;
        if(string.indexOf("+")==-1 && string.indexOf("*")==-1&&string.indexOf("-")==-1&&string.indexOf("/")==-1)
        {
         
         var digit = parseInt(string, 8);
         document.getElementById('decimal').value=digit;
         digit = parseInt(string , 8).toString(16).toUpperCase();
         document.getElementById('hexa').value=digit;
         digit = parseInt(string , 8).toString(2);
          document.getElementById('binary').value=digit;
          var j=0;
        }
        else
        {
            
            var s2='';
            var s3='';
            var s4='';
            for(let i=0;i<string.length;i++)
            {   
                if(string.charAt(i)=='+' || string.charAt(i)=='-' || string.charAt(i)=='*' || string.charAt(i)=='/' )
                {
                    let d=parseInt(string.substring(j,i),8);
                    j=i+1;
                    s2=s2+d+string.charAt(i);
                    s3=s3+d.toString(16).toUpperCase()+string.charAt(i);
                    s4=s4+d.toString(2)+string.charAt(i);
                }
            }
           if(string.charAt(string.length-1)!='+' && string.charAt(string.length-1)!='-' && string.charAt(string.length-1)!='*' && string.charAt(string.length-1)!='/' )
           {
              let d=parseInt(string.substring(j,string.length),8);
               s2=s2+d;
               s3=s3+d.toString(16).toUpperCase();
               s4=s4+d.toString(2);
           }
            console.log(s2);
            console.log(s3);
            console.log(s4)
            document.getElementById('decimal').value=s2;
            document.getElementById('hexa').value=s3;
            document.getElementById('binary').value=s4;
        }
    }
}
function result()
{
    var j=0;
    s2='';
    if(system=='b')
    {
        var result='';
        for(let i=0;i<string.length;i++)
        {   
            if(string.charAt(i)=='+' || string.charAt(i)=='-' || string.charAt(i)=='*' || string.charAt(i)=='/' )
            {
                let d=parseInt(string.substring(j,i),2);
                j=i+1;
                console.log(d);
                s2=s2+d+string.charAt(i);
                console.log(s2);
            }
        }
        let d=parseInt(string.substring(j,string.length),2);
        console.log(d);
        s2=s2+d;
        var result=eval(s2);
        console.log(s2);
        string=result.toString(2);
        document.getElementById('binary').value=string;
        document.getElementById('decimal').value=result;
        document.getElementById('hexa').value=result.toString(16).toUpperCase();
        document.getElementById('octal').value=result.toString(8);
    }
    if(system=='d')
    {
        var result='';
        for(let i=0;i<string.length;i++)
        {   
            if(string.charAt(i)=='+' || string.charAt(i)=='-' || string.charAt(i)=='*' || string.charAt(i)=='/' )
            {
                let d=parseInt(string.substring(j,i));
                j=i+1;
                console.log(d);
                s2=s2+d+string.charAt(i);
                console.log(s2);
            }
        }
        let d=parseInt(string.substring(j,string.length));
        console.log(d);
        s2=s2+d;
        var result=eval(s2);
        console.log(s2);
        string=result;
        document.getElementById('binary').value=result.toString(2);
        document.getElementById('decimal').value=string;
        document.getElementById('hexa').value=result.toString(16).toUpperCase();
        document.getElementById('octal').value=result.toString(8);
    }
    if(system=='h')
    {
        var result='';
        for(let i=0;i<string.length;i++)
        {   
            if(string.charAt(i)=='+' || string.charAt(i)=='-' || string.charAt(i)=='*' || string.charAt(i)=='/' )
            {
                let d=parseInt(string.substring(j,i),16);
                j=i+1;
                console.log(d);
                s2=s2+d+string.charAt(i);
                console.log(s2);
            }
        }
        let d=parseInt(string.substring(j,string.length),16);
        console.log(d);
        s2=s2+d;
        var result=eval(s2);
        console.log(s2);
        string=result.toString(16).toUpperCase();
        document.getElementById('binary').value=result.toString(2);
        document.getElementById('decimal').value=result;
        document.getElementById('hexa').value=string;
        document.getElementById('octal').value=result.toString(8);
    }
    if(system=='o')
    {
        var result='';
        for(let i=0;i<string.length;i++)
        {   
            if(string.charAt(i)=='+' || string.charAt(i)=='-' || string.charAt(i)=='*' || string.charAt(i)=='/' )
            {
                let d=parseInt(string.substring(j,i),8);
                j=i+1;
                console.log(d);
                s2=s2+d+string.charAt(i);
                console.log(s2);
            }
        }
        let d=parseInt(string.substring(j,string.length),8);
        console.log(d);
        s2=s2+d;
        var result=eval(s2);
        console.log(s2);
        string=result.toString(8);
        document.getElementById('binary').value=result.toString(2);
        document.getElementById('decimal').value=result;
        document.getElementById('hexa').value=result.toString(16).toUpperCase();
        document.getElementById('octal').value=string;
    }
}