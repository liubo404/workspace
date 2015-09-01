from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen("http://gaokao.chsi.com.cn/sch/search--searchType-1,start-0.dhtml")

bs = BeautifulSoup(html.read())

school = bs.findAll("tr",{"bgcolor":"#FFFFFF"})

for s in school:
    td = s.findAll("td")
    for t in td:
        print(t.get_text())
# print(s.findAll("td"))

