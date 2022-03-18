CREATE TABLE "user"(userid serial primary key, first_name varchar(40), last_name varchar(40), 
email varchar(40), password varchar(40), role varchar(20), isValidated boolean);

CREATE TABLE "student"(studentid serial primary key, userid integer references "user"(userid), 
year integer, department varchar(255));

CREATE TABLE "group"(groupid serial primary key, userid integer references "user"(userid), 
groupName varchar(255), department varchar(255), isResearch boolean);

CREATE TABLE "follows"(studentid integer references "student"(studentid), groupid integer references "group"(groupid), 
isFollowed boolean, primary key(studentid, groupid));

CREATE TABLE "post"(postid serial primary key, groupid integer references "group"(groupid), 
text varchar(255), date timestamp, photoURL text);

CREATE TABLE "session"(sessionid serial primary key, userid integer references "user"(userid), token text, 
expiration timestamp, role varchar(20));

