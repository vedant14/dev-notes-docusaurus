# Github
### Initialise a git repo 
- This will create a git repo inside the directory you are currently in.
```
git init
```

### Create a branch from master
- From master meaning, the new branch that will be created will at first be identical to master
- You need to run git push after this so that these changes are reflected in github too.
```
git checkout -b new-model
```

### Check the branches created for a particular repo
- If you want to find what are the various branches in an existing repo, then use this command.
```
git branch
```

### Checkout to an existing branch
```
git checkout <branchname>
```

### Git commit message ammend 
```
git commit --amend -m"Bug fix for the head tag"
```

- Git reset 
- To [undo every change](https://www.theserverside.com/video/Dont-git-revert-that-last-commit-git-reset-instead) that has happened since a given commit occurred, use git reset
```

```

### Git Revert
- Don't use
- This will just undo the changes done to the code during that git commit, not the one preceeding or suceeding them
- [Good article](https://www.theserverside.com/tutorial/How-to-git-revert-a-commit-A-simple-undo-changes-example) on this
```
git revert SHA
```

- If you want to reverse the action do this
```
git cherry-pick SHA
```

### Git Delete local branch
```
git branch -d <branch name>
```
