
'''awk
awk '{print  }' text.txt >t2.txt
paste -d, -s t2.txt 
awk '{print  }' text.txt |paste -d, -s - 
'''