let library=[];
        function input(){
            let book={
                title:prompt("Enter the title"),
                author:prompt("Enter the author"),
                yearPublished:prompt("Enter the year published"),
                readStatus:prompt("Enter the status read or unread"),
                getSummary:function (){
                    return "Title : "+this.title+"  Author : "+this.author+"  Year Published : "+this.yearPublished+"  Read Status : "+this.readStatus;
                },
            };
            return book;

        }
        function display(arr){
            for(var data of arr){
              return data ;
           }
        };
        
        function addBook(){
            var b=input();
            library.push(b);
            document.getElementById("output").innerHTML=(library.map(temp=>temp.getSummary())); 
        }
        function removeLastBook(){
            library.pop();
            document.getElementById("output").innerHTML=(library.map(temp=>temp.getSummary()));

        } 
        function addBookToFront(){
            var b=input();
            library.unshift(b);
            document.getElementById("output").innerHTML=(library.map(temp=>temp.getSummary()));
            
        }
        function removeFirstBook(){
            library.shift();
            document.getElementById("output").innerHTML=(library.map(temp=>temp.getSummary()));
        }
        function getAllTitles(){
          var arr=library.map(temp=>temp.title);
           document.getElementById("output").innerHTML= display(arr);
        }
        function getBooksByAuthor(){
            var author=prompt("Enter the author");
            var arr=library.filter(temp=>temp.author==author);
            document.getElementById("output").innerHTML=display(arr);
        }
        function getTotalBooksPublishedBefore(){
            let count=0;
            var year=prompt("Enter the year");
            library.filter(temp=>{if(temp.yearPublished<year){
                count++; }});
                document.getElementById("output").innerHTML=count;
                
        }
        function removeBookByTitle(){
            var title=prompt("Enter the title");
            var arr=library.splice(title);
            document.getElementById("output").innerHTML=display(arr);

           
        }
        function getBooksByReadStatus(){
            var status=prompt("Enter the status");
            var arr=library.filter(temp=>temp.readStatus==status);
            document.getElementById("output").innerHTML=display(arr);
           
        }
        function getSubLibrary(){
            var start=prompt("Enter the start index");
            var end=prompt("Enter the end index");
            var arr=library.slice(start,end);
            document.getElementById("output").innerHTML=display(arr);
        }
        
        
        
        