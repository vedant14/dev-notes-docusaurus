1. Auto-backup on iCloud
	- My files are stored in an iCloud folder as a fail safe.
	- So, even if I forget to push the code to git, I have still a copy on iCloud
	- As you can imagine, losing these notes would be catastrophic

2. Using Obsidian to edit the files
	- Obsidian is my editor of choice.
	- Yes, I could use Sublime too. Which I use for writing code.
	- But since I use obsidian for my daily notes, it is always on. So quickly adding a snippet is not a problem. 
	- Plus, the predective/assitive text in sublime, while helpful for writing code, is really irritating for normal writing purposes. 

3. Aliases on my ~/.zshrc file
	- Since the files are on iCloud folder, navigating to them via terminal and then pushing them on git is a bit impractical.
	- So I added the following aliases on my ~/.zshrc file
	- Just makes my life easier
	
```	
alias viewnotes="cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Dev-notes"

alias localnotes="cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Dev-notes; MkDocs serve"

alias deploynotes="cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/Dev-notes; mkdocs gh-deploy; cd"
```
	
## Commands to use

- To open the ~/.zshrc file
```      
open -e ~/.zshrc
```
	
- To load/source the ~/.zshrc file
	
```
source ~/.zshrc
```
