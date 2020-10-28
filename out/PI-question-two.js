"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
function questionTwo(author) {
    return __awaiter(this, void 0, void 0, function () {
        var history, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    history = '';
                    return [4 /*yield*/, http.get("http://jsonmock.hackerrank.com/api/article_users?username=" + author)];
                case 1:
                    res = _a.sent();
                    debugger;
                    return [2 /*return*/, ['butts', 'butts']];
            }
        });
    });
}
;
questionTwo('epaga');
//# sourceMappingURL=PI-question-two.js.map