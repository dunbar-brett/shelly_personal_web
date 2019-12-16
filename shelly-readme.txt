Follow these instructions before you make any changes:

Open your Terminal window  (cmd + Space -- Then type in Terminal and hit enter)

Navigate to the root folder of the shelly_personal_web project

Make sure you're in the master branch

enter:
git pull origin

You should see a message saying "Everything is up to date" or a bunch of file changes.

Now in your Finder window, you can navigate to the 'static' folder and find the 'Portfolio' folder.

Here you should see both Oils and Watercolor folders. Each of these folders has a .js file with their 
respective names. This file contains a javascript list that associates with each image in that directory.

*******************
IF YOU ADD AN IMAGE
*******************

Copy the last entry in the list from the and paste it below it. **Don't forget the comma**

It should look like This
{
    id: 8,
    customClass: "",
    title: "title",
    description: "description",
    filename: "oils/triptic-3.jpg"
},

In the copied entry, increase the id by one, change the title, description, and filename, with the 
image you are adding. In filename, leave the text before and including the /  
In this case it's the   oils/

****************************
IF YOU ARE DELETING AN IMAGE
****************************

In the .js file find the entry with the image you're removing. 
Make sure to delete it from { to }, including the comma.

Descrese the ids by 1 of all the entries after the one you just deleted.

********************
WHEN YOU'RE FINISHED
********************

Back in your terminal window.

Enter:
git status

This displays all the files in the project that you changed, and files that your adding or deleting.

Enter:
git add .

(don't forget the period)

This readys all the changes you made to be pushed.

Now you're going to commit your changes with a message. Put in a very breif description 
of the changes you made.

Enter:
git commit -m "ENTER DESCRIPTION HERE"

Now you're going to push up your changes to github

Enter:
git push

(you might need to login at this point.)

You should see some text and all your files completing being uploaded. 

At this point your changes are being saved and the hardest part is over.
Now you're going to generate the website and deploy it.

Enter:
npm run generate

This will take a few seconds to build the site. 
In your Finder window go to the 'dist' folder. Here is your website.

In a browser navigate to the github staged or prod repo.
https://github.com/dunbar-brett/shelly_website_staged

Back in the Finder window select all the files and drag them into the browser on the github page.
This should trigger an upload. When it's done. Enter a breif description of the changes you made
and Commit. 

This part should take a minute or two. Once it's done, so are you!

Navigate to your website and make sure the website works and your changes are in place.

