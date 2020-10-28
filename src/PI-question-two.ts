/*

-- on the side with the code --
Complete the 'getAuthorHistory' function below.
the function is expected to return a STRING_ARRAY
the function accepts STRING AUTHOR as a param

base urls:
https://jsonmock.hackerrank.com/api/article_users?username=
https://jsonmock.hackerrank.com/api/articles?author=

Write an HTTP GET method to retreive information form the articles and article_users databases.  There may be multiple pages that are accessed by appending
&page=num where num is replaced with tthe page number

Function description:

Given a struing of author, getAuthorHistory must perform the following tasks:

1) initialize the history array to store a list of string elements
2) Query https://jsonmock.hackerrank.com/api/article_users?username=<authorName> replace authorName to retreive authorInfo in the data field
3) Store the value of the about field from the query response.  If the about field is empty or null, do not store a value for this item.
4) Query https://jsonmock.hackerrank.com/api/articles?author=<AuthorName> replace authorName to retrieve the lsit of the author's articles in the data field
5) add the title from each record returned in the data field to the history array
  - if the title field is null or empty then use the story_title to add in the history array
  - if the title and the story_title fields are null or empty then ignore the record to add in the history array 
6) based on the total_pages count, fetch all the data (pagination) and repeat steps 4 and 5
7) return the history array

The query response from the website is a JSON response with the following five fields:

page: the current page
per_page: max number of results per page
total: the total number of records in the search result
total_pages: the total number of pages which must be queried to get all the results



*/

import * as http from "http"

async function questionTwo(author: string): Promise<string[]> {
  let history = ''

   let res = await http.get(`http://jsonmock.hackerrank.com/api/article_users?username=${author}`)
  
   debugger;
 
  return ['butts', 'butts']
};

questionTwo('epaga')