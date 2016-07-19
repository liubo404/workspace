from urllib.request import urlopen
from bs4 import BeautifulSoup
import csv
import re

csvFile = open("school.csv","wt")


def getschool(pageno):
   url = "http://gaokao.chsi.com.cn/sch/search--searchType-1,start-"+str(pageno)+".dhtml"
   print(url)
   html = urlopen(url)
   bs = BeautifulSoup(html.read())   
   try:
      table = bs.findAll("table",{"bgcolor":"#E1E1E1"})
      writer = csv.writer(csvFile);
      for t in table:
         school = t.findAll("tr",{"bgcolor":"#FFFFFF"})    
         for s in school:
            td = s.findAll("td")
            alist=[]
            for t in td:
               txt =t.get_text()
               
               n = txt.find("document")
               if n > 0:
                  continue
               txt=txt.strip(' \t\n\r')
               #first = txt.split()
               #x=['']*4
               #if len(first) >1:
               #   for index in range(len(first)):
               #      x[index]=first[index]
                     
               #else:   
               alist.append(txt)
            print(alist)
            writer.writerow(alist)
   finally:
     # csvFile.close()
      print('exec over')
   return


for num in range(128):
   num = num*20
   getschool(num)






