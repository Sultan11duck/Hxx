[rewrite_local]
^https:\/\/github\.com\/ url request-header (\r\n)Accept-Language:.+(\r\n) request-header $1Accept-Language: en-us$2

[mitm]
hostname = raw.githubusercontent.com,gist.githubusercontent.com,github.com
