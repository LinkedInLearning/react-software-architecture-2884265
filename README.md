# React: Software Architecture
This is the repository for the LinkedIn Learning course React: Software Architecture. The full course is available from [LinkedIn Learning][lil-course-url].

![React: Software Architecture][lil-thumbnail-url] 

Many React developers have intimate knowledge of the React API itself, but little familiarity with how to create real-world apps on a larger scale while dealing with various stakeholders. The heavy demands on web apps both from a customer and managerial perspective require that developers arrange software in an optimal way to ensure performance and maintainability. And in order to do this effectively, programmers must know how to create good software architecture. In this course, senior software developer Shaun Wassell shows you how, detailing what React developers need to know to keep their apps maintainable, performant, and compliant for the long haul. Delve into the basics of server-side rendering, state management, code splitting, and much more.

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"


### Instructor

Shaun Wassell 
                                                     

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/shaun-wassell).

[lil-course-url]: https://www.linkedin.com/learning/react-software-architecture
[lil-thumbnail-url]: https://cdn.lynda.com/course/2884265/2884265-1628621779594-16x9.jpg
