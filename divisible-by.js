/* emon ekti loop chalate hobe 1-50; jodi 3 diye vag jay thole print hobe foo, ar jodi 5 diye vag jay thole print hobe bar, ar jodi 3 and 5 diye vag jay tahole print hobe foobar, ar vag na gele shudu loop er number print hobe  */


for(var i = 1; i<=50; i++){

    if(i % 3 ==0 && i % 5 == 0 ){

        console.log("foobar");
    }
    else if(i % 3 == 0){

        console.log("foo");
    }

    else if (i % 5 == 0){

        console.log("bar");
    }

    else{

        console.log(i);
    }
}