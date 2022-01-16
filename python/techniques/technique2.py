from bs4 import BeautifulSoup
import os

path = os.getcwd() + "\\pages\\"
urls=["Google.html", "YouTube.html", "Manipal.html", "Pinterest.html"]

for url in urls:
    file = open(path+url,"r+",encoding="utf-8" )
    data = file.read()
    soup1=BeautifulSoup(data)
    soup2=soup1
	
    # Technique 2 : Move scripts to separate js file
    js_file=open(path+url+".js","w",encoding="utf-8")
    
    js_include=soup2.new_tag("script",src=url+".js")
    soup2.body.insert(len(soup2.body.contents),js_include)

    for script in soup2.find_all('script'):
        if 'src' in script.attrs.keys():
            script_src=soup2.new_tag("script",src=script.attrs['src'])
            soup2.head.insert(len(soup2.head.contents),script_src)
            if(script.string is not None):
                js_file.write(str(script.string))    
        else:
            js_file.write(str(script.string))

        script.replaceWith('')
    
    with open(path+"tech2_output_"+url, "w", encoding="utf-8") as file:
        file.write(str(soup1))
        file.close()
        
    print(url+" over!")
    
 