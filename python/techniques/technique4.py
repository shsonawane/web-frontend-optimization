import htmlmin
import os

path = os.getcwd() + "\\page\\"
urls=["Google.html", "YouTube.html", "Manipal.html", "Pinterest.html"]

count=0
for url in urls:
    url=path+url
    file = open(url,"r+",encoding="utf-8" )
    data = file.read()
    # Technique 4 : HTML minification
    minified = htmlmin.minify(data, remove_empty_space=True)
    
    with open(path+"tech4_output_"+urls[count], "w", encoding="utf-8") as file:
        file.write(str(minified))
        file.close()
        
    count=count+1
    print(url+" over!")
    
 