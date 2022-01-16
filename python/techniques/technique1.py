from bs4 import BeautifulSoup
import os

path = os.getcwd() + "\\pages\\"
urls=["Google.html", "YouTube.html", "Manipal.html", "Pinterest.html"]

count=0
for url in urls:
    url=path+url
    file = open(url,"r+",encoding="utf-8" )
    data = file.read()
    soup1=BeautifulSoup(data)
    soup2=soup1
    # Technique 1 : Move scripts to bottom of page
    for script in soup1.find_all('script'):
        temp=script
        script.replaceWith('')
        soup1.body.insert(len(soup1.body.contents),temp)
    
    with open(path+"tech1_output_"+urls[count], "w", encoding="utf-8") as file:
        file.write(str(soup1))
        file.close()
        
    count=count+1
    print(url+" over!")
    
 