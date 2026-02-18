//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var COPA_1questions=[

    {
        question: "Which of the following is the hacking approach where cyber-criminals design fake websites or pages for tricking or gaining additional traffic?",
                  //"निम्नलिखित में से कौन-सा हैकिंग दृष्टिकोण है जहां साइबर-अपराधी जालसाजी करने या अतिरिक्त ट्रैफिक प्राप्त करने के लिए नकली वेबसाइट या पेज डिजाइन करते हैं?",
        choices: ["Pharming","Website-Duplication","Mimicking","Spamming"],
        answer: 1
    },

    {
        question: "I.S.O.C. stands for?",
        choices: ["Internet Society", "Intranet Society","Internet Social Communication","Internet Security"],
        answer: 1
    },
	
	{
        question: "Which one of the following error will be handle by the operating system?",
        choices: ["Power failure", "Lack of paper in printer", "Connection failure in the network", "All of the given option"],
        answer: 4
    },
	
	{
		question: "This option allows us to have some space before and/or after a paragraph or a group of paragraphs. Which option is this?",
		choices: ["Alignment", "Font", "Colour", "Spacing"],
		answer: 4
	},
	
	{
		question: " What are called the left and right boundaries of selected paragraphs within a document?",
		choices: ["Indents","Spacing","Alignment","Effects"],
		answer: 1
	},
	
	{
		question: " What should we use to present only certain slides from our presentation, or to create a hyperlink to a group of slides in your presentation?",
		choices: [" Custom show", "Insert menu", "Page layout", "References"],
		answer: 1
	},
	
	{
		question: " How many kinds of custom shows are there in MS Power point?",
		choices: ["3", "4", "2", "5"],
		answer: 3
	},
	
	{
		question: "Which provides the Referential Integrity between rows or columns of various tables?",
		choices: ["MySQL", "Operating System", "Microsoft windows", "Wordpad"],
		answer: 1
	},
	
	{
		question: "Which of the following is not a function performed by MySQL?",
		choices: ["It allows us to updates the table indexes automatically", "It provides the Referential Integrity between rows or columns of various tables", "It allows us to implement database operations on tables, rows, columns, and indexes", "It allows us to create art"],
		answer: 4
	},
	
	{
		question: " What is the correct HTML element for the largest heading?",
		choices: ["&lt;h6&gt;", "&lt;heading&gt;", "&lt;head&gt;", "&lt;h1&gt;"],
		answer: 4
	},
	
	{
		question: "What is the correct HTML element for inserting a line break?",
		choices: ["&lt;break&gt;", "&lt;br&gt; &lt;/br&gt;", "&lt;lbr&gt;", "&lt;/lr&gt;"],
		answer: 2
	},
	
	{
		question: "By what the declaration block is separated which contains one or more declarations?",
		choices: [" Full stop", "Colin", "Semicolons", "Round bracket"],
		answer: 3
	},
	
	{
		question: "What is the full form of ITA 2000 ?",
		choices: ["Indian Technology Act,2000", "Indian Internet and Technology Act,2000", "Internet Technology Act,2000", "Information Technology Act,2000"],
		answer: 4
	},
	
	{
		question: "Which of the following represents billion characters?",
		choices: ["Terabytes", "Megabytes", " Kilobytes", " Gigabytes"],
		answer: 4
	},
	
	{
		question: "For the purpose of providing cyber security for the nation or state, governments employed some highly talented hackers. These hackers are referred to as?",
		choices: [" Nation / State sponsored hackers", " CIA triad", " Special Hackers", "Government Hackers"],
		answer: 1
	},
	
	{
		question: " _________ is an image/jpg file format extension for saving and distributing image/jpg data encoded with JPEG compression algorithm.",
		choices: [".png", " .bmp", " .webp", " .jiff"],
		answer: 4
	},
	
	{
		question: "Which of the following was the first mass-market word processing program?",
		choices: [" MS word", "Noteword", " Wordpad", "Word Star"],
		answer: 4
	},
	
	{
		question: "Which of the following series of super computers was released by C-DAC mission?",
		choices: [" FRONTIER", " EDIAC", " UNIVAC", "PARAM"],
		answer: 4
	},
	
	{
		question: "What does 'H' stand for in HTML?",
		choices: ["Hyper", " Hypo", "Hype", "Higher"],
		answer: 1
	},
	
	{
		question: "Which of the following statements about IPv6 addresses is NOT true?",
		choices: ["AnIPv6 address is arranged in four groups", " An IPv6 address is split into two parts: a network and a node component", "The network component is the first 64 bits of the address and is used for routing", "The node component is the later 64 bits and is used to identify the address of the interface"],
		answer: 1
	},
	
	{
		question: "Which one of the following is NOT an example of operating system?",
		choices: ["Linux", "Ubuntu", " Silk", "Macintosh"],
		answer: 3
	},
	
	{
		question: "Which of the following is the measure of resolution in a digital image/jpg or video display?",
		choices: ["PPI", "PPM", "DPI", " IIP"],
		answer: 1
	},
	
	{
		question: " In binary addition, 1+1 gives __________.",
		choices: ["11", " 00", "0", "1"],
		answer: 3
	},
	
	{
		question: "Which of the following is the default alignment in Microsoft Word?",
		choices: [" Left alignment", " Right alignment", "Centre alignment", "Justify"],
		answer: 1
	},
	
	{
		question: "Which of the following companies made the first personal computer?",
		choices: [" Microsoft", "Apple", "Google", "MITS"],
		answer: 4
	},
	
	{
		question: "A DDoS attack is a malicious attempt to disrupt the normal traffic of a targeted server, service or network. What does the first 'D' in DDoS stand for?",
		choices: ["Domain", " Distributed", "Denial", " Death"],
		answer: 2
	},
	
	{
		question: "What is the shortcut in MS Word to change the text to all upper case?",
		choices: ["Ctrl+Shift+A", " Ctrl+Left bracket ([)", "Ctrl+D", "Ctrl+Shift+W"],
		answer: 1
	},
	
	{
		question: " _________ is a method of flooding the Internet with copies of the same message.",
		choices: ["Hacking", "Spamming", "Trojans", " Worms"],
		answer: 2
	},
	
	{
		question: "Which of the following is a disadvantage of Magnetic Ink Character Recognition (MICR)?",
		choices: [" Fast processing of large volumes of data", " Secure method of data collection", "It is Reliable", "It is Expensive"],
		answer: 4
	},
	
	{
		question: "What is the current fastest supercomputer in the world?",
		choices: [" Fugaku", "Frontier", " PARAM Siddhi-AI", "Sunway TaihuLight"],
		answer: 2
	}
	
	/*{
		question: "",
		choices: ["", "", "", ""],
		answer:
	},*/
	
];

var HTMLquestions=[

    {
        question: "HTML is what type of language ?",
        choices: ["Scripting Language","Markup Language","Programming Language","Network Protocol"],
        answer: 2
    
    },
    
    {
        question: "HTML uses :",
        choices: ["User defined tags","Pre-specified tags","Fixed tags defined by the language","Tags only for linking"],
        answer: 3
    
    },
    {
        question: "The year in which HTML was first proposed _______.",
        choices: ["1990","1980","2000","1995"],
        answer: 1
    
    },
    {
        question: "Apart from <b> tag, what other tag makes text bold ?",
        choices: ["fat","strong","black","emp"],
        answer: 2
    
    },
    {/*5*/
        question: "How can you make a bulleted list with numbers? ",
        choices: ["dl","ol","list","ul"],
        answer: 2
    
    },
    {
        question: "What tag is used to display a picture in a HTML page?",
        choices: ["picture","image","pic","img"],
        answer: 4
    
    }, 
    {
        question: "HTML web pages can be read and rendered by _________.",
        choices: ["Compiler","Server","Web Browser","Interpreter"],
        answer: 3
    
    }, 
    {
        question: "Which of the following is not a browser ?",
        choices: ["Microsofts Bing","Netscape Navigator","Mozilla Firefox","Opera"],
        answer: 1
    
    }, 
    {
        question: "HTML tags are surrounded by which type of brackets.",
        choices: ["Curly","Round","Squart","Angle"],
        answer: 4
    
    }, 
    {/*10*/
        question: "Tags and test that are not directly displayed on the page are written in _____ section.",
        choices: ["head","title","body","html"],
        answer: 1
    
    }
                
];

var CSSquestions=[

    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        choices: ["Id","text","class","name"],
        answer: 1
    
    }, 
    {
        question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        choices: ["margin","clear","float","padding"],
        answer: 2
    
    },
    {
        question: "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack ?",
        choices: ["d-inex","s-index","x-index","z-index"],
        answer: 4
    
    }, 
    {/*4*/
        question: "Can we align a Block element by setting the left and right margins ?",
        choices: ["Yes, we can","Not Possible","Depends on browser","Depends upon operating System"],
        answer: 2
    
    },
    {
        question: "If we want to wrap a block of text around an image, which css property will we use ?",
        choices: ["wrap","push","float","align"],
        answer: 3
    
    },
    {/*6*/
        question: "If we want to show an Arrow as cursor, then which value we will use ?",
        choices: ["pointer","default","arrow","arr"],
        answer: 2
    
    }, 
    {
        question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
        choices: ["border-color","border-decoration","border-style","border-line"],
        answer: 3
    
    },
    {/*8*/
        question: "Which of the following properties will we use to display border around a cell without any content ?",
        choices: ["empty-cell","blank-cell","noncontent-cell","void-cell"],
        answer: 1
    
    }, 
    {
        question: "What should be the table width, so that the width of a table adjust to the current width of the browser window?",
        choices: ["640 pixels","100%","full-screen","1024px"],
        answer: 2
    
    },
    {
        question: "How can we write comment along with CSS code ?",
        choices: ["/* a comment */","// a comment //","/ a comment /","<' a comment'>"],
        answer: 1
    
    }
                
];
var JSquestions=[

    {
        question: "Which of the following is true about variable naming conventions in JavaScript?",
        choices: ["JavaScript variable names must begin with a letter or the underscore character.","JavaScript variable names are case sensitive.","Both of the above."," None of the above."],
        answer: 3
    
    }, 
    {/*wscubetech*/
        question: " Which of the following is a server-side Java Script object?",
        choices: ["Function","File","FilleUpload","Data"],
        answer: 2
    
    },
    {
        question: "Java script can be used for Storing the form's contents to a database file on the server",
        choices: ["False","True"],
        answer: 1
    
    }, 
    {
        question: "How does Java Script store dates in objects of Date type?",
        choices: ["The number of days since January 1st, 1900","The number of seconds since January 1st, 1970","The number of milliseconds since January 1st, 1970","The number of picoseconds since January 1st, 1970"],
        answer: 3
    
    },
    {
        question: "C-style block-level scoping is not supported in Java script",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "JavaScript ignores extra spaces in Syntax",
        choices: ["True","False"],
        answer: 2
    
    }, 
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        choices: ["Pathname","Protocol","Defaultststus","Host"],
        answer: 3
    
    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        choices: ["visibilty","visible","invisible","None of the above"],
        answer: 1
    
    }, 
    {
        question: " Javascript is an object oriented language?",
        choices: ["False","True"],
        answer: 2
    
    },
    {
        question: "What is the alternate name for Java script?",
        choices: ["LimeScript","ECMScript","Both of the above","ECMAScript"],
        answer: 4
    
    }
                
];
var PYquestions=[

    {
        question: "What is the output of the following program : print(Hello World'[::-1])",
        choices: ["dlroW olleH","Hello Worl","d","Error"],
        answer: 1
    
    }, 
    {
        question: "Given a function that does not return any value, what value is shown when executed at the shell?",
        choices: ["int","bool","void","None"],
        answer: 4
    
    },
    {
        question: "Which module in Python supports regular expressions?",
        choices: ["re","regex","pyregex","None of the above"],
        answer: 1
    
    }, 
    {
        question: "What is the output of the following program : (tricky ques.)  print (0.1 + 0.2 == 0.3) ",
        choices: ["True","False","Machine Dependent","Error"],
        answer: 2
    
    },
    {
        question: "Which of the following is not a complex number?",
        choices: ["k = 2 + 3j","k = complex(2, 3)","k = 2 + 3l","k = 2 + 3J"],
        answer: 3
    
    },
    {
        question: "What does ~~~~~~5 evaluate to?",
        choices: ["+5","-11","+11","-5"],
        answer: 1
    
    }, 
    {
        question: "Given a string s = “Welcome”, which of the following code is incorrect?",
        choices: ["print s[0]","print s.lower()","s[1] = ‘r’","print s.strip()"],
        answer: 3
    
    },
    {
        question: "________ is a simple but incomplete version of a function.",
        choices: ["Stub","Function","A function developed using bottom-up approach","A function developed using top-down approach"],
        answer: 1
    
    }, 
    {
        question: "To start Python from the command prompt, use the command ______",
        choices: ["execute python","go python","python","run python"],
        answer: 3
    
    },
    {
        question: "Which of the following is correct about Python?",
        choices: ["It supports automatic garbage collection.","It can be easily integrated with C, C++, COM, ActiveX, CORBA, and Java","Both of the above","None of the above"],
        answer: 3
    
    }
                
];
var Cquestions=[

    {
        question: "C Language was developed in the year ____",
        choices: ["1970","1975","1980","1985"],
        answer: 1
    
    }, 
    {
        question: "Which one is not a reserve keyword in C Language?",
        choices: ["auto","main","case","register"],
        answer: 2
    
    },
    {
        question: "A C variable name can start with a ____",
        choices: ["Number","Plus Sign","Underscore","Asterisk"],
        answer: 3
    
    }, 
    {
        question: "Prototype of a function means _____",
        choices: ["Name of Function","Output of Function","Declaration of Function","Input of a Function"],
        answer: 3
    
    },
    {
        question: "Name the loop that executes at least once.",
        choices: ["for","If","do-while","while"],
        answer: 3
    
    },
    {
        question: "Far pointer can access _____",
        choices: ["Single memory location","No memory location","All memory location","First and Last Memory Address"],
        answer: 3
    
    }, 
    {
        question: "A pointer pointing to a memory location of the variable even after deletion of the variavle is known as _____",
        choices: ["far pointer","dangling pointer","null pointer","void pointer"],
        answer: 2
    
    },
    {
        question: "An uninitialized pointer in C is called ___",
        choices: ["Constructor","dangling pointer","Wild Pointer","Destructor"],
        answer: 3
    
    }, 
    {
        question: "A pointer that is pointing to NOTHING is called ____",
        choices: ["VOID Pointer","DANGLING Pointer","NULL Pointer","WILD Pointer"],
        answer: 3
    
    },
    {
        question: "Who is known as the father of C Language ?",
        choices: ["Digvijay","James A. Sosling","Dr. E. F. Codd","Dennis Ritchie"],
        answer: 4
    
    }
                
];





//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";








document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
           
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
           
    }else{
    
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click",function(){
    
    document.querySelector(".final-result").style.display="block";
    
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
    
//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
