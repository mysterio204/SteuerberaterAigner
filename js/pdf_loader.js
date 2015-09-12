            //The div element that will contain the images
          
            var pdfContainer = document.getElementById("downloadcollection");




            //Makes an asynch request, loading the getimages.php file
            function callForImages() {

                //Create the request object
                var httpReq = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

                //When it loads,
                httpReq.onload = function() {

                    //Convert the result back into JSON
                    var result = JSON.parse(httpReq.responseText);

                    //Show the images
                    loadImages(result);
                }

                //Request the page
                try {
                    httpReq.open("GET", "getFiles.php", true);
                    httpReq.send(null);
                } catch (e) {
                    console.log(e);
                }

            }


            //Generates the images and sticks them in the container
            function loadImages(images) {

                //For each image,
                for (var i = 0; i < images.length; i++) {

                    //Make a new image element, setting the source to the source in the array
                    //                    var newImage = document.createElement("img");
                    //                    newImage.setAttribute("src", images[i]);

                    var newLiItem = document.createElement("li");
                    newLiItem.setAttribute("class", "collection-item");
                    var link = document.createElement("a");
                    link.setAttribute("href", images[i]);
                    var txt = document.createTextNode(images[i]);
                    link.appendChild(txt);
                    newLiItem.appendChild(link);

                    //Add it to the container
                    //                    imageContainer.appendChild(newImage);
                    pdfContainer.appendChild(newLiItem);


                }

            }