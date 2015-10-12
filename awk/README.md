
```awk
awk '{print  }' text.txt >t2.txt
paste -d, -s t2.txt 
awk '{print  }' text.txt |paste -d, -s - 


echo "the date is (Dec 2013)"|grep -Po '\(\K[^)]*'

 cat acn.txt_b >> acn.txt
 cat acn.txt
 sed -i 's/\\\u7AD9\\\u70B9/\\u8BFE\\u5802/g' acn.txt
 grep --include=\*_zh_CN.properties -rnw '/home/abc/tools/bupt/sakai/tomcat7/webapps/' -e "\\\u7AD9\\\u70B9"
```

```bash
 grep --include=\*_zh_CN.properties -rnwl . -e "\\\u7AD9\\\u70B9" |xargs sed -i 's/\\\u7AD9\\\u70B9/\\u8BFE\\u5802/g'
 grep --include=\*_zh_CN.properties -rnwl '/home/abc/tools/bupt/sakai/tomcat7/webapps/' -e "\\\u7AD9\\\u70B9" |xargs sed -i 's/\\\u7AD9\\\u70B9/\\u8BFE\\u5802/g'
```

to uppercase
str="some string"
echo $str | awok '{print toupper($0)}'