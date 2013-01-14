MVC/Rails/ajax user interface test (should take maximum 3 hours)

Directions:
Please create the following application using Rails 2.3.* and MySQL. You can use JQuery as well, if you wish. We’ll be using this to test your development skills.


1. Create a web page with a simple text box (just one text box)
Use the same size and style text box as the one on this page:  https://qualaroo.com/signinwhere it says Email Address:
Also for this test use the same font and style as the text on this page  https://qualaroo.com/signin and make sure that the page you design is very neat with nice spacing. (However the design is very simple, it's just a text box and then text that will appear below)

All of the fonts and everything should look exactly like this page (but just the one text box on the page. Don't copy everything on the page! Just copy the text box and the Words Website URL: before the text box)

2. When the person enters a URL, as soon as they have completed the url and hit enter the URL will appear below the text box and the text box will be emptied again. It will only do this if it is a validly formed url, for example if someone writes ttjkl.145 this will not do anything as it is not a valid url. It will however accept any variations that are valid such as http://www.url.com or www.url.co.uk and url.com.au. And it will remove anything after the end of the country code for example if the person types www.abc.net/dlkjfk then only www.abc.net will be accepted

3. The URLS will be listed below the form and will appear one above each other, with the most recent urls at the top and will look very neat, and consistent, removing any www. or http from the url. Very important that they look neat and in a good position. Each new URL that is entered will appear above each other with the most recent ones at the top (unless they are a repeat)

4. The page will never refresh as everything is via javascript

5. Also the adding to the page will work via javascript, so the page will work even if the person is OFFLINE and all of the above functions will work even if the person is offline. It will try and sync with the database in the background every 15 seconds.

6. Upload all of this to a working server and put it on a URL that we can find and look at