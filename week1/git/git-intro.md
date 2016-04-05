# Basic Git

> One Time (per repo)

* `git init`
  * This initializes the git repository locally on your machine

* Go to [github](http://github.com) and create a new repository.  They will give you a url that represents the repo and where the code is stored.

* `git remote add origin <URL>`
  * Replace `<URL>` with the url from the git repository you created on [github](http://github.com). 



> Normal work flow

* `git add -A`
  * This will add all tracked files in this git repository to be ready to be committed
* `git commit -m <MESSAGE>`
  * Replace `<MESSAGE>` with a message about the commit
* `git push origin master`
  * This will take the commited files and push them to your remote on [github](http://github.com).