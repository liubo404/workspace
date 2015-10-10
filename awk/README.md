
'''awk
awk '{print  }' text.txt >t2.txt
paste -d, -s t2.txt 
awk '{print  }' text.txt |paste -d, -s - 


echo "the date is (Dec 2013)"|grep -Po '\(\K[^)]*'

''' 1037  cat acn.txt_b >> acn.txt
 1038  cat acn.txt
 1039  sed -i 's/\\\u7AD9\\\u70B9/\\u8BFE\\u5802/g' acn.txt
 1040   grep --include=\*_zh_CN.properties -rnw '/home/abc/tools/bupt/sakai/tomcat7/webapps/' -e "\\\u7AD9\\\u70B9"


```bash
 grep --include=\*_zh_CN.properties -rnwl . -e "\\\u7AD9\\\u70B9" |xargs sed -i 's/\\\u7AD9\\\u70B9/\\u8BFE\\u5802/g'
 grep --include=\*_zh_CN.properties -rnwl '/home/abc/tools/bupt/sakai/tomcat7/webapps/' -e "\\\u7AD9\\\u70B9" |xargs sed -i 's/\\\u7AD9\\\u70B9/\\u8BFE\\u5802/g'
```
